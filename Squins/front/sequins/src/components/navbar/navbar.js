import React from 'react';
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import "./navbar.css";
import Home from "../../pages/home/home";
export default function Navbar(){

    return(
    <>
    <Router>
        <ul className="navbar_ul">
            <li class ="flex-item">logo</li>
            <li><Link to="/home">Home</Link></li>
            <li>Gallery</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <Switch>
            <Route path="/home" ><Home/></Route>
        </Switch>
        </Router>
        </>
    );
}