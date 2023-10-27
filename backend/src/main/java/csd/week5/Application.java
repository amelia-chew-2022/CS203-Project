package csd.week5;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import csd.week5.eventInfo.EventInfo;
import csd.week5.eventInfo.EventInfoRepository;
import csd.week5.ticket.*;
import csd.week5.user.User;
import csd.week5.user.UserRepository;
import csd.week5.PNGFileReader;
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
                transaction.save(new Transaction(100.0, null, "here"));
                // System.out.println("[Add transaction]: " + transaction.save(new
                // Transaction("100","helllo","here")));

                EventInfoRepository eventInfoRepository = ctx.getBean(EventInfoRepository.class);

                String name = "vibes";

                String title = "<Typography variant=\"h4\" gutterBottom sx={{color: \"#fff\"}}>\r\n" + //
                                "                    23 Sep 2023 (Sat.) / University Cultural Centre Ho Bee Auditorium\r\n"
                                + //
                                "                </Typography>\r\n" + //
                                "\r\n" + //
                                "                <Typography variant=\"h3\" sx={{fontWeight: \"bold\", color: \"#fff\"}}>\r\n"
                                + //
                                "                    VIBES\r\n" + //
                                "                </Typography>";
                String eventDetail = "<Typography variant=\"body1\" gutterBottom paragraph>\r\n" + //
                                "            Art Republic proudly presents VIBES! An extraordinary festival, destined to ignite passions and capture hearts on September 23, \r\n"
                                + //
                                "            2023. Get ready for an epic celebration of music, dance, and fun at VIBES! Enchanting performances await you, featuring the \r\n"
                                + //
                                "            sensational Singaporean artist, Alfred Sun, and the mesmerizing dance choreographer from China, Orangie, whose captivating moves \r\n"
                                + //
                                "            and boundless talent will leave you in awe. And to crank up the excitement even more, we've got the esteemed radio DJ Hazelle \r\n"
                                + //
                                "            Teo from YES933FM, whose magnetic energy will light up the party as the ultimate MC!\r\n"
                                + //
                                "            </Typography>\r\n" + //
                                "\r\n" + //
                                "            <Typography variant=\"body1\" gutterBottom paragraph>\r\n" + //
                                "            This grand spectacle involves over 200 tireless talents who have poured their hearts into crafting the show of a lifetime. \r\n"
                                + //
                                "            These extraordinary individuals worked hand in hand with creative and gifted dance and music instructors, taking you on a \r\n"
                                + //
                                "            captivating journey through their artistry. You'll be left breathless with every move, note, and beat as they showcase their \r\n"
                                + //
                                "            passion and skill on stage.\r\n" + //
                                "            </Typography>\r\n" + //
                                "\r\n" + //
                                "            <Typography variant=\"body1\" gutterBottom paragraph>\r\n" + //
                                "            At Art Republic, we dare to dream without bounds. Looking ahead, VIBES will evolve into a massive celebration, embracing legendary \r\n"
                                + //
                                "            dancers, acclaimed rappers, and celebrated entertainers from across the globe. The promise of an even more dynamic and mesmerizing \r\n"
                                + //
                                "            extravaganza will leave you craving for more. The stage is set, and the anticipation is mounting! Don't miss this opportunity to \r\n"
                                + //
                                "            experience the magic firsthand. Secure your tickets for VIBES now! We eagerly await your presence. See you there!\r\n"
                                + //
                                "            </Typography>";

                String date = "23 Sep 2023 (Sat.)";
                String ticketPricing = "<Typography variant=\"body1\" gutterBottom>\r\n" + //
                                "            <b>START DATE</b><br/>\r\n" + //
                                "            10 AUGUST 2023<br/>\r\n" + //
                                "            10:00AM onwards via online, hotline and SingPost outlets\r\n" + //
                                "            </Typography>\r\n" + //
                                "\r\n" + //
                                "            <Divider/>\r\n" + //
                                "\r\n" + //
                                "            <Typography variant=\"body1\" gutterBottom>\r\n" + //
                                "            <b>STANDARD</b>\r\n" + //
                                "            <ul style={{ margin: '0' }}>\r\n" + //
                                "            <li>CAT 1: $55</li>\r\n" + //
                                "            <li>CAT 2: $48</li>\r\n" + //
                                "            <li>CAT 3: $32</li>\r\n" + //
                                "            </ul>\r\n" + //
                                "            </Typography>\r\n" + //
                                "\r\n" + //
                                "            <Divider/>\r\n" + //
                                "\r\n" + //
                                "            <Typography variant=\"body1\" gutterBottom>\r\n" + //
                                "            <b>NOTE:</b>\r\n" + //
                                "            <ul style={{ margin: '0' }}>\r\n" + //
                                "            <li>Limited to <u><b>20</b></u> tickets per transaction.</li>\r\n" + //
                                "            <li>Ticket Pricing excludes Booking Fee. Booking Fee is as follows:</li>\r\n"
                                + //
                                "            <ul >\r\n" + //
                                "                <li>$4 booking fee per ticket for tickets $30 and above</li>\r\n" + //
                                "                <li>$2 booking fee per ticket for tickets between $20 and $29.99</li>\r\n"
                                + //
                                "                <li>$1 booking fee per ticket for tickets priced below $20.00</li>\r\n"
                                + //
                                "            </ul>\r\n" + //
                                "            </ul>\r\n" + //
                                "            </Typography>";

                String EnRPolicy = "<Typography variant=\"body1\" gutterBottom>\r\n" + //
                                "            <ol type=\"1\">\r\n" + //
                                "                <li>The Organiser/Venue Owner reserves the right without refund or compensation to refuse admission/evict any person(s) whose \r\n"
                                + //
                                "                conduct is disorderly or inappropriate or who poses a threat to security, or to the enjoyment of the Event by others.</li>\r\n"
                                + //
                                "                <li>Ticket holders assume all risk of injury and all responsibility for property loss, destruction or theft and release the \r\n"
                                + //
                                "                promoters, performers, sponsors, ticket outlets, venues, and their employees from any liability thereafter.</li>\r\n"
                                + //
                                "                <li>The resale of ticket(s) at the same or any price in excess of the initial purchase price is prohibited.</li>\r\n"
                                + //
                                "                <li>There is no refund, exchange, upgrade, or cancellation once ticket(s) are sold.</li>\r\n"
                                + //
                                "                <li>We would like to caution members of the public against purchasing tickets from unauthorized sellers or 3rd party websites. \r\n"
                                + //
                                "                By purchasing tickets through these non-authorized points of sale, buyers take on the risk that the validity of the tickets \r\n"
                                + //
                                "                cannot be guaranteed, with no refunds possible.⁠</li>\r\n" + //
                                "            </ol>\r\n" + //
                                "            </Typography>";
                String aPolicy = "<ol type=\"1\">\r\n" + //
                                "                <li>The seats on the third floor are relatively high. Please choose carefully if you are under 12 years old, over 60 years old, \r\n"
                                + //
                                "                or those with high blood pressure, heart disease, fear of heights, or vertigo. Ticket holders assume all risk of injury and all \r\n"
                                + //
                                "                responsibility for property loss, destruction or theft and release the promoters, performers, sponsors, ticket outlets, venues, \r\n"
                                + //
                                "                and their employees from any liability thereafter.</li>\r\n" + //
                                "                <li>Admission to show/venue by full ticket only. Printed/electronic tickets must be produced for admission.</li>\r\n"
                                + //
                                "                <li>Admission will not be allowed for infants in arms and children aged 3 years old and below.</li>\r\n"
                                + //
                                "                <li>Children above 3 years old and under 6 years old may be admitted free of charge provided that they do not occupy a seat. \r\n"
                                + //
                                "                They must be seated on the lap of a parent / guardian.</li>\r\n" + //
                                "                <li>Individuals aged 6 years old and above will be required to purchase a ticket for admission.</li>\r\n"
                                + //
                                "                <li>No flash photography and videography allowed.</li>\r\n" + //
                                "                <li>No outside food and beverage are allowed into the venue.</li>\r\n"
                                + //
                                "            </ol>";
                String ticketInfo = " <b>► ONLINE & MOBILE:</b><br/>\r\n" + //
                                "            24 x 7 x 365 days of the year! Visit us on our website at ticketmaster.sg to purchase tickets.<br/>\r\n"
                                + //
                                "\r\n" + //
                                "            <b>► HOTLINE:</b>\r\n" + //
                                "            +65 3158 8588\r\n" + //
                                "\r\n" + //
                                "            Operating Hours:<br/>\r\n" + //
                                "            Monday to Saturday (10am - 6pm)<br/>\r\n" + //
                                "            Sunday and Public Holidays (Closed)<br/>\r\n" + //
                                "\r\n" + //
                                "            <b>► OUTLETS:</b><br/>\r\n" + //
                                "\r\n" + //
                                "            ♦ SINGPOST<br/>\r\n" + //
                                "            The sale of tickets will be available at All SingPost outlets.<br/>\r\n" + //
                                "            Click here to check for available branches and operating hours.<br/>";

                byte[] image = null;                
                try {
                        String filePath = "../../../assets/vibes.png";
                        image = PNGFileReader.readPNGFileAsBytes(filePath);
                        // Now you have the image data in the 'imageData' byte array
                } catch (IOException e) {

                }

                eventInfoRepository.save(new EventInfo(name ,title, eventDetail, date, ticketPricing, EnRPolicy, aPolicy,
                                ticketInfo, image));
        }

}
