import axios from 'axios';

const API_URL = "http://localhost:8080"; 

class TicketService {
    authHeader = () => {
        let user = JSON.parse(localStorage.getItem('user'));
        return user ? user.authHeader : "";
    }
    
    getTickets() {
        return axios.get(API_URL + '/tickets', {headers: {authorization: 'Basic ' + this.authHeader()}});
    }
}

export default new TicketService()