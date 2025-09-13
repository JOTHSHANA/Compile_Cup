import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

import serviceImage1 from "../../assets/service1.jpeg";
import serviceImage2 from "../../assets/service2.png";
import serviceImage3 from "../../assets/service3.png";
import serviceImage4 from "../../assets/service4.png";

import GsapAnimation from "../../components/Animation/Gsap";

const servicesData = [
  {
    title: "Web Applications",
    image: serviceImage1,
    description:
      "Modern, responsive, and feature-rich web applications tailored to your business needs.",
    techStack: ["React", "Node.js", ".NET", "Blazor", "Python", "Django"],
  },
  {
    title: "Mobile Applications",
    image: serviceImage2,
    description:
      "Cross-platform mobile apps for iOS and Android with a focus on performance and user experience.",
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Maui"],
  },
  {
    title: "Deployment & DevOps",
    image: serviceImage3,
    description:
      "Efficient and scalable deployment pipelines to get your application to market quickly and reliably.",
    techStack: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Lifetime Service & Support",
    image: serviceImage4,
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
        {/* Title */}
        <GsapAnimation type="fade-up">
          <h1 className="services-title">OUR SERVICES</h1>
        </GsapAnimation>

        <section
          className="services-carousel"
          style={{ "--n": totalServices, "--k": activeIndex }}
        >
          {/* Left Column → Card Stack */}
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

          {/* Right Column */}
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
            </div>
          </GsapAnimation>
        </section>

        {/* Note + Button */}
        <GsapAnimation type="fade-up" delay={0.2}>
          <p className="services-note">
            Charges may vary according to the complexity of the client's
            requirements.
          </p>
        </GsapAnimation>

        <GsapAnimation type="fade-up" delay={0.3}>
          <Link to="/#contact" className="contact-button">
            Contact Us
          </Link>
        </GsapAnimation>
      </div>
    </div>
  );
};

export default Services;
