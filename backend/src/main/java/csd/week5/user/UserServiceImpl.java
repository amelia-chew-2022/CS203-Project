package csd.week5.user;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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

    // @Override
    // public User addUser(User user) {
    //     return userRepository.save(user);
    // }

    @Override
    public User updateUsers(Long id, @Valid @RequestBody User newUserInfo) {
        return userRepository.findById(id).map(existingUser -> {
            // Update the user fields directly with the values from newUserInfo
            existingUser.setUsername(newUserInfo.getUsername());
            existingUser.setPassword(newUserInfo.getPassword());
            existingUser.setEmail(newUserInfo.getEmail());
            existingUser.setAddress(newUserInfo.getAddress());
            existingUser.setPhone_num(newUserInfo.getPhone_num());
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

    @Override
    public User getUsers(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUsers'");
    }

    @Override
    public User addUsers(User user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'addUsers'");
    }
}