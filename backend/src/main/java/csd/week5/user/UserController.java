package csd.week5.user;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
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
    


}