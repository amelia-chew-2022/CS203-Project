package csd.week5.ticket;
import csd.week5.user.User;
import csd.week5.user.UserRepository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

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
    @Mock
    private UserRepository users;

    @InjectMocks
    private TicketServiceImpl ticketService;

    @Test
    void addTicket_NewTitle_ReturnSavedTicket() {
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
        Long ticketId = 10L;
        when(tickets.findById(ticketId)).thenReturn(Optional.empty());

        Ticket updatedTicket = ticketService.updateTicket(ticketId, "Updated");

        assertNull(updatedTicket);
        verify(tickets).findById(ticketId);
    }

    @Test
    void updateTicket_Found_ReturnTicket() {
        Ticket ticket = new Ticket("Original", "123", "1ac23V", "100");
        Long ticketId = 10L;
        Ticket expected = new Ticket("Updated", "123", "1ac23V", "100");
        Optional<Ticket> original = Optional.of(ticket);
        when(tickets.findById(ticketId)).thenReturn(original);
        when(tickets.save(ticket)).thenReturn(ticket);

        Ticket updatedTicket = ticketService.updateTicket(ticketId, "Updated");

        assertEquals(expected, updatedTicket);
        verify(tickets).findById(ticketId);
        verify(tickets).save(ticket);
    }

    @Test
    void buyTicket_Successful_ReturnTicket() {
        Ticket ticket = new Ticket("Ticket", "123", "1ac23V", "100");
        Long ticketId = 10L;
        User user = new User("Dummy", null, "ROLE_ADMIN", "nic@gmail.com", "23698745", "SMU building", "87654321");
        Long userId = 11L;
        Ticket expected = new Ticket("Ticket", "123", "1ac23V", "100", false);
        expected.setUser(user);

        when(tickets.findById(ticketId)).thenReturn(Optional.of(ticket));
        when(users.findById(userId)).thenReturn(Optional.of(user));
        when(tickets.save(ticket)).thenReturn(ticket);

        Ticket updatedTicket = ticketService.buyTicket(ticketId, userId);

        assertEquals(expected, updatedTicket);
        verify(tickets).findById(ticketId);
        verify(users).findById(userId);
        verify(tickets).save(ticket);
    }
}