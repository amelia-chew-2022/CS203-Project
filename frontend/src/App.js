import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Switch, { Routes } from 'react-router';
import Home from './pages/Home';
// import EventInfo from './pages/EventInfo';

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" component={Home} />
                {/* <Route path="/eventinfo" component={EventInfo} /> */}
                {/* <Route path="/login" component={Login}/> */}
            </Routes>
        </Router>
    );
}

export default App;
