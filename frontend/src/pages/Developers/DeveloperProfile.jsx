import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import paper from "../../assets/bg.png";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkIcon from "@mui/icons-material/Work";
import GsapAnimation from "../../components/Animation/Gsap"; // ✅ use your wrapper

const ExpandingButton = ({ text, icon, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="expanding-btn">
    <span className="expanding-btn-icon">{icon}</span>
    <span className="expanding-btn-text">{text}</span>
  </a>
);

const DeveloperProfile = ({ developer }) => {
  const { name, image, socials, role, bio, position } = developer;

  const SocialLinks = () => (
    <div className="developer-info-container">
      <GsapAnimation type="fade-down">
        <h3 className="developer-role">{role.toUpperCase()}</h3>
      </GsapAnimation>

      <GsapAnimation type="fade-up">
        <p className="developer-bio">{bio}</p>
      </GsapAnimation>

      <GsapAnimation type="zoom-in">
        <div className="social-links">
          <a href={`mailto:${socials.email}`} target="_blank" rel="noreferrer" className="icon"><FaEnvelope /></a>
          <a href={`tel:${socials.phone}`} target="_blank" rel="noreferrer" className="icon"><FaPhoneAlt /></a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="icon"><FaLinkedin /></a>
          {socials.github && <a href={socials.github} target="_blank" rel="noreferrer" className="icon"><FaGithub /></a>}
          {socials.whatsapp && <a href={socials.whatsapp} target="_blank" rel="noreferrer" className="icon"><FaWhatsapp /></a>}
        </div>
      </GsapAnimation>

      <GsapAnimation type="fade-up">
        <div className="resume-portfolio">
          <ExpandingButton text="View Resume" icon={<DescriptionIcon />} href={socials.resumeUrl} />
          <ExpandingButton text="View Portfolio" icon={<WorkIcon />} href={socials.portfolioUrl} />
        </div>
      </GsapAnimation>
    </div>
  );

  return (
    <GsapAnimation type="fade-up">
      <div className={`developer-card ${position === "image-right" ? "reverse" : ""}`}>
        <GsapAnimation type="zoom-in">
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
        </GsapAnimation>

        <SocialLinks />
      </div>
    </GsapAnimation>
  );
};

export default DeveloperProfile;
