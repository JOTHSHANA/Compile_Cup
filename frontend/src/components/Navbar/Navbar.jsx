import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import './Navbar.css';

const Navbar = () => {
  const sectionIds = ['home', 'about', 'services', 'projects', 'developers', 'brochure', 'contact'];
  const activeId = useScrollSpy(sectionIds, { rootMargin: '0px 0px -50% 0px' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const getLinkClass = (id) => {
    return `navbar-link ${activeId === id ? 'active' : ''}`;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: 'var(--background-secondary)', height: '100%' }}>
      <List>
        {sectionIds.map((id) => (
          <ListItem key={id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={`/#${id}`}>
              <ListItemText primary={id.charAt(0).toUpperCase() + id.slice(1)} sx={{ color: 'var(--text-primary)' }} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={Link} to="/reviews">
            <ListItemText primary="Reviews" sx={{ color: 'var(--text-primary)' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/#home">Compile cup</Link>
      </div>
      <div className="navbar-right-desktop">
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
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className="menu-icon-button"
        sx={{ color: 'var(--text-primary)' }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default Navbar;
