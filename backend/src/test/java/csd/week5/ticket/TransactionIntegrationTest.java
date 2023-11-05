package csd.week5.ticket;

import static org.junit.jupiter.api.Assertions.*;

import java.net.URI;
import java.util.Optional;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import csd.week5.transaction.TransactionRepository;
import csd.week5.transaction.Transaction;
import csd.week5.user.User;
import csd.week5.user.UserRepository;

/** Start an actual HTTP server listening at a random port*/
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class TransactionIntegrationTest {

	@LocalServerPort
	private int port;

	private final String baseUrl = "http://localhost:";

	@Autowired
	/**
	 * Use TestRestTemplate for testing a real instance of your application as an external actor.
	 * Convenient subclass of RestTemplate that is suitable for integration tests.
 	 * It is fault tolerant, and optionally can carry Basic authentication headers.
	 */
	private TestRestTemplate restTemplate;

	@Autowired
	private TransactionRepository transactions;

	@Autowired
	private UserRepository users;

	@Autowired
	private BCryptPasswordEncoder encoder;


	@AfterEach
	void tearDown(){
		transactions.deleteAll();
		users.deleteAll();
	}

	@Test
	public void getTransactions_Success() throws Exception {
		URI uri = new URI(baseUrl + port + "/Transactions");
		transactions.save(new Transaction(0.0, null, "test"));
		
		// Need to use array with a ReponseEntity here
		ResponseEntity<Transaction[]> result = restTemplate.getForEntity(uri, Transaction[].class);
		Transaction[] transactions = result.getBody();
		
		assertEquals(200, result.getStatusCode().value());
		assertEquals(1, transactions.length);
	}

	@Test
	public void getTransaction_ValidTransactionId_Success() throws Exception {
		Transaction Transaction = new Transaction(0.0, null, "test");
		Long id = transactions.save(Transaction).getId();
		URI uri = new URI(baseUrl + port + "/Transactions/" + id);
		
		ResponseEntity<Transaction> result = restTemplate.getForEntity(uri, Transaction.class);
			
		assertEquals(200, result.getStatusCode().value());
		assertEquals(Transaction.getTransaction_date(), result.getBody().getTransaction_date());
	}

	@Test
	public void getTransaction_InvalidTransactionId_Failure() throws Exception {
		URI uri = new URI(baseUrl + port + "/Transactions/1");
		
		ResponseEntity<Transaction> result = restTemplate.getForEntity(uri, Transaction.class);
			
		assertEquals(404, result.getStatusCode().value());
	}

	@Test
	public void addTransaction_Success() throws Exception {
		URI uri = new URI(baseUrl + port + "/Transactions");
		Transaction Transaction = new Transaction(0.0, null, "test");
		users.save(new User("admin", encoder.encode("goodpassword"), "ROLE_ADMIN", "admin@gmail.com", "123456789", "SMU building", "12345678"));

		ResponseEntity<Transaction> result = restTemplate.withBasicAuth("admin", "goodpassword")
										.postForEntity(uri, Transaction, Transaction.class);
			
		assertEquals(201, result.getStatusCode().value());
		assertEquals(Transaction.getTransaction_date(), result.getBody().getTransaction_date());
	}

	/**
	 * Integration tests for delete/update a Transaction.
	 * For delete operation: there should be two tests for success and failure scenarios.
	 * Similarly, there should be two tests for update operation.
	 */
	@Test
	public void deleteTransaction_ValidTransactionId_Success() throws Exception {
		Transaction Transaction = transactions.save(new Transaction(0.0, null, "test"));
		URI uri = new URI(baseUrl + port + "/Transactions/" + Transaction.getId().longValue());
		users.save(new User("admin", encoder.encode("goodpassword"), "ROLE_ADMIN", "admin@gmail.com", "123456789", "SMU building", "12345678"));
		
		//restTemplate.withBasicAuth("admin", "goodpassword").delete(uri);
		ResponseEntity<Void> result = restTemplate.withBasicAuth("admin", "goodpassword")
										.exchange(uri, HttpMethod.DELETE, null, Void.class);
		
		assertEquals(200, result.getStatusCode().value());
		// An empty Optional should be returned by "findById" after deletion
		Optional<Transaction> emptyValue = Optional.empty();
		assertEquals(emptyValue, transactions.findById(Transaction.getId()));
	}

	@Test
	public void deleteTransaction_InvalidTransactionId_Failure() throws Exception {
		URI uri = new URI(baseUrl + port + "/Transactions/1");
		users.save(new User("admin", encoder.encode("goodpassword"), "ROLE_ADMIN", "admin@gmail.com", "123456789", "SMU building", "12345678"));
		
		ResponseEntity<Void> result = restTemplate.withBasicAuth("admin", "goodpassword")
										.exchange(uri, HttpMethod.DELETE, null, Void.class);
		
		assertEquals(404, result.getStatusCode().value());
	}

	@Test
	public void updateTransaction_ValidTransactionId_Success() throws Exception {
		Transaction Transaction = transactions.save(new Transaction(0.0, null, "test"));
		URI uri = new URI(baseUrl + port + "/Transactions/" + Transaction.getId().longValue());
		User newUser = new User("dummy", encoder.encode("qwertyuiop"), "ROLE_USER", "admin@gmail.com", "123456789", "SMU building", "12345678");
		users.save(newUser);
		users.save(new User("admin", encoder.encode("goodpassword"), "ROLE_ADMIN", "admin@gmail.com", "123456789", "SMU building", "12345678"));

		ResponseEntity<Transaction> result = restTemplate.withBasicAuth("admin", "goodpassword")
										.exchange(uri, HttpMethod.PUT, new HttpEntity<>(newUser), Transaction.class);
			
		assertEquals(200, result.getStatusCode().value());
		assertEquals(newUser, result.getBody().getUser());
	}

	@Test
	public void updateTransaction_InvalidTransactionId_Failure() throws Exception {
		URI uri = new URI(baseUrl + port + "/Transactions/1");
		users.save(new User("admin", encoder.encode("goodpassword"), "ROLE_ADMIN", "admin@gmail.com", "123456789", "SMU building", "12345678"));
		User newUser = new User("dummy", encoder.encode("password"), "ROLE_USER", "admin@gmail.com", "123456789", "SMU building", "12345678");
		users.save(newUser);
		ResponseEntity<Transaction> result = restTemplate.withBasicAuth("admin", "goodpassword")
										.exchange(uri, HttpMethod.PUT, new HttpEntity<>(newUser), Transaction.class);
			
		assertEquals(404, result.getStatusCode().value());
	}
}
