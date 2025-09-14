import React, { useRef, useEffect } from "react";
import projectData from "../../shared/projects.json";
import "./Projects.css";
import GsapAnimation from "../../components/Animation/Gsap";

// Import images
import inventoryApp from '../../assets/inventory-app.png';
import weatherApp from '../../assets/weather-app.png';
import portfolio from '../../assets/Portfolio.png';

// 1. Import your new SVG files
import pro1 from '../../assets/pro-1.svg';
import pro2 from '../../assets/pro-2.svg';
import pro3 from '../../assets/pro-3.svg';

const projectImages = {
  'inventory-app.png': inventoryApp,
  'weather-app.png': weatherApp,
  'portfolio.png': portfolio,
};

const cardColors = [
  { bg: "#ef9dab", text: "#1a1a1a" },
  { bg: "#8a8db1", text: "#f1f1f1" },
  { bg: "#ff8f77", text: "#1a1a1a" },
  { bg: "#638cde", text: "#f1f1f1" },
  { bg: "#72b5a1", text: "#1a1a1a" },
  { bg: "#f2c87c", text: "#1a1a1a" },
  { bg: "#d38ca2", text: "#f1f1f1" },
];

// 2. Create an array for the decorative SVGs
const cardSvgs = [pro1, pro2, pro3];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const container = sectionRef.current;

    if (cards.length === 0) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      const cardHeight = cards[0].clientHeight;
      container.style.setProperty("--card-height", `${cardHeight}px`);
      container.style.setProperty('--sticky-top', `calc(50vh - ${cardHeight / 2}px)`);
    });

    resizeObserver.observe(cards[0]);
    container.style.setProperty("--cards-count", cards.length);

    cards.forEach((card, index) => {
      card.style.paddingTop = `calc(${index * 1}rem)`;
    });

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardInner = card.querySelector(".project-card-inner");
        if (!cardInner) return;

        const rect = card.getBoundingClientRect();
        const stickyTopPixels = parseFloat(getComputedStyle(card).top);

        const progress = Math.min(1, Math.max(0, (stickyTopPixels - rect.top) / 300));
        
        const scale = 1 - progress * 0.05;
        const brightness = 1 - progress * 0.4;

        cardInner.style.transform = `scale(${scale})`;
        cardInner.style.filter = `brightness(${brightness})`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="projects-section" ref={sectionRef}>
      <br />
      <h1 className="project-title">Projects</h1>
      <div className="projects-container">
        {projectData.map((project, i) => (
          <div
            className="project-card"
            key={project.id}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div
              className="project-card-inner"
              style={{
                '--card-bg': cardColors[i % cardColors.length].bg,
                '--card-text': cardColors[i % cardColors.length].text,
              }}
            >
              <div className="project-img-container">
                <GsapAnimation type="zoom-in">
                  <img
                    src={projectImages[project.imageName]}
                    alt={project.name}
                    className="project-image"
                  />
                </GsapAnimation>
              </div>
              <div className="project-content">
                <GsapAnimation type="fade-down">
                  <h2>{project.name}</h2>
                </GsapAnimation>
                <GsapAnimation type="fade-up">
                  <p>{project.description}</p>
                </GsapAnimation>
                <div className="tech-stacks">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <img 
                src={cardSvgs[i % cardSvgs.length]} 
                alt="" 
                className="card-svg-decorator" 
              />
            </div>
          </div>
        ))}
      </div>
      <div className="space1"></div>
    </section>
  );
};

export default Projects;