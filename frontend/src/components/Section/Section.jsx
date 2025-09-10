import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section.css';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ children, id, variant = 'primary' }) => {
  const sectionRef = useRef(null);


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
