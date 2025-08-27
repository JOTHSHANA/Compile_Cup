import './DeveloperProfile.css';
import {
  PhoneOutlined,
  MailOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const DeveloperProfile = ({ developer }) => {
  const { name, image, position, socials } = developer;

  const openNewTab = (url) => {
    try {
      const w = window.open(url, '_blank', 'noopener,noreferrer');
      if (w) w.opener = null;
    } catch (e) {
      console.error('Failed to open:', e);
    }
  };

  const handleEmailClick = () => {
    openNewTab(`mailto:${socials.email}`);
  };

  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      alert(`Phone number ${text} copied to clipboard`);
    } catch {
      alert('Failed to copy phone number.');
    }
  };

  const handleKey = (e, fn) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fn();
    }
  };

  return (
    <div className={`developer-card ${position}`}>
      <div className="image-container">
        <img src={image} alt={name} className="developer-image" />
      </div>

      <div className="developer-info">
        <h2 className="developer-name">{name}</h2>

        <div className="social-links">
          <menu className="menu-items">
            <a
              role="button"
              aria-label="Email"
              tabIndex={0}
              onClick={handleEmailClick}
              onKeyDown={(e) => handleKey(e, handleEmailClick)}
            >
              <li style={{ cursor: 'pointer' }}>
                <MailOutlined />
              </li>
            </a>

            <a
              role="button"
              aria-label="Phone"
              tabIndex={0}
              onClick={() => copyToClipboard(socials.phone)}
              onKeyDown={(e) => handleKey(e, () => copyToClipboard(socials.phone))}
            >
              <li style={{ cursor: 'pointer' }}>
                <PhoneOutlined />
              </li>
            </a>

            <a
              role="button"
              aria-label="LinkedIn"
              tabIndex={0}
              onClick={() => openNewTab(socials.linkedin)}
              onKeyDown={(e) => handleKey(e, () => openNewTab(socials.linkedin))}
            >
              <li style={{ cursor: 'pointer' }}>
                <LinkedinOutlined />
              </li>
            </a>

            <a
              role="button"
              aria-label="Instagram"
              tabIndex={0}
              onClick={() => openNewTab(socials.instagram)}
              onKeyDown={(e) => handleKey(e, () => openNewTab(socials.instagram))}
            >
              <li style={{ cursor: 'pointer' }}>
                <InstagramOutlined />
              </li> 
            </a>
          </menu>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
