package csd.week5.ticket;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import csd.week5.transaction.*;
import csd.week5.user.*;

@Service
public class TicketServiceImpl implements TicketService {

    private TicketRepository tickets;
    private TransactionRepository transactionRepository;
    // private UserRepository users;

    public TicketServiceImpl(TicketRepository tickets,TransactionRepository transactionRepository) {
        this.tickets = tickets;
        this.transactionRepository=transactionRepository;
        // this.users = users;
    }

    @Override
    public List<Ticket> listTickets() {
        return tickets.findAll();
    }

    // @Override
    public List<Ticket> listTicketsByTransaction_Id(Transaction transaction) {
        return tickets.findAllTicketsByTransaction(transaction);
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
    public Ticket updateAvailabilityById(Long id, Boolean available, Long transactionId) {
        return tickets.findById(id).map(ticket -> {
            ticket.setAvailable(available);
            
            if (transactionId != null) {
                // Fetch the transaction from the database
                Transaction transaction = transactionRepository.findById(transactionId).orElse(null);
                ticket.setTransaction(transaction); // Now we directly set the Transaction object
            } else {
                ticket.setTransaction(null);
            }
            
            return tickets.save(ticket);
        }).orElse(null);
    }


    // commented our buyTicket since availability will be updated in
    // TransactionServiceImpl with the method addTransaction

    // public Ticket buyTicket(Long id, Long userID) {
    // Ticket ticket = getTicket(id);
    // users.findById(userID).map(user -> {
    // ticket.setUser(user);
    // ticket.setAvailability(false);
    // return tickets.save(ticket);
    // });
    // return ticket;
}
