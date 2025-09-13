import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section.css';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ children, id, variant = 'primary' }) => {


  return (
    <section
      id={id}
      className={`section section--${variant}`}
    >
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;

