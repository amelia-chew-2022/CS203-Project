package csd.week5;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import csd.week5.eventInfo.EventInfo;
import csd.week5.eventInfo.EventInfoRepository;
import csd.week5.ticket.*;
import csd.week5.user.User;
import csd.week5.user.UserRepository;
import csd.week5.transaction.*;

@SpringBootApplication
public class Application {

        public static void main(String[] args) {

                ApplicationContext ctx = SpringApplication.run(Application.class, args);

                // JPA book repository init
                TicketRepository tickets = ctx.getBean(TicketRepository.class);
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100", false)).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100", false)).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200", false)).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100", false)).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200", false)).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200", false)).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Twice", "123", "1ac23V", "100")).getTitle());
                System.out.println("[Add ticket]: "
                                + tickets.save(new Ticket("Bornpink", "456", "2zc15C", "200")).getTitle());

                // JPA user repository init
                UserRepository users = ctx.getBean(UserRepository.class);
                BCryptPasswordEncoder encoder = ctx.getBean(BCryptPasswordEncoder.class);
                System.out.println("[Add user]: " + users.save(
                                new User("Shawn", encoder.encode("hello123"), "ROLE_ADMIN", "shawn@gmail.com",
                                                "15465658", "SMU building", "12345678"))
                                .getUsername());
                System.out.println("[Add user]: " + users.save(
                                new User("Nicholas", encoder.encode("bye123"), "ROLE_ADMIN", "nic@gmail.com",
                                                "23698745", "SMU building", "87654321"))
                                .getUsername());

                // JPA transaction repository init
                TransactionRepository transaction = ctx.getBean(TransactionRepository.class);
                transaction.save(new Transaction(100.0, null));
                // System.out.println("[Add transaction]: " + transaction.save(new
                // Transaction("100","helllo","here")));

                EventInfoRepository eventInfoRepository = ctx.getBean(EventInfoRepository.class);

                String eventName = "VIBES";
            
                String date = "23 Sep 2023 (Sat.)";
            
                String location = "University Cultural Centre Ho Bee Auditorium";
                
                String para1 = "Art Republic proudly presents VIBES! An extraordinary festival, destined to ignite passions and capture hearts on September 23, 2023. Get ready for an epic celebration of music, dance, and fun at VIBES! Enchanting performances await you, featuring the sensational Singaporean artist, Alfred Sun, and the mesmerizing dance choreographer from China, Orangie, whose captivating moves and boundless talent will leave you in awe. And to crank up the excitement even more, we've got the esteemed radio DJ Hazelle Teo from YES933FM, whose magnetic energy will light up the party as the ultimate MC!";
                String para2 = "This grand spectacle involves over 200 tireless talents who have poured their hearts into crafting the show of a lifetime. These extraordinary individuals worked hand in hand with creative and gifted dance and music instructors, taking you on a captivating journey through their artistry. You'll be left breathless with every move, note, and beat as they showcase their passion and skill on stage.";
                String para3 = "At Art Republic, we dare to dream without bounds. Looking ahead, VIBES will evolve into a massive celebration, embracing legendary dancers, acclaimed rappers, and celebrated entertainers from across the globe. The promise of an even more dynamic and mesmerizing extravaganza will leave you craving for more. The stage is set, and the anticipation is mounting! Don't miss this opportunity to experience the magic firsthand. Secure your tickets for VIBES now! We eagerly await your presence. See you there!";
         
                ArrayList<String> eventDetail = new ArrayList<>();
                eventDetail.add(para1);
                eventDetail.add(para2);
                eventDetail.add(para3);

                String ticketPricing = "Ticket Price: $50";
            
                String imageURL = "../../assets/coldplay.png";

                eventInfoRepository.save(new EventInfo(eventName,eventDetail,date,location,ticketPricing,imageURL));
                eventInfoRepository.save(new EventInfo("Coldplay: Music Of The Spheres World Tour - delivered by DHL", "2 Sep 2023 (Sat) ~ 3 Sep 2023 (Sun)", "../../assets/coldplay.png"));
                eventInfoRepository.save(new EventInfo("TWICE 5TH WORLD TOUR 'READY TO BE' IN SINGAPORE", "2 Sep 2023 (Sat) ~ 3 Sep 2023 (Sun)", "../../assets/twice.png"));
                eventInfoRepository.save(new EventInfo("ATEEZ WORLD TOUR [THE FELLOWSHIP: BREAK THE WALL]", "9 Sep 2023 (Sat)", "../../assets/ateez.png"));
                eventInfoRepository.save(new EventInfo("Lauv: The Between Albums Tour in Singapore", "5 Sep 2023 (Tue)", "../../assets/lauv.png"));
                eventInfoRepository.save(new EventInfo("P1HARMONY LIVE TOUR [P1USTAGE H:P1ONEER] IN SINGAPORE", "17 Sep 2023 (Sun)", "../../assets/p1harmony.png"));
                eventInfoRepository.save(new EventInfo("HallyuPopFest Singapore 2023", "12 Nov 2023 (Sun)", "../../assets/hallyupopfest.png"));
                eventInfoRepository.save(new EventInfo("Rex Orange County Live in Asia 2023 Singapore", "17 Oct 2023 (Tue)", "../../assets/roc.png"));
                eventInfoRepository.save(new EventInfo("Taylor Swift | The Eras Tour", "02 Mar 2024 (Sat) ~ 09 Mar 2024 (Sat)", "../../assets/taylorswift.png"));

                
        }
}
