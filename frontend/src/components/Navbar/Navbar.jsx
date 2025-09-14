import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import GsapAnimation from "../Animation/Gsap"; // Import the animation component
import "./Navbar.css";

const ContactDetails = () => (
  <div className="menu-contact-details">
    <div className="contact-links">
      <a href="mailto:contact@compilecup.com">compilecup@gmail.com</a>
      <a href="tel:+911234567890">+91 123 456 7890</a>
    </div>
    <div className="social-media-links">
      <a
        href="https://www.linkedin.com/company/compilecup"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/compilecup"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/compilecup"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  </div>
);

const Navbar = () => {
  const sectionIds = [
    "home", "about", "services", "projects", "developers", "brochure", "contact",
  ];
  const activeId = useScrollSpy(sectionIds, { rootMargin: "0px 0px -50% 0px" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const mobileMenuRef = useRef(null);
  const desktopMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuButtonRef.current && menuButtonRef.current.contains(event.target)) {
        return;
      }

      if (
        mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) &&
        desktopMenuRef.current && !desktopMenuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const getLinkClass = (id) => {
    if (location.pathname === "/reviews") {
      return id === "reviews" ? "active" : "";
    }
    return activeId === id ? "active" : "";
  };

  const menuLinks = [
    ...sectionIds.map((id) => ({
      path: `/#${id}`,
      label: id.charAt(0).toUpperCase() + id.slice(1),
      id,
    })),
    { path: "/reviews", label: "Reviews", id: "reviews" },
  ];

  return (
    <>
      <nav className="navbar-popup">
        <GsapAnimation useScrollTrigger={false} type="fade-down" delay={0.2}>
          <div className="navbar-logo">
            <Link to="/#home" onClick={closeMenu}>
              COMPILE CUP
            </Link>
          </div>
        </GsapAnimation>
      </nav>

      <div className="floating-controls">
          <div className="control-button">
            <ThemeToggleButton />
          </div>
          <button
            ref={menuButtonRef}
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

      <div ref={mobileMenuRef} className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        {mobileMenuOpen && (
          <GsapAnimation useScrollTrigger={false} type="fade-up" stagger={0.05} delay={0.5}>
            <ul className="mobile-links">
              {menuLinks.map((link) => (
                <li key={link.id} onClick={handleDrawerToggle}>
                  <Link to={link.path} className={getLinkClass(link.id)}>
                    {link.label}
                    <span className="link-icon">+</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ContactDetails />
            <div className="mobile-menu-footer">
              <p>Made with 💜 by COMPILE CUP © {new Date().getFullYear()}</p>
            </div>
          </GsapAnimation>
        )}
      </div>

      <div ref={desktopMenuRef} className={`desktop-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="desktop-menu-left">
          {mobileMenuOpen && (
            <GsapAnimation useScrollTrigger={false} type="fade-up" stagger={0.05} delay={0.5}>
              <ul className="desktop-links">
                {menuLinks.map((link) => (
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
            </GsapAnimation>
          )}
        </div>
        <div className="desktop-menu-right">
          {mobileMenuOpen && (
            <GsapAnimation useScrollTrigger={false} type="fade-up" stagger={0.1} delay={0.7}>
              <ContactDetails />
              <div className="desktop-promo-content">
                <p className="promo-greeting">👋 Nice to see you!</p>
                <p>
                  We are a passionate team of digital creators based in India, ready to bring your vision to life.
                </p>
              </div>
              <div className="desktop-menu-copyright">
                © {new Date().getFullYear()}
              </div>
            </GsapAnimation>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;