import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import aboutImage from '../../assets/about.png';
import DraggableWrapper from '../../components/Drag/DraggableWrapper';
import './About.css';

const timelineItems = [
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

const About = () => {
  return (
    <Box className="about-container">
      <div className="about-layout">
        <div className="about-column1 about-left">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={aboutImage} alt="About Compile cup" className="about-image" />
          </motion.div>
        </div>
        <div className="about-column2 about-right">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Timeline position="alternate">
              {timelineItems.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineOppositeContent color="var(--text-secondary)">
                    {/* You can add dates or other info here if you want */}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: 'var(--accent-primary)' }} />
                    <TimelineConnector sx={{ backgroundColor: 'var(--accent-primary)' }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className="timeline-paper">
                      <Typography variant="h6" component="h1" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontFamily: 'Lato, sans-serif', color: 'var(--text-secondary)' }}>
                        {item.description}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </motion.div>
        </div>
      </div>
    </Box>
  );
};

export default About;
