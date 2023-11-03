package csd.week5.ticket;

import java.util.List;

public interface TicketService {
    List<Ticket> listTickets();

    Ticket getTicket(Long id);

    Ticket addTicket(Ticket ticket);

    Ticket updateTicket(Long id, Ticket newTicketInfo);

    Ticket updateAvailabilityById(Long id, Boolean available);

    /**
     * Change method's signature: do not return a value for delete operation
     * 
     * @param id
     */
    void deleteTicket(Long id);

    Ticket buyTicket(Long id, Long userID);
}