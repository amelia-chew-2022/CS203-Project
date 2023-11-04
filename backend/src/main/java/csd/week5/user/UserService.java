package csd.week5.user;

import java.util.List;

public interface UserService {
    List<User> listUsers();

    User getUser(Long id);

    User addUser(User user);

    User updateUsers(Long id, User user);


    /**
     * Change method's signature: do not return a value for delete operation
     * 
     * @param id
     */
    void deleteUser(Long id);

}