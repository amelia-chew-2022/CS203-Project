package csd.week5.user;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import csd.week5.automateEmail.EmailService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class UserController {
    private UserService userService;
    private EmailService emailService;

    public UserController(UserService userService, EmailService emailService) {
        this.userService = userService;
        this.emailService = emailService;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.listUsers();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("/users/{id}")
    public User findUserById(@PathVariable Long id) {
        return userService.getUser(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }

     
    @PostMapping("/register") 
    public ResponseEntity<?> registerUser(@Valid @RequestBody User registrationDto) { 
 
            if (userService.emailExists(registrationDto.getEmail())) { 
                return new ResponseEntity<>("Email is already in use!", HttpStatus.BAD_REQUEST); 
            } 
            User newUser = userService.registerNewUserAccount(registrationDto); 
            String email = newUser.getEmail();
            String username = newUser.getUsername();
            emailService.sendRegisterEmail(email, username);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED); 
    } 
     
    @PostMapping("/login") 
    public ResponseEntity<?> loginUser(@Valid @RequestBody User loginDto) { 
        User user = userService.authenticate(loginDto.getEmail(), loginDto.getPassword()); 
        if (user != null) { 
            return new ResponseEntity<>(user, HttpStatus.OK); 
        } else { 
            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED); 
        } 
    } 
    
}