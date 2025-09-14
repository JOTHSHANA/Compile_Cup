import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import './Navbar.css';

// Reusable component for contact info
const ContactDetails = () => (
  <div className="menu-contact-details">
    <div className="contact-links">
      <a href="mailto:contact@compilecup.com">contact@compilecup.com</a>
      <a href="tel:+911234567890">+91 123 456 7890</a>
    </div>
    <div className="social-media-links">
      <a href="https://www.linkedin.com/company/compilecup" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://github.com/compilecup" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="https://www.instagram.com/compilecup" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
    </div>
  </div>
);

const Navbar = () => {
  const sectionIds = ['home', 'about', 'services', 'projects', 'developers', 'brochure', 'contact'];
  const activeId = useScrollSpy(sectionIds, { rootMargin: '0px 0px -50% 0px' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  }

  const getLinkClass = (id) => {
    if (location.pathname === "/reviews") {
      return id === "reviews" ? "active" : "";
    }
    return activeId === id ? "active" : "";
  };

  const menuLinks = [
    ...sectionIds.map(id => ({ path: `/#${id}`, label: id.charAt(0).toUpperCase() + id.slice(1), id })),
    { path: '/reviews', label: 'Reviews', id: 'reviews' }
  ];

  return (
    <>
      <nav className="navbar-popup">
        <div className="navbar-logo">
          <Link to="/#home" onClick={closeMenu}>COMPILE CUP</Link>
        </div>
      </nav>

      <div className="floating-controls">
        <div className="control-button">
          <ThemeToggleButton />
        </div>
        <button
          className={`menu-icon-button ${mobileMenuOpen ? "open" : ""}`}
          onClick={handleDrawerToggle}
          aria-label="Toggle Menu"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          {menuLinks.map(link => (
            <li key={link.id} onClick={handleDrawerToggle}>
              <Link to={link.path} className={getLinkClass(link.id)}>
                {link.label}
                <span className="link-icon">+</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Contact details added here for mobile */}
        <ContactDetails />
        <div className="mobile-menu-footer">
          <p>Made with 💜 by COMPILE CUP © {new Date().getFullYear()}</p>
        </div>
      </div>
      
      <div className={`desktop-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="desktop-menu-left">
          <ul className="desktop-links">
            {menuLinks.map(link => (
              <li key={link.id} onClick={handleDrawerToggle}>
                <Link to={link.path} className={getLinkClass(link.id)}>
                  {link.label}
                  <span className="link-icon">+</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="desktop-menu-footer">
            <p>Made with 💜 by COMPILE CUP</p>
          </div>
        </div>
        <div className="desktop-menu-right">
          <div className="desktop-promo-content">
            <p className="promo-greeting">👋 Nice to see you!</p>
            <p>We are a passionate team of digital creators based in India, ready to bring your vision to life.</p>
          </div>
          <ContactDetails />
          <div className="desktop-menu-copyright">
            © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;