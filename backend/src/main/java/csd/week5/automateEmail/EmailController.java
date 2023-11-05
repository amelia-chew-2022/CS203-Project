package csd.week5.automateEmail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import csd.week5.ticket.Ticket;
import csd.week5.ticket.TicketService;
import csd.week5.transaction.Transaction;
import csd.week5.transaction.TransactionService;
import csd.week5.user.User;

@RestController
public class EmailController {

    @Autowired
    private EmailService emailService;
    private TicketService ticketService;
    private TransactionService transactionService;

    @PostMapping("/registration")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // Assume User is a POJO with a username, email, etc.

        String username = user.getUsername();
        String recipient = user.getEmail();
        String subject = "Thank You for registration, ${username}!";
        String template = "Dear ${username},\n\n" +
                          "Thank you for registering with our service. We are excited to have you on board.\n\n" +
                          "Should you need any assistance, feel free to contact our support team.\n\n" +
                          "Warm regards,\n" +
                          "The Team";

        emailService.sendTemplatedEmail(recipient, subject, template, username);

        return ResponseEntity.ok("User registered successfully and welcome email sent.");
    }

    @PostMapping("/checkout")
    public ResponseEntity<String> sendPurchaseConfirmation(@RequestBody Long transactionId) {
    // Assume PurchaseDetails is a POJO that contains User and a list of Purchase objects.
    
    List<Ticket> tickets = ticketService.listTicketsByTransaction_Id(transactionId);
    Transaction transaction = transactionService.getTransaction(transactionId);
    User user = transaction.getUser();

    String username = user.getUsername();
    String recipient = user.getEmail();
    StringBuilder purchaseDetails = new StringBuilder();
    purchaseDetails.append("Ticket Seat       Price       \n");
    
    double total = transaction.getTotal_price();
    for(Ticket ticket : tickets){
        String ticketSeat = ticket.getSeat_number();
        String ticketPrice = Integer.toString(ticket.getUnit_price());
        total += ticket.getUnit_price();
        purchaseDetails.append(ticketSeat + "       " + ticketPrice + "\n");
    }

    purchaseDetails.append("               " + String.format("%.2f",total) + "\n");

    emailService.sendPurchaseConfirmationEmail(recipient,transactionId, username, purchaseDetails);

    return ResponseEntity.ok("Purchase confirmation email sent to " + username);
}

}
