import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <div className="home-container">
      <motion.div 
        className="background-shapes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </motion.div>
      <motion.div 
        className="home-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="home-title">Compile cup</motion.h1>
        <motion.p variants={itemVariants} className="home-tagline">Your Vision, Deployed.</motion.p>
        <motion.p variants={itemVariants} className="home-subtitle">
          We build and deploy web & mobile applications with lifetime service, fast delivery, and affordable pricing.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link to="/#projects" className="home-cta-button">Explore Our Work</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
