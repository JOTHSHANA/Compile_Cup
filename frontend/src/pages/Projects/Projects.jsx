import React, { useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
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

function Projects() {
  const bookRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bookRef.current) {
        bookRef.current.pageFlip().flipNext();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="projects-wrapper" data-aos="fade-up"
        data-aos-duration="1000">
      <h1 className="background-title">PROJECTS</h1>
      <HTMLFlipBook
        ref={bookRef}
        width={400}
        height={550}
        flippingTime={1000}
        drawShadow={true}
        maxShadowOpacity={0.5}
        showCover={true}
        size="fixed"
        
      >
        <div className="page cover">
          <div className="page-content">
            <h1>Our Projects</h1>
            <p>A showcase of our latest work.</p>
          </div>
        </div>

        {projectData.map((project, index) => (
          <div className="page" key={project.id}>
            <div className="page-content">
              <div className="project-img-container">
                <img
                  src={projectImages[project.imageName]}
                  alt={project.name}
                  className="project-image"
                />
                
              </div>
              <hr style={{width:'100%', marginBottom:"20px"}}/>
              <div className="project-container">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="tech-stack-container">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="page-number">{index + 1}</div>
            </div>
          </div>
        ))}

        <div className="page cover">
          <div className="page-content">
            <h2>The End</h2>
            <p>Contact us for collaborations!</p>
          </div>
        </div>
      </HTMLFlipBook>
      <p className="helper-text">
        Click or swipe to flip through our projects.
      </p>
    </div>
  );
}

export default Projects;