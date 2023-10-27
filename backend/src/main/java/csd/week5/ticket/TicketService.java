package csd.week5.ticket;

import java.util.List;

import csd.week5.transaction.Transaction;

public interface TicketService {
    List<Ticket> listTickets();

    List<Ticket> listTicketsByTransactionId(Transaction transaction);

    Ticket getTicket(Long id);

    Ticket addTicket(Ticket book);

    Ticket updateTicket(Long id, Ticket book);

    Ticket updateAvailabilityById(Long id, Boolean available);

    /**
     * Change method's signature: do not return a value for delete operation
     * 
     * @param id
     */
    void deleteTicket(Long id);

    Ticket buyTicket(Long id, Long userID);
}