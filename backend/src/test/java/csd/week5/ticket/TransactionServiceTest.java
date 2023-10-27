package csd.week5.ticket;
import csd.week5.user.User;
import csd.week5.user.UserRepository;
import csd.week5.transaction.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class TransactionServiceTest {
    @Mock
    private TransactionRepository Transactions;
    @Mock
    private UserRepository users;

    @InjectMocks
    private TransactionServiceImpl TransactionService;

    @Test
    void addTransaction_NewTransaction_ReturnSavedTransaction() {
        User user = new User(null, null, null, null, null, null, null);
        Transaction Transaction = new Transaction(100, user, "01-01-2001");

        when(Transactions.save(any(Transaction.class))).thenReturn(Transaction);

        Transaction savedTransaction = TransactionService.addTransaction(Transaction);

        assertNotNull(savedTransaction);
        verify(Transactions).save(Transaction);
    }

    @Test
    void updateTransaction_TransactionNotFound_ReturnNull() {
        Long TransactionId = 10L;
        when(Transactions.findById(TransactionId)).thenReturn(Optional.empty());

        Transaction updatedTransaction = TransactionService.updateTransaction(TransactionId, any(User.class));

        assertNull(updatedTransaction);
        verify(Transactions).findById(TransactionId);
    }

    @Test
    void updateTransaction_UserNotFound_ReturnNull() {
        Long TransactionId = 10L;
        User user = new User("dummy", null, null, null, null, null, null);
        Transaction Transaction = new Transaction(100, user, "01-01-2001");
        when(Transactions.findById(TransactionId)).thenReturn(Optional.of(Transaction));
        when(users.findByUsername(anyString())).thenReturn(Optional.empty());

        Transaction updatedTransaction = TransactionService.updateTransaction(TransactionId, user);

        assertNull(updatedTransaction);
        verify(Transactions).findById(TransactionId);
        verify(users).findByUsername(anyString());
    }

    @Test
    void updateTransaction_Found_ReturnTransaction() {
        Transaction Transaction = new Transaction(100, null, "01-01-2001");
        Long TransactionId = 10L;
        User newUser = new User("dummy", null, null, null, null, null, null); 
        Transaction expected = new Transaction(100, newUser, "01-01-2001");
        Optional<Transaction> original = Optional.of(Transaction);
        when(Transactions.findById(TransactionId)).thenReturn(original);
        when(Transactions.save(Transaction)).thenReturn(Transaction);
        when(users.findByUsername(anyString())).thenReturn(Optional.of(newUser));

        Transaction updatedTransaction = TransactionService.updateTransaction(TransactionId, newUser);

        assertEquals(expected, updatedTransaction);
        verify(Transactions).findById(TransactionId);
        verify(Transactions).save(Transaction);
        verify(users).findByUsername(anyString());
    }
}
