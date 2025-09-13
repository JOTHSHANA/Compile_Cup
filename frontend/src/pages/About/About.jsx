import React from "react";
import {
  FaRocket,
  FaQuestionCircle,
  FaCalendarAlt,
  FaCogs,
  FaPlusCircle,
} from "react-icons/fa";

import team from "../../assets/team.svg";
import startup from "../../assets/startup.svg";
import develop from "../../assets/develop.svg";
import mobile from "../../assets/mobile.svg";
import service from "../../assets/service.svg";
import GsapAnimation from "../../components/Animation/Gsap"; 
import "./About.css";

const About = () => {
  const cards = [
    {
      id: 1,
      title: "What?",
      desc: "We design and build modern apps, websites, and cloud solutions. From concept to deployment, we make technology work seamlessly for businesses and startups.",
      icon: <FaRocket />,
      color: "#faf7f6",
      tags: ["Websites", "Apps", "Cloud"],
      img: team,
      isBig: true,
    },
    {
      id: 2,
      title: "Why?",
      desc: "Because one-size-fits-all solutions never scale. We focus on performance, security, and usability—ensuring our builds grow with your business needs.",
      icon: <FaQuestionCircle />,
      color: "#ddf160",
      tags: ["Scalable", "Secure", "Smart"],
      img: startup,
      isBig: false,
    },
    {
      id: 3,
      title: "When?",
      desc: "Anytime. Whether it’s strict deadlines, midnight bug fixes, or last-minute server setups—we’ve got your back, 24/7.",
      icon: <FaCalendarAlt />,
      color: "#1c1c1c",
      tags: ["24/7", "On-Demand", "Flexible"],
      img: service,
      isBig: true,
    },
    {
      id: 4,
      title: "How?",
      desc: "Simple formula: Coffee ☕ + Code 💻 + Cloud ☁️ = Success 🚀. Our workflow blends DevOps, automation, and agile practices to deliver faster, better, and smarter.",
      icon: <FaCogs />,
      color: "#faf7f6",
      tags: ["DevOps", "Automation", "Agile"],
      img: develop,
      isBig: false,
    },
    {
      id: 5,
      title: "More?",
      desc: "From mobile apps to enterprise-grade pipelines, we act as your tech pit crew—keeping everything running smoothly, securely, and at scale.",
      icon: <FaPlusCircle />,
      color: "#ddf160",
      tags: ["Mobile", "Web", "Cloud"],
      img: mobile,
      isBig: true,
    },
  ];

  return (
    <section className="about-section">
      <div className="about-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`about-card ${
              card.isBig ? "big-card-layout" : "small-card-layout"
            } ${card.color === "#1c1c1c" ? "dark-theme" : ""}`}
            style={{ backgroundColor: card.color }}
          >
            <div className="about-content">
              {card.isBig ? (
                <div className="big-layout">
                  <div className="big-header">
                    <GsapAnimation type="fade-up">
                      <h2>{card.title}</h2>
                    </GsapAnimation>
                    <div className="big-icon">{card.icon}</div>
                  </div>
                  <GsapAnimation type="fade-up" delay={0.2}>
                    <p>{card.desc}</p>
                  </GsapAnimation>
                </div>
              ) : (
                <div className="small-layout">
                  <div className="icon">{card.icon}</div>
                  <GsapAnimation type="fade-up">
                    <h2>{card.title}</h2>
                  </GsapAnimation>
                  <GsapAnimation type="fade-up" delay={0.2}>
                    <p>{card.desc}</p>
                  </GsapAnimation>
                </div>
              )}

              <GsapAnimation type="fade-up" delay={0.3}>
                <div className="tags">
                  {card.tags.map((tag, idx) => (
                    <span key={idx} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </GsapAnimation>
            </div>

            <GsapAnimation type="fade-up" delay={0.4}>
              <div className="about-image">
                <img src={card.img} alt={card.title} />
              </div>
            </GsapAnimation>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
