import React, { useState } from 'react';
import {
  PhoneOutlined,
  MailOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';

const Toast = ({ message, isVisible }) => {
  if (!isVisible) return null;
  return <div className="toast-notification">{message}</div>;
};

const DeveloperProfile = ({ developer }) => {
  const { name, image, position, socials } = developer;
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showTemporaryToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 3000);
  };

  const openNewTab = (url) => {
    try {
      const w = window.open(url, '_blank', 'noopener,noreferrer');
      if (w) w.opener = null;
    } catch (e) {
      console.error('Failed to open new tab:', e);
    }
  };

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => showTemporaryToast(`Copied: ${text}`),
        () => showTemporaryToast('Failed to copy.')
      );
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showTemporaryToast(`Copied: ${text}`);
      } catch (err) {
        showTemporaryToast('Failed to copy.');
      }
      document.body.removeChild(ta);
    }
  };

  const handleKey = (e, fn) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fn();
    }
  };

  return (
    <>
      <div className={`developer-card ${position}`}>
        <div className="image-container">
          <img src={image} alt={name} className="developer-image" />
          <h2 className="developer-name">{name}</h2>

          <div className="social-links">
            <button className="mail"
              onClick={() => openNewTab(`mailto:${socials.email}`)}
              onKeyDown={(e) => handleKey(e, () => openNewTab(`mailto:${socials.email}`))}>
              <MailOutlined />
            </button>

            <button className="phone"
              onClick={() => copyToClipboard(socials.phone)}
              onKeyDown={(e) => handleKey(e, () => copyToClipboard(socials.phone))}>
              <PhoneOutlined />
            </button>

            <button className="linkedin"
              onClick={() => openNewTab(socials.linkedin)}
              onKeyDown={(e) => handleKey(e, () => openNewTab(socials.linkedin))}>
              <LinkedinOutlined />
            </button>

            <button className="instagram"
              onClick={() => openNewTab(socials.instagram)}
              onKeyDown={(e) => handleKey(e, () => openNewTab(socials.instagram))}>
              <InstagramOutlined />
            </button>

            <button className="whatsapp"
              onClick={() => openNewTab(`https://wa.me/${socials.phone}`)}
              onKeyDown={(e) => handleKey(e, () => openNewTab(`https://wa.me/${socials.phone}`))}>
              <WhatsAppOutlined />
            </button>
          </div>
        </div>
      </div>

      <Toast message={toastMessage} isVisible={isToastVisible} />
    </>
  );
};

export default DeveloperProfile;
