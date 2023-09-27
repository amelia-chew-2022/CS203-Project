import axios from 'axios';

const API_URL = "http://localhost:8080"; 

class UserService {

    authHeader = () => {
        let user = JSON.parse(localStorage.getItem('user'));
        return user ? user.authHeader : "";
    }

    // authenticateUser(email, password) {
    //     return axios.get(API_URL + '/users', )
    // }

    getUsers() {
        return axios.get(API_URL + '/users', {headers: {authorization: 'Basic ' + this.authHeader()}});
    }

    addUser(newUser) {
        return axios.post(API_URL + '/users', newUser, {headers: {authorization: 'Basic ' + this.authHeader()}});
    }

}

export default new UserService()