import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, Typography, Paper } from '@mui/material';
import aboutImage from '../../assets/about.png';
import './AboutGSAP.css';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    title: 'Phase 1: Discovery & Strategy',
    description: 'We start by understanding your vision, goals, and target audience to build a solid foundation for your project.',
  },
  {
    title: 'Phase 2: UI/UX Design',
    description: 'Our team creates intuitive and beautiful designs, focusing on creating a seamless user experience.',
  },
  {
    title: 'Phase 3: Development & Testing',
    description: 'Using the latest technologies, we bring the designs to life, ensuring a robust and bug-free application.',
  },
  {
    title: 'Phase 4: Deployment & Support',
    description: 'We handle the deployment process and provide lifetime support to ensure your application runs smoothly.',
  },
];

const AboutGSAP = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia(); // use matchMedia for responsive animations

    mm.add(
      {
        // desktop and tablet
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // remove previous triggers in case of hot reloads
        ScrollTrigger.getAll().forEach((t) => t.kill());

        if (isDesktop) {
          const horizontal = horizontalRef.current;
          const panels = panelsRef.current;
          if (!horizontal || panels.length === 0) return;

          // calculate width to scroll
          const totalWidth = horizontal.scrollWidth;
          const viewportWidth = window.innerWidth;
          const scrollDistance = totalWidth - viewportWidth;

          // pin the container and scrub animation to translateX panels left
          gsap.to(horizontal, {
            x: () => `-${Math.max(0, scrollDistance)}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: () => `+=${totalWidth}`, // longer end to make scrub smooth
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // subtle reveal animation for each panel when it reaches center
          panels.forEach((panel) => {
            gsap.fromTo(
              panel,
              { autoAlpha: 0.2, scale: 0.98, y: 30 },
              {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: ScrollTrigger.getById ? undefined : undefined, // noop but safe
                  start: 'center center',
                  end: 'center center',
                  toggleActions: 'play reverse play reverse',
                },
              }
            );
          });
        }

        if (isMobile) {
          // mobile: stacked vertical animation for each panel
          panelsRef.current.forEach((panel) => {
            gsap.fromTo(
              panel,
              { autoAlpha: 0, y: 40 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: panel,
                  start: 'top 85%',
                  end: 'top 60%',
                  toggleActions: 'play reverse play reverse',
                },
              }
            );
          });
        }
      }
    );

    // refresh ScrollTrigger on resize/orientation change
    ScrollTrigger.addEventListener('refreshInit', () => {
      // optional: you can do things before refresh
    });
    ScrollTrigger.refresh();

    return () => {
      // cleanup
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.matchMedia().revert(); // revert matchMedia
    };
  }, []);

  // helper to attach panel refs
  const setPanelRef = (el, idx) => {
    panelsRef.current[idx] = el;
  };

  return (
    <Box className="aboutgsap-wrapper" ref={containerRef} id="about-section">
      <div className="aboutgsap-inner">
        {/* Left image column (kept static for desktop; hidden above panels on mobile) */}
        <div className="aboutgsap-left">
          <img src={aboutImage} alt="About" className="aboutgsap-image" />
        </div>

        {/* Horizontal panels */}
        <div className="aboutgsap-horizontal" ref={horizontalRef}>
          {phases.map((phase, idx) => (
            <section
              className="aboutgsap-panel"
              key={idx}
              ref={(el) => setPanelRef(el, idx)}
              aria-labelledby={`phase-title-${idx}`}
            >
              <Paper elevation={3} className="aboutgsap-card">
                <Typography
                  id={`phase-title-${idx}`}
                  variant="h5"
                  component="h3"
                  sx={{ fontFamily: 'Montserrat, sans-serif', marginBottom: '8px' }}
                >
                  {phase.title}
                </Typography>
                <Typography sx={{ fontFamily: 'Lato, sans-serif', color: 'var(--text-secondary)' }}>
                  {phase.description}
                </Typography>
              </Paper>
            </section>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default AboutGSAP;
