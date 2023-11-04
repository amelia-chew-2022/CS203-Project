package csd.week5.transaction;

import java.util.List;

import csd.week5.ticket.Ticket;

public interface TransactionService {
    List<Transaction> listTransactions();

    List<Transaction> listActiveTransactions();

    Transaction getTransaction(Long id);

    /* Transaction addTransaction(Transaction Transaction, Ticket[] ticketList); */
    Transaction addTransaction(Transaction Transaction);

    Transaction confirmTransaction(Long id);

    // Transaction updateTransaction(Long id, Transaction book);

    boolean isTransactionExpired(Transaction transaction);

    void handleTimeoutTransactions();

    void checkTimeoutTransactions();

    /**
     * Change method's signature: do not return a value for delete operation
     * 
     * @param id
     */
    void deleteTransaction(Long id);
}