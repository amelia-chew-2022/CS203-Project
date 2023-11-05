package csd.week5.ticket;
import csd.week5.transaction.Transaction;
import csd.week5.transaction.TransactionRepository;
import csd.week5.transaction.TransactionServiceImpl;
import csd.week5.user.User;
import csd.week5.user.UserRepository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class TransactionServiceTest {

    @Mock
    private TransactionRepository transactions;

    @InjectMocks
    private TransactionServiceImpl transactionService;

    @Test
    void addTransaction_NewTitle_ReturnSavedTransaction() {
        Transaction Transaction = new Transaction(0.0, null);

        when(transactions.save(any (Transaction.class))).thenReturn(Transaction);

        Transaction savedTransaction = transactionService.addTransaction(Transaction);

        assertNotNull(savedTransaction);
        verify(transactions).save(Transaction);
    }

    @Test
    void getTransaction_Found_ReturnTransaction() {
        Transaction Transaction = new Transaction(0.0, null);
        Long id = 1L;

        when(transactions.findById(id)).thenReturn(Optional.of(Transaction));

        Transaction getTransaction = transactionService.getTransaction(id);

        assertEquals(Transaction, getTransaction);
        verify(transactions).findById(id);
    }

    @Test
    void getTransaction_NotFound_ReturnNull() {
        Long id = 1L;

        when(transactions.findById(id)).thenReturn(Optional.empty());

        Transaction getTransaction = transactionService.getTransaction(id);

        assertNull(getTransaction);
        verify(transactions).findById(id);
    }

    @Test
    void confirmTransaction_Found_ReturnTransaction() {
        Transaction Transaction = new Transaction(0.0, null);
        Long id = 1L;
        when(transactions.findById(id)).thenReturn(Optional.of(Transaction));
        when(transactions.save(Transaction)).thenReturn(Transaction);
        Transaction getTransaction = transactionService.confirmTransaction(id);

        assertTrue(getTransaction.isCompleted());
        verify(transactions).findById(id);
        verify(transactions).save(Transaction);
    }

    @Test
    void confirmTransaction_NotFound_ReturnNull() {
        Long id = 1L;
        when(transactions.findById(id)).thenReturn(Optional.empty());
        Transaction getTransaction = transactionService.confirmTransaction(id);

        assertNull(getTransaction);
        verify(transactions).findById(id);
    }

    @Test
    void isTransactionExpired_Expired_ReturnTrue() {
        Transaction Transaction = new Transaction(0.0, null);
        Transaction.setTransaction_date(new Date)
        Long id = 1L;
        when(transactions.findById(id)).thenReturn(Optional.empty());
        Transaction getTransaction = transactionService.confirmTransaction(id);

        assertNull(getTransaction);
        verify(transactions).findById(id);
    }
    public boolean isTransactionExpired(Transaction transaction) {
        Date currentTime = new java.sql.Date(new java.util.Date().getTime());
        long elapsedTime = currentTime.getTime() - transaction.getTransaction_date().getTime();
        return elapsedTime >= 10000;
    }
}