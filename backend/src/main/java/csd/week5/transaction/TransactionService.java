package csd.week5.transaction;

import java.util.List;
import csd.week5.user.User;

public interface TransactionService {
    List<Transaction> listTransactions();

    Transaction getTransaction(Long id);

    Transaction addTransaction(Transaction Transaction);

    Transaction updateTransaction(Long id, User newUser);


    /**
     * Change method's signature: do not return a value for delete operation
     * 
     * @param id
     */
    void deleteTransaction(Long id);

}