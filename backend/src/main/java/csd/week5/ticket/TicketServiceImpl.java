package csd.week5.ticket;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

import csd.week5.user.*;

@Service
public class TicketServiceImpl implements TicketService {

    private TicketRepository tickets;
    private UserRepository users;

    public TicketServiceImpl(TicketRepository tickets, UserRepository users) {
        this.tickets = tickets;
        this.users = users;
    }

    @Override
    public List<Ticket> listTickets() {
        return tickets.findAll();
    }

    @Override
    public Ticket getTicket(Long id) {
        return tickets.findById(id).orElse(null);
    }

    @Override
    public Ticket addTicket(Ticket ticket) {
        return tickets.save(ticket);
    }

    @Override
    public Ticket updateTicket(Long id, Ticket newTicketInfo) {
        return tickets.findById(id).map(ticket -> {
            ticket.setTitle(newTicketInfo.getTitle());
            return tickets.save(ticket);
        }).orElse(null);

    }

    /**
     * Remove a book with the given id
     * Spring Data JPA does not return a value for delete operation
     * Cascading: removing a book will also remove all its associated reviews
     */
    @Override
    public void deleteTicket(Long id) {
        tickets.deleteById(id);
    }

    @Override
    public Ticket updateAvailabilityById(Long id, Boolean available) {
        return tickets.findById(id).map(ticket -> {
            ticket.setAvailable(available);
            return tickets.save(ticket);
        }).orElse(null);
    }

    @Override
    public Ticket buyTicket(Long id, Long userID) {
        Optional<Ticket> t = tickets.findById(id);
        Optional<User> u = users.findById(userID);
        if (!t.equals(Optional.empty()) && !u.equals(Optional.empty())) {
            t.get().setAvailable(false);
            t.get().setUser(u.get());
            return tickets.save(t.get());
        }
        return null;
    }
}