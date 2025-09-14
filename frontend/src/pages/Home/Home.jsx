import React, { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import SplitType from 'split-type';
import bgImage from "../../assets/bg-m.png";
import bgDark from "../../assets/bg-m-dark.png";
import { Link } from "react-router-dom";
import "./Home.css";
import { ThemeContext } from "../../context/ThemeContext";
import GsapAnimation from "../../components/Animation/Gsap";

gsap.registerPlugin(ScrollTrigger); 

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const backgroundImageUrl = theme === "dark" ? bgDark : bgImage;
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(subtitleRef.current, { types: 'words' });

      gsap.from(split.words, {
        y: -200,
        opacity: 0,
        rotation: "random(-100, 100)",
        duration: 2,
        ease: "back.out",
        stagger: 0.90,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
          toggleActions: "play none none none", 
        },
      });

      return () => {
        split.revert();
      };
    }, subtitleRef);

    return () => ctx.revert();
  }, []); 

  document.documentElement.style.setProperty("--bg-image-url", `url(${backgroundImageUrl})`);
  const rgbValue = theme === "dark" ? "26, 26, 46" : "247, 247, 247";
  document.documentElement.style.setProperty("--bg-gradient-rgb", rgbValue);

  const title = "COMPILE CUP";
  const specialLetterIndexes = [];
  title.split("").forEach((c, i) => {
    if (/[a]/.test(c)) specialLetterIndexes.push(i);
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
                const isLetterI = char.toUpperCase() === "J";
                return (
                  <span
                    key={i}
                    className={`letter ${isSpecial ? "animate-vowel" : ""} ${isLetterI ? "special-letter" : ""}`}
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
              <span className="word"><span className="superscript">Crafted</span></span>
              <span className="word"><span className="superscript">Visions</span></span>
              <span className="word">Launched</span>
            </h1>
          </GsapAnimation>

          <p ref={subtitleRef} className="home-subtitle">
            We transform innovative ideas into seamless digital experiences, from concept to cloud.
          </p>

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