import React, { useContext } from "react";
import bgImage from "../../assets/bg-m.png";
import bgDark from "../../assets/bg-m-dark.png";
import { Link } from "react-router-dom";
import "./Home.css";
import { ThemeContext } from "../../context/ThemeContext";
import GsapAnimation from "../../components/Animation/Gsap"; 

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const backgroundImageUrl = theme === "dark" ? bgDark : bgImage;

  document.documentElement.style.setProperty("--bg-image-url", `url(${backgroundImageUrl})`);
  const rgbValue = theme === "dark" ? "26, 26, 46" : "247, 247, 247";
  document.documentElement.style.setProperty("--bg-gradient-rgb", rgbValue);

  const title = "COMPILE CUP";
  const specialLetterIndexes = [];
  title.split("").forEach((c, i) => {
    if (/[I]/.test(c)) specialLetterIndexes.push(i);
  });

  return (
    <div
      id="home"
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="gradient-overlay"></div>
      <div className="home-content-container">
        <div className="home-content">
          <GsapAnimation type="fade-up">
            <h1 className="home-title">
              {title.split("").map((char, i) => {
                if (char === " ") return <span key={i} className="space"></span>;

                const isSpecial = specialLetterIndexes.includes(i);
                const isLetterI = char.toUpperCase() === "I";

                return (
                  <span
                    key={i}
                    className={`letter ${isSpecial ? "animate-vowel" : ""} ${
                      isLetterI ? "special-letter" : ""
                    }`}
                    style={{
                      "--rand-x": Math.floor(Math.random() * 300),
                      "--rand-y": Math.floor(Math.random() * 300),
                      "--fly-in-delay": `${i * 0.1}s`,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          </GsapAnimation>

          <GsapAnimation type="fade-up" delay={0.2}>
            <h1 className="home-tagline">
              <span className="word">Code</span>
              <span className="word">
                <span className="superscript">Crafted</span>
              </span>
              <span className="word">
                <span className="superscript">Visions</span>
              </span>
              <span className="word">Launched</span>
            </h1>
          </GsapAnimation>

          <GsapAnimation type="fade-up" delay={0.4}>
            <p className="home-subtitle">
              We transform innovative ideas into seamless digital experiences,
              from concept to cloud.
            </p>
          </GsapAnimation>

          <GsapAnimation type="zoom-in" delay={0.6}>
            <Link to="/#projects" className="home-cta-button">
              Explore Our Work
            </Link>
          </GsapAnimation>
        </div>
      </div>
    </div>
  );
};

export default Home;
