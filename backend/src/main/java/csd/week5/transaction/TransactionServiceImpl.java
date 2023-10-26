package csd.week5.transaction;

import java.sql.Date;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import csd.week5.user.*;

@Service
public class TransactionServiceImpl implements TransactionService {

    private TransactionRepository Transactions;
    private UserRepository users;

    public TransactionServiceImpl(TransactionRepository Transactions, UserRepository users) {
        this.Transactions = Transactions;
        this.users = users;
    }

    @Override
    public List<Transaction> listTransactions() {
        return Transactions.findAll();
    }

    @Override
    public Transaction getTransaction(Long id) {
        return Transactions.findById(id).orElse(null);
    }

    @Override
    public Transaction addTransaction(Transaction Transaction) {
        return Transactions.save(Transaction);
    }

    @Override
    public Transaction updateTransaction(Long id, Transaction newTransactionInfo) {
        return Transactions.findById(id).map(Transaction -> {
            Transaction.setTitle(newTransactionInfo.getId());
            return Transactions.save(Transaction);
        }).orElse(null);

    }

    public boolean isTransactionExpired(Transaction transaction) {
        Date currentTime = new Date(0);
        long elapsedTime = currentTime.getTime() - transaction.getTransaction_date().getTime();
        return elapsedTime >= 10000;
    }

    public void handleTimeoutTransactions() {
        List<Transaction> transactions = Transactions.findAll();

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

    /**
     * Remove a book with the given id
     * Spring Data JPA does not return a value for delete operation
     * Cascading: removing a book will also remove all its associated reviews
     */
    @Override
    public void deleteTransaction(Long id) {
        Transactions.deleteById(id);
    }



}