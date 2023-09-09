import { createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import EventInfo from "../pages/EventInfo";

export default createBrowserRouter([
    {
        path: "/",
        element: (
            <Route>
                <Home/>
            </Route>
        ),
    },

    {
        path: "eventinfo",
        element: (
            <Route>
                <EventInfo/>
            </Route>
        ),
    },
]);