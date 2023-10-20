package csd.week5.transaction;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne; // Import the ManyToOne annotation
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import csd.week5.user.*;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Ticket's title should not be null")
    @Size(min = 5, max = 200, message = "Ticket title should be at least 5 characters long")
    private String title;

    private double total_price;

    @ManyToOne // Use @ManyToOne to create a many-to-one relationship with the User entity
    @JoinColumn(name = "user_id") // Specify the foreign key column name
    private User user; // Change the user field to be of type User

    @NotBlank(message = "Transaction date should not be blank")
    private String transaction_date;

    public Transaction(String title, double total_price, User user, String transaction_date) {
        this.title = title;
        this.total_price = total_price;
        this.user = user;
        this.transaction_date = transaction_date;
    }
}
