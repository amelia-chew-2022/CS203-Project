package csd.week5.transaction;

import java.util.List;
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
    public Transaction updateTransaction(Long id, User newUser) {
        return Transactions.findById(id).map(existingTransaction -> {
            if (users.findByUsername(newUser.getUsername()).isEmpty()) {
                return null; //return null if cannot find user
            } else {existingTransaction.setUser(newUser);}
            return Transactions.save(existingTransaction);
        }).orElse(null); //return null if cannot find transaction
    }

    @Override
    public void deleteTransaction(Long id) {
        Transactions.deleteById(id);
    }

}