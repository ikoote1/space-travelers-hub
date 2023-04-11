import { NavLink } from "react-router-dom";
import React from "react";

const Navigation = () => {
    return(
        <nav>
            <ul>
                <li><image></image></li>
                <li><h1>Space Travelers' Hub</h1></li>
            </ul>
            <ul>
                <li><NavLink to="/" activeClassName="active" >Rockets</NavLink></li>
                <li><NavLink to="/missions" activeClassName="active" >Missions</NavLink></li>
                <li><div /></li>
                <li><NavLink to="/profile" activeClassName="active">My Profile</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation