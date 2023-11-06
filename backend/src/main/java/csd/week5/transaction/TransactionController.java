package csd.week5.transaction;

import java.util.List;
import csd.week5.user.User;

import javax.validation.Valid;

import csd.week5.ticket.Ticket;

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

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class TransactionController {
    
    private TransactionService TransactionService;

    public TransactionController(TransactionService bs) {
        this.TransactionService = bs;
    }

    @GetMapping("/Transactions")
    public List<Transaction> getTransactions() {
        return TransactionService.listTransactions();
    }

    @GetMapping("/Transactions/{id}")
    public Transaction getTransaction(@PathVariable Long id) {
        Transaction Transaction = TransactionService.getTransaction(id);
        if (Transaction == null)
            throw new TransactionNotFoundException(id);
        return TransactionService.getTransaction(id);

    }

   /*  // TODO: edit the parameters to also get the array of selectedSeats
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/Transactions")
    public Transaction addTransaction(@Valid @RequestBody Transaction Transaction, Ticket[] ticketList) {
        return TransactionService.addTransaction(Transaction, ticketList);
    } */

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/Transactions")
    public Transaction createTransaction(@Valid @RequestBody TransactionRequest TransactionRequest) {
        return TransactionService.createTransaction(TransactionRequest);
    }

    // @PutMapping("/Transactions/{id}")
    // public Transaction updateTransaction(@PathVariable Long id, @Valid
    // @RequestBody Transaction newTransactionInfo){
    // Transaction Transaction = TransactionService.updateTransaction(id,
    // newTransactionInfo);
    // if(Transaction == null) throw new TransactionNotFoundException(id);

    // return Transaction;
    // }

    @PutMapping("Transactions/{id}")
    public Transaction completeTransaction(@PathVariable Long id) {
        Transaction transaction = TransactionService.confirmTransaction(id);
        if (transaction == null) {
            throw new TransactionNotFoundException(id);
        }

        return transaction;
    }

    @DeleteMapping("/Transactions/{id}")
    public void deleteTransaction(@PathVariable Long id) {
        try {
            TransactionService.deleteTransaction(id);
        } catch (EmptyResultDataAccessException e) {
            throw new TransactionNotFoundException(id);
        }
    }

}