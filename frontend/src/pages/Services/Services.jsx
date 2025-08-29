import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    techStack: ['React', 'Node.js', '.NET', 'Blazor', 'Python', 'Django'],
    cardLetter: 'A'
  },
  {
    title: 'Mobile Applications',
    icon: <PhoneIphoneIcon />,
    description: 'Cross-platform mobile apps for iOS and Android with a focus on performance and user experience.',
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Maui'],
    cardLetter: 'B'
  },
  {
    title: 'Deployment & DevOps',
    icon: <CloudQueueIcon />,
    description: 'Efficient and scalable deployment pipelines to get your application to market quickly and reliably.',
    techStack: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    cardLetter: 'C'
  },
  {
    title: 'Lifetime Service & Support',
    icon: <StorageIcon />,
    description: 'We provide continuous support and maintenance to ensure your application remains up-to-date and secure.',
    techStack: ['Monitoring', 'Backups', 'Security', 'Updates'],
    cardLetter: 'D'
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalServices = servicesData.length;

  const handleNavClick = (increment) => {
    setActiveIndex((prevIndex) => (prevIndex + increment + totalServices) % totalServices);
    console.log(`New Index: ${(activeIndex + increment + totalServices) % totalServices}`); // For browser console debugging
  };

  return (
    <div className="services-page-container">
      <h1 className="services-main-title">Our Services</h1>
      
      {/* Debugger to show the current active index */}
      <p className="debug-index-display">Current Active Index: {activeIndex}</p>

      <section 
        className="services-carousel" 
        style={{ '--n': totalServices, '--k': activeIndex }}
      >
        {servicesData.map((service, index) => (
          <article 
            key={index} 
            className="service-article" 
            style={{ '--i': index, '--a': `${(Math.random() * 20 - 10).toFixed(2)}deg` }}
          >
            <div className="service-icon-card">
              <span className="card-debug-letter">{service.cardLetter}</span>
              <div className="icon-container">{service.icon}</div>
            </div>

            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="tech-stack">
                {service.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}

        <div className="service-nav">
          <button aria-label="previous" onClick={() => handleNavClick(-1)}></button>
          <button aria-label="next" onClick={() => handleNavClick(1)}></button>
        </div>
      </section>
      

      <p className="services-note">Charges may vary according to the complexity of the client's requirements.</p>
      <Link to="/#contact" className="contact-button">Contact Us</Link>
    </div>
  );
};

export default Services;