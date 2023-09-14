import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventInfo from './pages/EventInfo';
import Login from './pages/Login';
import SeatSelect from './pages/SeatSelect';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/eventinfo" element={<EventInfo/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/seatselect" element={<SeatSelect/>}/>
            </Routes>
        </Router>
    );
}

export default App;