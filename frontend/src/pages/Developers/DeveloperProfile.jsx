import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import paper from "../../assets/bg.png";

const DeveloperProfile = ({ developer }) => {
  const { name, image, socials, role, bio, position } = developer;

  const SocialLinks = () => (
    <div className="developer-info-container" data-aos="fade-up" data-aos-delay="200">
      <h3 className="developer-role" data-aos="fade-right" data-aos-delay="300">
        {role.toUpperCase()}
      </h3>

      <p className="developer-bio" data-aos="fade-left" data-aos-delay="400">
        {bio}
      </p>

      <div className="social-links" data-aos="zoom-in" data-aos-delay="500">
        <a href={`mailto:${socials.email}`} target="_blank" rel="noreferrer" className="icon">
          <FaEnvelope />
        </a>
        <a href={`tel:${socials.phone}`} target="_blank" rel="noreferrer" className="icon">
          <FaPhoneAlt />
        </a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer" className="icon">
          <FaLinkedin />
        </a>
        {socials.github && (
          <a href={socials.github} target="_blank" rel="noreferrer" className="icon">
            <FaGithub />
          </a>
        )}
        {socials.whatsapp && (
          <a href={socials.whatsapp} target="_blank" rel="noreferrer" className="icon">
            <FaWhatsapp />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={`developer-card ${position === "image-right" ? "reverse" : ""}`}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="developer-image-container" data-aos="zoom-in" data-aos-delay="150">
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
        <h2 className="developer-name" >
          {name}
        </h2>
      </div>
      <SocialLinks />
    </div>
  );
};

export default DeveloperProfile;
