import { React, useEffect } from 'react';
import bgImage from '../../assets/bg-m.png'; // Make sure this path is correct

import './Home.css'; // Import the new CSS file

const App = () => {
  // This effect initializes the AOS library when the component mounts.
  useEffect(() => {
    // Check if the AOS library is available on the window object
    if (window.AOS) {
      window.AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,      // Whether animation should happen only once
      });
    }
  }, []);

  return (
    <div id="home" className="home-container">
      {/* Right side container for the background image with a fade-in animation */}
      <div className="home-image-container" data-aos="fade-left">
        <img
          src={bgImage}
          alt="Abstract code background"
          className="home-image"
        />
        {/* This div creates the gradient overlay for a smooth blend */}
        <div className="gradient-overlay"></div>
      </div>

      {/* Left side container for the text content with a fade-in animation */}
      <div className="home-content-container" data-aos="fade-right">
        <div className="home-content">
          <h1 className="home-title" data-aos="fade-up">
            Compile Cup
          </h1>
          <p className="home-tagline" data-aos-delay="200" data-aos="fade-up">
            Your Vision, Deployed.
          </p>
          <p className="home-subtitle" data-aos-delay="400" data-aos="fade-up">
            We build and deploy web & mobile applications with lifetime service,
            fast delivery, and affordable pricing.
          </p>
          <a href="#projects" className="home-cta-button" data-aos-delay="600" data-aos="zoom-in">
            Explore Our Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
