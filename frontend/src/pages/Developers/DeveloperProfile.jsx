import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import paper from "../../assets/bg.png";

const DeveloperProfile = ({ developer }) => {
  const { name, image, socials, position } = developer;

  const SocialLinks = () => (
    <div className="social-links">
      <a href={`mailto:${socials.email}`} target="_blank" rel="noreferrer">
        <MailOutlined />
      </a>
      <a href={`tel:${socials.phone}`} target="_blank" rel="noreferrer">
        <PhoneOutlined />
      </a>
      <a href={socials.linkedin} target="_blank" rel="noreferrer">
        <LinkedinOutlined />
      </a>
      <a href={socials.instagram} target="_blank" rel="noreferrer">
        <InstagramOutlined />
      </a>
    </div>
  );

  return (
    <div
      className={`developer-card ${
        position === "image-right" ? "reverse" : ""
      }`}
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
