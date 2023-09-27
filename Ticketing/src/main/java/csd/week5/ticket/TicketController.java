package csd.week5.ticket;

import java.util.List;

import javax.validation.Valid;


import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.ResponseStatus;
// import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3030")

@RestController
public class TicketController {
    private TicketService ticketService;

    public TicketController(TicketService bs){
        this.ticketService = bs;
    }

    @GetMapping("/tickets")
    public List<Ticket> getTickets(){
        return ticketService.listTickets();
    }

    @GetMapping("/tickets/{id}")
    public Ticket getTicket(@PathVariable Long id){
        Ticket ticket = ticketService.getTicket(id);
        if(ticket == null) throw new TicketNotFoundException(id);
        return ticketService.getTicket(id);

    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/tickets")
    public Ticket addTicket(@Valid @RequestBody Ticket ticket) {
        return ticketService.addTicket(ticket);
    }

    @PutMapping("/tickets/{id}")
    public Ticket updateTicket(@PathVariable Long id, @Valid @RequestBody Ticket newTicketInfo){
        Ticket ticket = ticketService.updateTicket(id, newTicketInfo);
        if(ticket == null) throw new TicketNotFoundException(id);
        
        return ticket;
    }

    @DeleteMapping("/tickets/{id}")
    public void deleteTicket(@PathVariable Long id){
        try{
            ticketService.deleteTicket(id);
         }catch(EmptyResultDataAccessException e) {
            throw new TicketNotFoundException(id);
         }
    }

    @GetMapping("/tickets/{id}/{userID}/buy")
    public void buyTicket(@PathVariable Long id, @PathVariable Long userID){
        ticketService.buyTicket(id, userID);
    }
}