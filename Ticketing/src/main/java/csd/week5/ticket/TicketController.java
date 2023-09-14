package csd.week5.ticket;

import java.util.List;

import javax.validation.Valid;


import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TicketController {
    private TicketService ticketService;

    public TicketController(TicketService bs){
        this.ticketService = bs;
    }

    @GetMapping("/tickets")
    public List<Ticket> getBooks(){
        return ticketService.listTickets();
    }

    @GetMapping("/tickets/{id}")
    public Ticket getBook(@PathVariable Long id){
        Ticket book = ticketService.getTicket(id);
        if(book == null) throw new TicketNotFoundException(id);
        return ticketService.getTicket(id);

    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/tickets")
    public Ticket addTicket(@Valid @RequestBody Ticket ticket) {
        return ticketService.addTicket(ticket);
    }

    @PutMapping("/tickets/{id}")
    public Ticket updateBook(@PathVariable Long id, @Valid @RequestBody Ticket newTicketInfo){
        Ticket book = ticketService.updateTicket(id, newTicketInfo);
        if(book == null) throw new TicketNotFoundException(id);
        
        return book;
    }

    @DeleteMapping("/tickets/{id}")
    public void deleteBook(@PathVariable Long id){
        try{
            ticketService.deleteTicket(id);
         }catch(EmptyResultDataAccessException e) {
            throw new TicketNotFoundException(id);
         }
    }
}