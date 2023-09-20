package csd.week5.ticket;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;


@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Ticket {
    private @Id @GeneratedValue (strategy = GenerationType.IDENTITY) Long id;
    

    @NotNull(message = "Ticket's title should not be null")
    @Size(min = 5, max = 200, message = "Ticket title should be at least 5 characters long")
    private String title;
    
    // @OneToMany(mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
    // @JsonIgnore
    // private List<Review> reviews;
    
    public Ticket(String title){
        this.title = title;
    }
    
}