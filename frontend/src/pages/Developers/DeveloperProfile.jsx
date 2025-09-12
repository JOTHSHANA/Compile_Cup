import React, { useLayoutEffect, useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import paper from "../../assets/bg.png";
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const ExpandingButton = ({ text, icon, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="expanding-btn">
    <span className="expanding-btn-icon">{icon}</span>
    <span className="expanding-btn-text">{text}</span>
  </a>
);

const DeveloperProfile = ({ developer }) => {
  const { name, image, socials, role, bio, position } = developer;
  const cardRef = useRef(null); 

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%", 
          toggleActions: "restart pause resume reset", 
        },
      });

      tl.from(cardRef.current, { opacity: 0, y: 50, duration: 0.8 }, 0.1) 
        .from(".developer-image-container", { opacity: 0, scale: 0.8, duration: 0.8, ease: "power2.out" }, 0.15)
        .from(".developer-role", { opacity: 0, y: -30, duration: 0.6, ease: "power2.out" }, 0.3)
        .from(".developer-bio", { opacity: 0, y: 30, duration: 0.7, ease: "power2.out" }, 0.4)
        // .from(".social-links", { opacity: 0, scale: 0.5, duration: 0.6, ease: "back.out(1.7)" }, 0.5)
        .from(".resume-portfolio", { opacity: 0, y: 20, duration: 0.7, ease: "power2.out" }, 0.6); 

    }, cardRef); 

    return () => ctx.revert(); 
  }, []);

  const SocialLinks = () => (
    <div className="developer-info-container">
      <h3 className="developer-role">
        {role.toUpperCase()}
      </h3>
      <p className="developer-bio">
        {bio}
      </p>
      <div className="social-links">
        <a href={`mailto:${socials.email}`} target="_blank" rel="noreferrer" className="icon"><FaEnvelope /></a>
        <a href={`tel:${socials.phone}`} target="_blank" rel="noreferrer" className="icon"><FaPhoneAlt /></a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer" className="icon"><FaLinkedin /></a>
        {socials.github && <a href={socials.github} target="_blank" rel="noreferrer" className="icon"><FaGithub /></a>}
        {socials.whatsapp && <a href={socials.whatsapp} target="_blank" rel="noreferrer" className="icon"><FaWhatsapp /></a>}
      </div>
      <div className="resume-portfolio">
        <ExpandingButton
          text="View Resume"
          icon={<DescriptionIcon />}
          href={socials.resumeUrl}
        />
        <ExpandingButton
          text="View Portfolio"
          icon={<WorkIcon />}
          href={socials.portfolioUrl}
        />
      </div>
    </div>
  );

  return (
    <div
      className={`developer-card ${position === "image-right" ? "reverse" : ""}`}
      ref={cardRef} 
    >
      <div className="developer-image-container">
        <img
          src={image}
          alt={name}
          className="developer-image"
          style={{
            maskImage: `url(${paper})`,
            WebkitMaskImage: `url(${paper})`,
            maskSize: "contain",
            WebkitMaskSize: "full",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />
        <h2 className="developer-name">{name}</h2>
      </div>
      <SocialLinks />
    </div>
  );
};

export default DeveloperProfile;