import React from 'react';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './DeveloperProfile.css';

const DeveloperProfile = ({ developer, imagePosition }) => {
  const { name, email, whatsapp, image } = developer;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div 
      className={`profile-card ${imagePosition === 'left' ? 'image-left' : 'image-right'}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="profile-image-container">
        <img src={image} alt={name} className="profile-image" />
      </div>
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        <div className="profile-contact">
          <a href={`mailto:${email}`} className="contact-link">
            <EmailIcon />
            <span>{email}</span>
          </a>
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="contact-link">
            <WhatsAppIcon />
            <span>+{whatsapp}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default DeveloperProfile;
