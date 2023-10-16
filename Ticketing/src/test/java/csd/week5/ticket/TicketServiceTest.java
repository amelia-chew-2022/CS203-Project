package csd.week5.ticket;
import csd.week5.ticket.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class TicketServiceTest {

    @Mock
    private TicketRepository tickets;

    @InjectMocks
    private TicketServiceImpl ticketService;

    @Test
    void addBook_NewTitle_ReturnSavedBook() {
        // arrange ***
        Ticket ticket = new Ticket("Dummy", "123", "1ac23V", "100");
        // mock the "save" operation
        when(tickets.save(any (Ticket.class))).thenReturn(ticket);

        // act ***
        Ticket savedTicket = ticketService.addTicket(ticket);

        // assert ***
        assertNotNull(savedTicket);
        verify(tickets).save(ticket);
    }

    @Test
    void updateTicket_NotFound_ReturnNull() {
        Ticket ticket = new Ticket("Updated", "123", "1ac23V", "100");
        Long ticketId = 10L;
        when(tickets.findById(ticketId)).thenReturn(Optional.empty());

        Ticket updatedTicket = ticketService.updateTicket(ticketId, ticket);

        assertNull(updatedTicket);
        verify(tickets).findById(ticketId);
    }

}