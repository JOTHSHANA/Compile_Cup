import React, { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section.css';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ children, id, variant = 'primary' }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-content", {
        opacity: 0,
        y: 100, 
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', 
          toggleActions: 'restart pause resume reset', 
        },
      });
    }, sectionRef); 

    return () => ctx.revert();
  }, []);


  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section section--${variant}`}
    >
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;


// import React from 'react';
// import { motion } from 'framer-motion';
// import './Section.css';

// const Section = ({ children, id, variant = 'primary' }) => {
//   return (
//     <motion.section
//       id={id}
//       className={`section section--${variant}`}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.8 }}
//     >
//       {children}
//     </motion.section>
//   );
// };

// export default Section;
