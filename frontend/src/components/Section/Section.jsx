import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id, backgroundColor, textColor }) => {
  return (
    <motion.section
      id={id}
      style={{ backgroundColor, color: textColor || 'inherit' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
