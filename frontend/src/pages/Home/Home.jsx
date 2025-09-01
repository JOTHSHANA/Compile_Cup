import React, { useEffect } from 'react';
import bgImage from '../../assets/bg-m.png';


const App = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000, 
        once: true, 
      });
    }
  }, []);

  const styles = `
    /* General body styles to ensure the font is applied */
    body {
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      margin: 0;
    }

    /* Main container with a dark background. It's set to relative positioning
       to act as a positioning context for its children. */
    .home-container {
      position: relative;
      width: 100%;
      height: 100vh;
      background-color: #111827; /* bg-gray-900 */
      color: #ffffff; /* text-white */
      overflow: hidden; /* Hide scrollbars until AOS needs them */
    }

    /* Right side container for the background image */
    .home-image-container {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }

    .home-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* This is the gradient overlay that creates the fading effect. */
    .gradient-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to right, #111827, rgba(17, 24, 39, 0.8), transparent);
    }

    /* Left side container for the text content */
    .home-content-container {
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
      padding: 2rem;
    }

    .home-content {
      max-width: 36rem;
    }

    .home-title {
      font-size: 3rem;
      line-height: 1;
      font-weight: 800;
      filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    }

    .home-tagline {
      margin-top: 1rem;
      font-size: 1.5rem;
      line-height: 2rem;
      color: #22d3ee;
      font-weight: 500;
      filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    }

    .home-subtitle {
      margin-top: 1.5rem;
      font-size: 1.125rem;
      line-height: 1.625;
      color: #d1d5db;
    }

    .home-cta-button {
      margin-top: 2.5rem;
      display: inline-block;
      background-color: #06b6d4;
      color: #ffffff;
      font-weight: 700;
      font-size: 1.125rem;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      transition: transform 300ms, background-color 300ms;
      text-decoration: none;
    }

    .home-cta-button:hover {
      background-color: #0891b2;
      transform: scale(1.05);
    }

    @media (min-width: 640px) {
      .home-content-container {
        padding: 3rem;
      }
    }

    @media (min-width: 768px) {
      .home-content-container {
        padding: 5rem;
      }
      .home-title {
        font-size: 4.5rem;
      }
      .home-tagline {
        font-size: 1.875rem;
        line-height: 2.25rem;
      }
      .home-subtitle {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }

    @media (min-width: 1024px) {
      .home-image-container {
        width: 70%;
      }
      .home-content-container {
        width: 60%;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="home-container">
        <div className="home-image-container" data-aos="fade-left">
          <img
            src={bgImage}
            alt="Abstract code background"
            className="home-image"
          />
          <div className="gradient-overlay"></div>
        </div>

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
    </>
  );
};

export default App;

