import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

import serviceImage1 from "../../assets/service1.jpeg";
import serviceImage2 from "../../assets/service2.png";
import serviceImage3 from "../../assets/service3.png";
import serviceImage4 from "../../assets/service4.png";
import ser1 from "../../assets/ser-1.svg";
import ser2 from "../../assets/ser-2.svg";
import ser3 from "../../assets/ser-3.svg";
import ser4 from "../../assets/ser-4.svg";

import GsapAnimation from "../../components/Animation/Gsap";

const servicesData = [
  {
    title: "Web Applications",
    image: serviceImage1,
    icon: ser1, 
    description:
      "Modern, responsive, and feature-rich web applications tailored to your business needs.",
    techStack: ["React", "Node.js", ".NET", "Blazor", "Python", "Django"],
  },
  {
    title: "Mobile Applications",
    image: serviceImage2,
    icon: ser2, 
    description:
      "Cross-platform mobile apps for iOS and Android with a focus on performance and user experience.",
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Maui"],
  },
  {
    title: "Deployment & DevOps",
    image: serviceImage3,
    icon: ser3, 
    description:
      "Efficient and scalable deployment pipelines to get your application to market quickly and reliably.",
    techStack: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Lifetime Service & Support",
    image: serviceImage4,
    icon: ser4, 
    description:
      "We provide continuous support and maintenance to ensure your application remains up-to-date and secure.",
    techStack: ["Monitoring", "Backups", "Security", "Updates"],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const servicesWithAngles = useMemo(() => {
    return servicesData.map((service) => ({
      ...service,
      randomAngle: (Math.random() * 8 - 4).toFixed(2),
    }));
  }, []);

  const totalServices = servicesWithAngles.length;
  const activeService = servicesWithAngles[activeIndex];

  const handleNavClick = (increment) => {
    setActiveIndex(
      (prevIndex) => (prevIndex + increment + totalServices) % totalServices
    );
  };

  return (
    <div>
      <div className="services-page-container">
        <GsapAnimation type="fade-up">
          <h1 className="services-title">Our Services</h1>
        </GsapAnimation>

        <section
          className="services-carousel"
          style={{ "--n": totalServices, "--k": activeIndex }}
        >
          <GsapAnimation type="zoom-in">
            <div className="card-stack-container">
              {servicesWithAngles.map((service, index) => (
                <article
                  key={index}
                  className="service-article"
                  style={{ "--i": index, "--a": `${service.randomAngle}deg` }}
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
          </GsapAnimation>

          <GsapAnimation type="fade-up">
            <div className="right-column-container">
              <div key={activeIndex} className="service-content">
                <GsapAnimation type="fade-up">
                  <h2 className="ser-title">{activeService.title}</h2>
                </GsapAnimation>

                <GsapAnimation type="fade-up" delay={0.2}>
                  <p>{activeService.description}</p>
                </GsapAnimation>

                <GsapAnimation type="fade-up" delay={0.3}>
                  <div className="tech-stack">
                    {activeService.techStack.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </GsapAnimation>
              </div>

              <div className="service-nav">
                <button
                  aria-label="previous"
                  onClick={() => handleNavClick(-1)}
                ></button>
                <button
                  aria-label="next"
                  onClick={() => handleNavClick(1)}
                ></button>
              </div>
                <img
                    src={activeService.icon}
                    alt={`${activeService.title} icon`}
                    className="service-content-bg-icon"
                  />
            </div>
          </GsapAnimation>
        </section>

        <GsapAnimation type="fade-up" delay={0.2}>
          <p className="services-note">
            Charges may vary according to the complexity of the client's
            requirements.
          </p>
        </GsapAnimation>
<br />
        <GsapAnimation type="fade-down" delay={0.3}>
          <Link to="/#contact" className="contact-button">
            Contact Us
          </Link>
        </GsapAnimation>
      </div>
    </div>
  );
};

export default Services;