import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventInfo from './pages/EventInfo';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Registration from './pages/Registration';
import EventInfoError from './pages/EventInfoError';
import EventInfo1 from './pages/EventInfo1';

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/eventinfo/:id" element={<EventInfo />}/>
                    <Route path="/eventinfo1/:id" element={<EventInfo1/>}/>
                    <Route path="/eventinfo" element={<EventInfo/>}/>
                    <Route path = "/error" element = {<Error/>}/>
                    <Route path = "/eventinfo/notfound" element = {<EventInfoError/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/" element={<Navigate to="/home" />} />
                </Routes>
            </Router>
        );
    }
}

export default App;