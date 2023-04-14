import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import logo from '../logo.png';
import './nevigation.css';

const Navigation = () => (
  <>
    <nav>
      <div className="logo">
        <img src={logo} alt="space-logo" />
        <h1>Space Travelers&#39; Hub</h1>
      </div>
      <ul>
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/missions">Mission</NavLink>
        <hr />
        <NavLink to="/profile">My Profile</NavLink>
      </ul>
    </nav>
    <main>
      <Outlet />
    </main>
  </>
);

export default Navigation;
