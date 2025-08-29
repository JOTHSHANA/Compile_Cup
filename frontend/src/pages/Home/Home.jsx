import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DraggableWrapper from '../../components/Drag/DraggableWrapper';
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
      <DraggableWrapper>
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
</DraggableWrapper>
      <motion.div
        className="home-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="home-title animated-title"> Compile Cup <span>Compile Cup</span> <span>Compile Cup</span> <span>Empowering Ideas</span> </motion.h1>

        <motion.p variants={itemVariants} className="home-tagline">
          <DraggableWrapper>Your Vision, Deployed.</DraggableWrapper>
        </motion.p>

        <motion.p variants={itemVariants} className="home-subtitle">
          <DraggableWrapper>We build and deploy web & mobile applications with lifetime service, fast delivery, and affordable pricing.</DraggableWrapper>
        </motion.p>

        <motion.div variants={itemVariants}>
          <DraggableWrapper>
            <Link to="/#projects" className="home-cta-button">
              Explore Our Work
            </Link>
          </DraggableWrapper>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
