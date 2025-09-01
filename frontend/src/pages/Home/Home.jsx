import React, { useContext } from "react";
import bgImage from "../../assets/bg-m.png";
import bgDark from "../../assets/bg-m-dark.png";
import { Link } from "react-router-dom";
import "./Home.css";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="home" className="home-container">
      <div className="home-image-container" data-aos="fade-left">
        <img
          src={theme === "dark" ? bgDark : bgImage}
          alt="Abstract code background"
          className="home-image"
        />
        <div className="gradient-overlay"></div>
      </div>

      <div className="home-content-container" data-aos="fade-right">
        <div className="home-content">
          <h1 className="home-title" data-aos="fade-up">
            COMPILE CUP
          </h1>
          <p className="home-tagline" data-aos-delay="200" data-aos="fade-up">
            Your Vision, Deployed
          </p>
          <p className="home-subtitle" data-aos-delay="400" data-aos="fade-up">
            We build and deploy web & mobile applications with lifetime service,
            fast delivery, and affordable pricing
          </p>
          <Link
            to="/#projects"
            className="home-cta-button"
            data-aos-delay="600"
            data-aos="zoom-in"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
