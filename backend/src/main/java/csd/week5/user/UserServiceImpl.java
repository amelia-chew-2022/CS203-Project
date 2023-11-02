package csd.week5.user;

import java.util.List;
import org.springframework.stereotype.Service;

import csd.week5.user.*;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> listUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUser(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUsers(Long id, User newUserInfo) {
        return userRepository.findById(id).map(existingUser -> {
            // Update the user fields only if newUserInfo fields are not null
            if (newUserInfo.getUsername() != null) {
                existingUser.setUsername(newUserInfo.getUsername());
            }
            if (newUserInfo.getPassword() != null) {
                existingUser.setPassword(newUserInfo.getPassword());
            }
            if (newUserInfo.getEmail() != null) {
                existingUser.setEmail(newUserInfo.getEmail());
            }
            if (newUserInfo.getAddress() != null) {
                existingUser.setAddress(newUserInfo.getAddress());
            }
            if (newUserInfo.getPhone_num() != null) {
                existingUser.setPhone_num(newUserInfo.getPhone_num());
            }
            return userRepository.save(existingUser);
        }).orElse(null);
    }

    /**
     * Remove a user with the given id
     * Spring Data JPA does not return a value for delete operation
     */
    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}