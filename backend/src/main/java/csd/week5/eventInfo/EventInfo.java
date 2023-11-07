package csd.week5.eventInfo;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Lob;
import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.ElementCollection;
import javax.persistence.CollectionTable;
import javax.persistence.OrderColumn;


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
public class EventInfo {
    
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

    @NotNull(message = "Event name should not be null")
    private String eventName;

    @NotNull(message = "Event date should not be null")
    private String date;

    // @NotNull(message = "Ticket's location should not be null")
    private String location;

    @Lob
    private ArrayList<String> eventDetail;

    private String ticketPricing;

    private String imageURL;


    public EventInfo(String eventName, ArrayList<String> eventDetail, String date, String location,String ticketPricing, String imageURL){
        this.eventName = eventName;
        this.eventDetail = eventDetail;
        this.date = date;
        this.location = location;
        this.ticketPricing = ticketPricing;
        this.imageURL = imageURL;
    }

    public EventInfo(String eventName, String date, String imageURL){
        this.eventName = eventName;
        this.date = date;
        this.imageURL = imageURL;
    }

    
}