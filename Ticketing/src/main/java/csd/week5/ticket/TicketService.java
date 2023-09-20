package csd.week5.ticket;

import java.util.List;

public interface TicketService {
    List<Ticket> listTickets();
    Ticket getTicket(Long id);
    Ticket addTicket(Ticket book);
    Ticket updateTicket(Long id, Ticket book);

    /**
     * Change method's signature: do not return a value for delete operation
     * @param id
     */
    void deleteTicket(Long id);

    Ticket buyTicket(Long id, Long userID);
}