import React, { useContext, useEffect, useState } from "react";
import bgImage from "../../assets/bg-m.png";
import bgDark from "../../assets/bg-m-dark.png";
import { Link } from "react-router-dom";
import "./Home.css";
import { ThemeContext } from "../../context/ThemeContext";

const targetText = "COMPILE CUP";
const characters = "☊⍜⋔⌿⟟⌰⟒ ☊⎍⌿";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [displayText, setDisplayText] = useState("");
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    let interval;

    if (iteration < targetText.length) {
      interval = setInterval(() => {
        setDisplayText((prev) => {
          let result = "";
          for (let i = 0; i < targetText.length; i++) {
            if (i <= iteration) {
              result += targetText[i]; 
            } else {
              result += characters[Math.floor(Math.random() * characters.length)];
            }
          }
          return result;
        });
        setIteration((prev) => prev + 1);
      }, 200);
    }

    return () => clearInterval(interval);
  }, [iteration]);

  useEffect(() => {
    const backgroundImageUrl = theme === "dark" ? bgDark : bgImage;
    document.documentElement.style.setProperty(
      "--bg-image-url",
      `url(${backgroundImageUrl})`
    );

    const rgbValue = theme === "dark" ? "26, 26, 46" : "247, 247, 247";
    document.documentElement.style.setProperty("--bg-gradient-rgb", rgbValue);
  }, [theme]);

  return (
    <div id="home" className="home-container">
      <div className="gradient-overlay"></div>

      <div className="home-content-container">
        <div className="home-content">
          {/* Animated Cipher Title */}
          <h1 className="home-title" data-aos="fade-up">
            {displayText}
          </h1>

          {/* Tagline */}
          <p className="home-tagline" data-aos="fade-up" data-aos-delay="200">
            Code Crafted. Visions Launched.
          </p>

          {/* Subtitle */}
          <p className="home-subtitle" data-aos="fade-up" data-aos-delay="400">
            We transform innovative ideas into seamless digital experiences,
            from concept to cloud.
          </p>

          {/* CTA */}
          <Link
            to="/#projects"
            className="home-cta-button"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
