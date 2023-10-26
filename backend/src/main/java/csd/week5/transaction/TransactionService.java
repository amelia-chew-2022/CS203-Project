package csd.week5.transaction;

import java.util.List;

public interface TransactionService {
    List<Transaction> listTransactions();

    Transaction getTransaction(Long id);

    Transaction addTransaction(Transaction book);

    Transaction updateTransaction(Long id, Transaction book);

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