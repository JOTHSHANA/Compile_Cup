import React, { useState, useRef, useEffect, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import projectsData from '../../data/projects.json';
import './Projects.css';

const Page = React.forwardRef(({ children, number }, ref) => {
  return (
    <div className="page" ref={ref} data-density="hard">
      <div className="page-content">
        {children}
        <div className="page-number">{number}</div>
      </div>
    </div>
  );
});

const Projects = () => {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = useCallback(() => {
    bookRef.current?.pageFlip().flipNext();
  }, []);

  const handlePrevPage = useCallback(() => {
    bookRef.current?.pageFlip().flipPrev();
  }, []);

  const onPage = (e) => {
    setCurrentPage(e.data);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNextPage();
      }
      if (e.key === 'ArrowLeft') {
        handlePrevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNextPage, handlePrevPage]);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Our Work</h1>
      <div className="book-container">
        <HTMLFlipBook
          width={550}
          height={650}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onPage}
          ref={bookRef}
          className="project-book"
        >
          <Page number={1}>
            <div className="book-cover">
              <h2>Our Projects</h2>
            </div>
          </Page>

          {projectsData.map((project, index) => (
            <Page key={index} number={index * 2 + 2}>
              <div className="project-page-left">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-page-right">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </Page>
          ))}

          <Page number={projectsData.length * 2 + 2}>
            <div className="book-end-cover">
              <h2>The End</h2>
            </div>
          </Page>
        </HTMLFlipBook>

        <div className="navigation-controls">
          <button onClick={handlePrevPage} disabled={currentPage === 0}>
            <ArrowBackIosIcon />
          </button>
          <span>Page {currentPage + 1} of {projectsData.length + 2}</span>
          <button onClick={handleNextPage} disabled={currentPage >= projectsData.length + 1}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      <p className="projects-note">Please place your project images (e.g., project1.png) in the `public/images` folder.</p>
    </div>
  );
};

export default Projects;
