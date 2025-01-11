import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
      <h1>
        <span className="cafe">CAFE</span> 
        <span className="delight">DELIGHT</span>
      </h1>
        <input type="checkbox" id="menu-toggle" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login" className="login">Login</Link></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
