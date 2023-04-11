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
                <li><NavLink to="/">Rockets</NavLink></li>
                <li><NavLink to="/missions">Missions</NavLink></li>
                <li><div /></li>
                <li><NavLink to="/profile">My Profile</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation