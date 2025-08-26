import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import './Navbar.css';

const Navbar = () => {
  const sectionIds = ['home', 'about', 'services', 'projects', 'developers', 'brochure', 'contact'];
  const activeId = useScrollSpy(sectionIds, { rootMargin: '0px 0px -50% 0px' });

  const getLinkClass = (id) => {
    return `navbar-link ${activeId === id ? 'active' : ''}`;
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/#home">Compile cup</Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/#home" className={getLinkClass('home')}>Home</Link></li>
          <li><Link to="/#about" className={getLinkClass('about')}>About</Link></li>
          <li><Link to="/#services" className={getLinkClass('services')}>Services</Link></li>
          <li><Link to="/#projects" className={getLinkClass('projects')}>Projects</Link></li>
          <li><Link to="/#developers" className={getLinkClass('developers')}>Developers</Link></li>
          <li><Link to="/#brochure" className={getLinkClass('brochure')}>Brochure</Link></li>
          <li><Link to="/#contact" className={getLinkClass('contact')}>Contact</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
        </ul>
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;
