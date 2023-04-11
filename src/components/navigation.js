import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../logo.png"

const Navigation = () => {
    return(
        <nav className="navBar">
            <ul className="navLogo">
                <li><img src={logo} className="logo" alt="logo"></img></li>
                <li><h1>Space Travelers' Hub</h1></li>
            </ul>
            <ul className="links">
                <li><NavLink to="/" activeClassName="active" >Rockets</NavLink></li>
                <li><NavLink to="/missions" activeClassName="active" >Missions</NavLink></li>
                <li><div /></li>
                <li><NavLink to="/profile" activeClassName="active">My Profile</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation