import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import projectData from '../../shared/projects.json'; 
import './Projects.css';

function Projects() {
  const bookRef = useRef(null);

  const nextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  return (
    <div className="projects-wrapper">
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
            <p>A showcase of my latest work.</p>
          </div>
        </div>

        {projectData.map((project) => (
          <div className="page" key={project.id}>
            <div className="page-content">
              <div className="project-container">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="tech-stack-container">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* End Page */}
        <div className="page cover">
          <div className="page-content">
            <h2>The End</h2>
            <p>Contact us for collaborations!</p>
          </div>
        </div>
      </HTMLFlipBook>

      <p className="helper-text">
        Use the arrows below or swipe to flip through my projects.
      </p>

      
    </div>
  );
}

export default Projects;
