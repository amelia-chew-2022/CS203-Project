package csd.week5.transaction;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import csd.week5.ticket.*;
// import csd.week5.ticket.TicketRepository;
import csd.week5.user.*;

@Service
public class TransactionServiceImpl implements TransactionService {

    private TransactionRepository Transactions;
    private UserRepository userRepository;
    private TicketRepository tickets;

    public TransactionServiceImpl(TransactionRepository Transactions, UserRepository userRepository, TicketRepository tickets) {
        this.Transactions = Transactions;
        this.userRepository = userRepository;
        this.tickets = tickets;
    }

    @Override
    public List<Transaction> listTransactions() {
        return Transactions.findAll();
    }

    // i assumed JPA automatically created this findAllByStatus method
    @Override
    public List<Transaction> listActiveTransactions() {
        return Transactions.findAllByCompleted(false);
    }

    @Override
    public Transaction getTransaction(Long id) {
        return Transactions.findById(id).orElse(null);
    }



   /*  @Override
    public Transaction addTransaction(Transaction Transaction, Ticket[] ticketList) {
        // create transaction
        Transaction transaction = Transactions.save(Transaction);
        long userID = transaction.getUser().getId();

        // update selected tickets in the array: availability and transaction_id
        for (Ticket ticket : ticketList) {
            ticket.setAvailable(false);
            // change transaction to transaction_id if we changed the foreign key in
            // Ticket.java
            ticket.setTransaction(transaction);

        }

        return transaction;
    } */

     public Transaction addTransaction(Transaction Transaction) {
        // create transaction
        Transaction transaction = Transactions.save(Transaction);
        //long userID = transaction.getUser().getId();

        return transaction;
    }

    @Override
    public Transaction createTransaction(TransactionRequest transactionRequest) {
        double total_price = transactionRequest.getTotal_price(); // ensure this is a double
        Long user_id = transactionRequest.getUser_id(); // use Long instead of int
        User user = userRepository.findById(user_id) // findById expects a Long
                     .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    
        Transaction transaction = new Transaction(total_price, user); // Assuming such a constructor exists
        return Transactions.save(transaction);
    }
    

    // confirms that the transaction is completed and the seats selected are final
    // and paid for
    @Override
    public Transaction confirmTransaction(Long id) {
        // not sure if i have to still check if transaction time has expired in this
        // method or not, since the transaction validity is periodically checked
        return Transactions.findById(id).map(Transaction -> {
            Transaction.setCompleted(true);
            return Transactions.save(Transaction);
        }).orElse(null);
    }

    // @Override
    // public Transaction updateTransaction(Long id, Transaction newTransactionInfo)
    // {
    // return Transactions.findById(id).map(Transaction -> {
    // Transaction.setTitle(newTransactionInfo.getId());
    // return Transactions.save(Transaction);
    // }).orElse(null);

    // }

    public boolean isTransactionExpired(Transaction transaction) {
        Date currentTime = new java.sql.Date(new java.util.Date().getTime());
        long elapsedTime = currentTime.getTime() - transaction.getTransaction_date().getTime();
        return elapsedTime >= 10000;
    }

    public void handleTimeoutTransactions() {
        List<Transaction> transactions = listActiveTransactions();

        for (Transaction transaction : transactions) {
            if (isTransactionExpired(transaction)) {
                // Handle the expired transaction (e.g., cancel it or take appropriate action).
                deleteTransaction(transaction.getId());
            }
        }
    }

    @Scheduled(fixedRate = 2000) // Runs every minute
    public void checkTimeoutTransactions() {
        handleTimeoutTransactions();
    }

    @Override
    public void deleteTransaction(Long id) {
        Transaction transaction = Transactions.findById(id).orElse(null);
        List<Ticket> ticketList = tickets.findAllTicketsByTransactionId(id);

        

        // revert availability and transaction_id attributes
        for (Ticket ticket : ticketList) {
            ticket.setAvailable(true);
            // change transaction to transaction_id if we changed the foreign key in
            // Ticket.java
            ticket.setTransaction(null);
            ;
        }

        Transactions.deleteById(id);
    }

}