import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventInfo from './pages/EventInfo';
import Categories from "./pages/Categories";
import Venues from "./pages/Venues";
import Login from './pages/Login';
import Checkout from './pages/Checkout';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/eventinfo" element={<EventInfo/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/venues" element={<Venues/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </Router>
    );
}

export default App;