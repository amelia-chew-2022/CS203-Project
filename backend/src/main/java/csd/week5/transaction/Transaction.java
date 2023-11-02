package csd.week5.transaction;

import java.util.List;
import java.util.Date;

import javax.persistence.*;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne; // Import the ManyToOne annotation
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import csd.week5.user.*;
import csd.week5.ticket.*;

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

    private double total_price;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    private User user;

    // @Enumerated(EnumType.STRING)
    private boolean completed;

    @Temporal(TemporalType.TIMESTAMP)
    private Date transaction_date;

    @OneToMany(mappedBy = "transaction", cascade = CascadeType.ALL)
    private List<Ticket> ticketList;

    public Transaction(double total_price, User user) {
        this.total_price = total_price;
        this.user = user;
        this.completed = false;
        this.transaction_date = new Date();
    }
}
