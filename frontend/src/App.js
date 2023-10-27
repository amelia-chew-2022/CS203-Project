import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventInfo from './pages/EventInfo';
import Categories from "./pages/Categories";
import Venues from "./pages/Venues";
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Registration from './pages/Registration';
import EventInfoError from './pages/EventInfoError';

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/eventinfo/:id" element={<EventInfo/>}/>
                    <Route path="/eventinfo" element={<EventInfo/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/venues" element={<Venues/>}/>
                    <Route path = "/error" element = {<Error/>}/>
                    <Route path = "/eventinfo/notfound" element = {<EventInfoError/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    
                </Routes>
            </Router>
        );
    }
}

export default App;