package csd.week5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import csd.week5.ticket.*;
import csd.week5.user.User;
import csd.week5.user.UserRepository;

@SpringBootApplication
public class Week5Application {

	public static void main(String[] args) {
		
		ApplicationContext ctx = SpringApplication.run(Week5Application.class, args);

        // JPA book repository init
        TicketRepository books = ctx.getBean(TicketRepository.class);
        System.out.println("[Add ticket]: " + books.save(new Ticket("Twice")).getTitle());
        System.out.println("[Add ticket]: " + books.save(new Ticket("Bornpink")).getTitle());

        // JPA user repository init
        UserRepository users = ctx.getBean(UserRepository.class);
        BCryptPasswordEncoder encoder = ctx.getBean(BCryptPasswordEncoder.class);
        System.out.println("[Add user]: " + users.save(
            new User("Shawn", encoder.encode("hello123"), "ROLE_ADMIN", "shawn@gmail.com", "15465658", "SMU building", "12345678")).getUsername());
        System.out.println("[Add user]: " + users.save(
            new User("Nicholas", encoder.encode("bye123"), "ROLE_ADMIN", "nic@gmail.com", "23698745", "SMU building", "87654321")).getUsername());
    }
    
}