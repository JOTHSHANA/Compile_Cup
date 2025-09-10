import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import serviceImage1 from '../../assets/service1.jpeg';
import serviceImage2 from '../../assets/service2.png';
import serviceImage3 from '../../assets/service3.png';
import serviceImage4 from '../../assets/service4.png';

const servicesData = [
  {
    title: 'Web Applications',
    image: serviceImage1,
    description: 'Modern, responsive, and feature-rich web applications tailored to your business needs.',
    techStack: ['React', 'Node.js', '.NET', 'Blazor', 'Python', 'Django'],
  },
  {
    title: 'Mobile Applications',
    image: serviceImage2,
    description: 'Cross-platform mobile apps for iOS and Android with a focus on performance and user experience.',
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Maui'],
  },
  {
    title: 'Deployment & DevOps',
    image: serviceImage3,
    description: 'Efficient and scalable deployment pipelines to get your application to market quickly and reliably.',
    techStack: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Lifetime Service & Support',
    image: serviceImage4,
    description: 'We provide continuous support and maintenance to ensure your application remains up-to-date and secure.',
    techStack: ['Monitoring', 'Backups', 'Security', 'Updates'],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const servicesWithAngles = useMemo(() => {
    return servicesData.map(service => ({
      ...service,
      randomAngle: (Math.random() * 8 - 4).toFixed(2)
    }));
  }, []);

  const totalServices = servicesWithAngles.length;
  const activeService = servicesWithAngles[activeIndex];

  const handleNavClick = (increment) => {
    setActiveIndex((prevIndex) => (prevIndex + increment + totalServices) % totalServices);
  };

  return (
    <div>
      <div className="services-page-container">
        <h1 className="services-title" data-aos="fade-up">OUR SERVICES</h1>

        <section
          className="services-carousel"
          style={{ '--n': totalServices, '--k': activeIndex }}
        >
          <div className="card-stack-container" data-aos="zoom-in-up">
            {servicesWithAngles.map((service, index) => (
              <article
                key={index}
                className="service-article"
                style={{ '--i': index, '--a': `${service.randomAngle}deg` }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="service-icon-card">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-image"
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="right-column-container" data-aos="fade-left">
            <div key={activeIndex} className="service-content">
              <h2 data-aos="fade-up">{activeService.title}</h2>
              <p data-aos="fade-up" data-aos-delay="150">{activeService.description}</p>
              <div className="tech-stack" data-aos="fade-up" data-aos-delay="250">
                {activeService.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="service-nav" data-aos="fade-up" data-aos-delay="350">
              <button aria-label="previous" onClick={() => handleNavClick(-1)}></button>
              <button aria-label="next" onClick={() => handleNavClick(1)}></button>
            </div>
          </div>
        </section>

        <p className="services-note" data-aos="fade-up">Charges may vary according to the complexity of the client's requirements.</p>

        <Link to="/#contact" className="contact-button" data-aos="zoom-in">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Services;
