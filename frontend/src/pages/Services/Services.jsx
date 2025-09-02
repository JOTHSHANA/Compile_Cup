import React, { useState, useMemo } from 'react';
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

  const servicesWithAngles = useMemo(() => {
    return servicesData.map(service => ({
      ...service,
      randomAngle: (Math.random() * 20 - 10).toFixed(2)
    }));
  }, []);

  const totalServices = servicesWithAngles.length;
  const activeService = servicesWithAngles[activeIndex];

  const handleNavClick = (increment) => {
    setActiveIndex((prevIndex) => (prevIndex + increment + totalServices) % totalServices);
  };

  return (
    <div>
      {/* <h1 className="background-title">SERVICES</h1> */}
      <div className="services-page-container">
        <h1>Our Services</h1>
        <section
          className="services-carousel"
          style={{ '--n': totalServices, '--k': activeIndex }}
        >
          
          <div className="card-stack-container">
            {servicesWithAngles.map((service, index) => (
              <article
                key={index}
                className="service-article"
                style={{ '--i': index, '--a': `${service.randomAngle}deg` }}
              >
                <div className="service-icon-card">
                  <span className="card-debug-letter">{service.cardLetter}</span>
                  <div className="icon-container">{service.icon}</div>
                </div>
              </article>
            ))}
          </div>
          {/* Right Column: New wrapper for content and nav */}
          <div className="right-column-container">
            <div key={activeIndex} className="service-content">
              <h2>{activeService.title}</h2>
              <p>{activeService.description}</p>
              <div className="tech-stack">
                {activeService.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
      
            <div className="service-nav">
              <button aria-label="previous" onClick={() => handleNavClick(-1)}></button>
              <button aria-label="next" onClick={() => handleNavClick(1)}></button>
            </div>
          </div>
        </section>
        <p className="services-note">Charges may vary according to the complexity of the client's requirements.</p>
        <Link to="/#contact" className="contact-button">Contact Us</Link>
      </div>
    </div>
  );
};

export default Services;