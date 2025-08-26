import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Startup</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/#home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#developers">Developers</a></li>
        <li><a href="/#brochure">Brochure</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><Link to="/reviews">Reviews</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
