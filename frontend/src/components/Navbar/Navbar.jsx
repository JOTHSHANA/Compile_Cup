import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import './Navbar.css';

const Navbar = () => {
  const sectionIds = ['home', 'about', 'services', 'projects', 'developers', 'brochure', 'contact'];
  const activeId = useScrollSpy(sectionIds, { rootMargin: '0px 0px -50% 0px' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const getLinkClass = (id) => {
    if (location.pathname === "/reviews") {
      return `navbar-link ${id === "reviews" ? "active" : ""}`;
    }
    return `navbar-link ${activeId === id ? "active" : ""}`;
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/#home">COMPILE CUP</Link>
        
      </div>

      {/* Desktop Navbar */}
      <div className="navbar-right-desktop">
        <ul className="navbar-links">
          <li><Link to="/#home" className={getLinkClass('home')}>Home</Link></li>
          <li><Link to="/#about" className={getLinkClass('about')}>About</Link></li>
          <li><Link to="/#services" className={getLinkClass('services')}>Services</Link></li>
          <li><Link to="/#projects" className={getLinkClass('projects')}>Projects</Link></li>
          <li><Link to="/#developers" className={getLinkClass('developers')}>Developers</Link></li>
          <li><Link to="/#brochure" className={getLinkClass('brochure')}>Brochure</Link></li>
          <li><Link to="/#contact" className={getLinkClass('contact')}>Contact</Link></li>
          <li><Link to="/reviews" className={getLinkClass("reviews")}>Reviews</Link></li>
        </ul>
        <ThemeToggleButton />
      </div>
 <div className="navbar-mobile-theme">
    <ThemeToggleButton />
  </div>
      <div
        className={`menu-icon-button ${mobileMenuOpen ? "open" : ""}`}
        onClick={handleDrawerToggle}
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          {sectionIds.map((id, index) => (
            <li
              key={id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={handleDrawerToggle}
            >
              <Link to={`/#${id}`} className={getLinkClass(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
          <li
            data-aos="fade-up"
            data-aos-delay={sectionIds.length * 100}
            onClick={handleDrawerToggle}
          >
            <Link to="/reviews" className={getLinkClass("reviews")}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
