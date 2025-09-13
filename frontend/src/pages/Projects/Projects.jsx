import React, { useRef, useEffect } from "react";
import projectData from "../../shared/projects.json";
import "./Projects.css";

import inventoryApp from '../../assets/inventory-app.png';
import weatherApp from '../../assets/weather-app.png';
import musicPlayer from '../../assets/music-player.png';
import ecom from '../../assets/ecom.png';
import taskApp from '../../assets/task-app.png';
import recipe from '../../assets/recipe.png';
import portfolio from '../../assets/Portfolio.png';

const projectImages = {
  'inventory-app.png': inventoryApp,
  'weather-app.png': weatherApp,
  'music-player.png': musicPlayer,
  'ecom.png': ecom,
  'task-app.png': taskApp,
  'recipe.png': recipe,
  'portfolio.png': portfolio,
};

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const container = sectionRef.current.querySelector(".projects-container");

    container.style.setProperty("--cards-count", cards.length);
    const cardHeight = cards[0].clientHeight;
    container.style.setProperty("--card-height", `${cardHeight}px`);

    cards.forEach((card, index) => {
      card.style.paddingTop = `${index * 20}px`;
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardInner = card.querySelector(".project-card-inner");

        let percentage = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);
        let scale = 1 - (cards.length - 1 - index) * 0.05 * percentage;
        let brightness = 1 - 0.4 * percentage;

        card.style.transform = `scale(${scale})`;
        card.style.filter = `brightness(${brightness})`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="projects-section" ref={sectionRef}>
      <h1 className="background-titl">PROJECTS</h1>
      <div className="projects-container">
        {projectData.map((project, i) => (
          <div
            className="project-card"
            key={project.id}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="project-card-inner">
              <div className="project-img-container">
                <img
                  src={projectImages[project.imageName]}
                  alt={project.name}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="space1"></div>
    </section>
  );
};

export default Projects;
