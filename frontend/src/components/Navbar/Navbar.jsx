import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import GsapAnimation from "../Animation/Gsap"; 
import "./Navbar.css";

const ContactDetails = () => (
  <div className="menu-contact-details">
    <div className="contact-links">
      <a href="mailto:contact@compilecup.com">compilecup@gmail.com</a>
      <a href="tel:+919789762908">+91 9789762908</a>
    </div>
    <div className="social-media-links">
      <a
        href="https://www.linkedin.com/in/compile-cup/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      {/* <a
        href="https://github.com/compilecup"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a> */}
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    preserveAspectRatio="xMidYMid meet"
    fill="black"
    width="100"
    height="100"
  >
    <g transform="translate(0,230) scale(0.1,-0.1)" stroke="none">
      <path d="M1035 2068 c-101 -72 -131 -130 -122 -233 8 -82 25 -114 103 -197 84
-89 96 -115 96 -201 0 -55 -5 -76 -21 -98 -28 -37 -9 -38 46 -3 76 50 114 141
99 236 -9 57 -25 83 -104 170 -39 42 -76 87 -83 100 -20 38 -15 150 10 197 31
60 27 65 -24 29z m-26 -149 c0 -82 17 -114 110 -215 91 -99 112 -185 66 -274
-21 -41 -35 -30 -35 27 0 64 -28 117 -110 206 -69 77 -89 116 -92 189 -3 56
28 138 52 138 5 0 9 -32 9 -71z"/>
      <path d="M747 1782 c-25 -26 -51 -60 -56 -75 -26 -67 -6 -140 54 -197 65 -62
78 -93 72 -166 -2 -35 -1 -64 3 -64 18 0 78 84 90 125 18 64 0 121 -61 190
-58 67 -72 109 -58 177 6 27 9 51 7 53 -2 3 -25 -17 -51 -43z m17 -110 c9 -27
37 -72 61 -101 48 -56 67 -107 58 -152 -7 -39 -16 -36 -37 10 -9 22 -36 62
-60 88 -55 61 -66 83 -66 128 0 32 14 75 25 75 2 0 11 -22 19 -48z"/>
      <path d="M379 1159 c-75 -26 -133 -78 -172 -153 l-32 -61 0 -275 c1 -271 1
-276 26 -337 31 -74 60 -111 119 -151 124 -84 351 -92 505 -17 39 18 81 45 94
59 21 22 23 29 12 48 -6 13 -18 43 -25 68 l-13 45 -57 3 c-51 3 -61 0 -91 -27
-42 -36 -91 -51 -170 -51 -136 1 -189 36 -205 135 -11 68 -13 311 -3 404 8 86
43 122 132 141 127 26 250 -15 288 -96 15 -30 21 -34 55 -34 l38 0 0 44 c0 50
15 100 42 139 26 37 19 51 -44 83 -82 42 -149 53 -303 53 -112 0 -151 -4 -196
-20z m405 -33 c57 -19 103 -42 111 -55 3 -5 -4 -28 -16 -50 -11 -22 -23 -59
-26 -81 -3 -22 -8 -40 -11 -40 -3 0 -27 22 -53 49 -42 43 -56 51 -118 65 -86
20 -121 20 -190 1 -72 -19 -119 -65 -135 -131 -6 -28 -11 -133 -11 -249 0
-215 7 -256 51 -300 48 -48 80 -57 186 -56 106 2 133 8 190 47 54 38 97 31
121 -19 19 -41 15 -77 -9 -77 -8 0 -14 -3 -14 -8 0 -11 -79 -49 -130 -63 -25
-6 -90 -12 -145 -13 -133 -1 -204 25 -285 104 -86 84 -93 119 -88 440 3 195 8
262 19 286 37 81 102 135 189 157 70 18 303 13 364 -7z"/>
      <path d="M1260 1166 c-116 -33 -184 -95 -219 -201 -19 -59 -21 -87 -21 -306 0
-216 2 -246 21 -301 50 -149 148 -220 327 -238 288 -30 485 97 486 314 l1 71
-85 0 -84 0 -8 -43 c-8 -51 -39 -104 -71 -125 -36 -23 -135 -34 -223 -25 -83
9 -112 23 -148 72 -20 26 -21 41 -21 270 l0 243 28 36 c19 25 41 40 70 48 57
16 213 17 259 1 49 -17 94 -70 103 -121 l7 -41 89 0 89 0 0 43 c0 61 -27 144
-63 194 -66 93 -156 123 -358 122 -74 0 -154 -6 -179 -13z m383 -41 c78 -24
137 -84 172 -178 25 -69 11 -97 -47 -97 -42 0 -44 1 -73 57 -37 72 -76 98
-166 113 -98 17 -239 -5 -282 -43 -59 -52 -62 -71 -62 -333 l0 -240 28 -43
c44 -66 97 -86 227 -86 112 0 159 12 200 48 31 27 70 89 70 110 0 21 30 37 67
37 57 0 66 -35 32 -126 -25 -66 -86 -131 -153 -163 -47 -23 -178 -42 -244 -35
-20 2 -56 6 -80 9 -106 12 -214 97 -251 199 -20 53 -22 79 -22 300 -1 269 5
307 56 377 48 67 121 100 233 108 125 9 236 3 295 -14z"/>
    </g>
  </svg>
</div>

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