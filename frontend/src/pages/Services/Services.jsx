import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import StorageIcon from '@mui/icons-material/Storage';
import './Services.css';

const servicesData = [
  {
    title: 'Web Applications',
    icon: <WebIcon />,
    description: 'Modern, responsive, and feature-rich web applications tailored to your business needs.',
    techStack: ['React', 'Node.js', 'Python', 'Django'],
  },
  {
    title: 'Mobile Applications',
    icon: <PhoneIphoneIcon />,
    description: 'Cross-platform mobile apps for iOS and Android with a focus on performance and user experience.',
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    title: 'Deployment & DevOps',
    icon: <CloudQueueIcon />,
    description: 'Efficient and scalable deployment pipelines to get your application to market quickly and reliably.',
    techStack: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Lifetime Service & Support',
    icon: <StorageIcon />,
    description: 'We provide continuous support and maintenance to ensure your application remains up-to-date and secure.',
    techStack: ['Monitoring', 'Backups', 'Security', 'Updates'],
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <div className="service-card-back">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <div className="tech-stack">
                  {service.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="services-note">Charges may vary according to the complexity of the client's requirements.</p>
      <Link to="/#contact" className="contact-button">Contact Us</Link>
    </div>
  );
};

export default Services;
