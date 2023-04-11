import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../logo.png"

const Navigation = () => {
    return(
        <nav className="navBar">
            <ul className="navLogo">
                <li className="log"><img src={logo} className="logo" alt="logo"></img></li>
                <li><h1 style={{fontSize: "30px"}}>Space Travelers' Hub</h1></li>
            </ul>
            <ul className="links">
                <li><NavLink to="/" style={{color: "white", fontSize: "20px"}} activeClassName="active">Rockets</NavLink></li>
                <li><NavLink to="/missions" style={{color: "white", fontSize: "20px"}} activeClassName="active">Missions</NavLink></li>
                <li><div className="bar" /></li>
                <li><NavLink to="/profile" style={{color: "white", fontSize: "20px"}} activeClassName="active">My Profile</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation