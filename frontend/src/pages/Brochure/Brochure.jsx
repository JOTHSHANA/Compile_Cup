import React, { useEffect, useState } from 'react';

// --- SVG Icons ---
const PersonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
);
const WebhookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.25 4.75a.75.75 0 00-1.5 0v1.5a3.25 3.25 0 00-3.25-3.25h-.5a3.25 3.25 0 00-3.25 3.25v1.5a.75.75 0 00-1.5 0v1.5A.75.75 0 008 9.25h8a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75v-1.5zM12 8.25a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM4 12a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zm16 0a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z"></path></svg>
);
const PhoneAndroidIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"></path></svg>
);
const BackupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></svg>
);
const MiscellaneousServicesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 7h-3.03l-1.4-1.87c-.2-.27-.5-.43-.84-.43H9.27c-.34 0-.64.16-.84.43L7.03 7H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM12 18c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path><circle cx="12" cy="13" r="3"></circle></svg>
);
const StrategyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v4l2 2m-6 3h8"></path></svg>
);
const DesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9m-9-4h9m-9-4h9M5 20V4l7 8-7 8z"></path></svg>
);
const DevelopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const VerifiedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>
);
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
);
const CallIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
);
const LocationOnIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
);


const Brochure = () => {
  const [libsLoaded, setLibsLoaded] = useState(false);

  useEffect(() => {
    const loadScript = (src, id) => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', 'html2canvas-lib'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', 'jspdf-lib')
    ]).then(() => {
      setLibsLoaded(true);
    }).catch(error => console.error(error));

  }, []);

  const handleDownloadPdf = () => {
    if (!libsLoaded) {
      console.error("Libraries not loaded yet!");
      return;
    }

    const { jsPDF } = window.jspdf;
    const html2canvas = window.html2canvas;
    const input = document.querySelector('.brochure-content');
    const button = document.querySelector('.download-button');
    if (button) button.style.display = 'none';

    html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      onclone: (document) => {
        const clonedButton = document.querySelector('.download-button');
        if (clonedButton) clonedButton.style.display = 'none';
      }
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 1080;
        const pageHeight = (canvas.height * imgWidth) / canvas.width;
        const pdf = new jsPDF({ orientation: 'p', unit: 'px', format: [imgWidth, pageHeight] });
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, pageHeight);
        pdf.save('brochure-compile-cup.pdf');
        if (button) button.style.display = 'block';
      })
      .catch((err) => {
        console.error('Error generating PDF:', err);
        if (button) button.style.display = 'block';
      });
  };

  return (
    <>
      <div className="brochure-page-container">
        <div className="brochure-main-heading">COMPILE CUP</div>

        <div className="brochure-content">
          {/* Card 1: Who We Are */}
          <div className="brochure-blocks b1">
            <div className="intro_img">
              <img className="brochure-image1" 
                src="https://placehold.co/600x400/1E1E1E/38BDF8?text=Hello\nWorld" 
                alt="Abstract digital art" 
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1E1E1E/FFFFFF?text=Image+Not+Found'; }}
              />
            </div>
            <div className="company-name">Innovate. Create. Deploy.</div>
            <div className="content-padding">
              <div className="zoom-section">
                <div className="brochure_headings">About Us</div>
                <p className="brochure_paragraphs">
                  We are a dynamic duo of final-year Computer Science students,
                  combining cutting-edge academic knowledge with two years of real-world
                  freelancing experience. We're passionate about building technology that solves
                  problems and drives growth through elegant, efficient code.
                </p>
              </div>
              <div className="zoom-section">
                <div className="brochure_headings">Developers</div>
                <div className="dev-profile-flex">
                  <div className="icon-wrapper"><PersonIcon /></div>
                  <div className="dev-info">JOTHSHANA S M<div>Full Stack Developer</div></div>
                </div>
                <div className="dev-profile-flex">
                  <div className="icon-wrapper"><PersonIcon /></div>
                  <div className="dev-info">PRIYADARSHAN B<div>Full Stack Developer</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: What We Do & How We Do It */}
          <div className="brochure-blocks b2">
              <div className="content-padding">
                <div className="brochure_headings">Our Services</div>
                <div className="zoom-section">
                    <div className="brochure-services">
                        <div className="icon-wrapper"><WebhookIcon/></div>
                        <div className="service-info"><div>Web Applications</div><div className="brochure_paragraphs">Modern, responsive, and feature-rich web applications tailored to your business needs.</div></div>
                    </div>
                </div>
                <div className="zoom-section">
                    <div className="brochure-services">
                        <div className="icon-wrapper"><PhoneAndroidIcon/></div>
                        <div className="service-info"><div>Mobile Applications</div><div className="brochure_paragraphs">Cross-platform mobile apps for iOS and Android with a focus on performance and user experience.</div></div>
                    </div>
                </div>
                <div className="zoom-section">
                    <div className="brochure-services">
                        <div className="icon-wrapper"><BackupIcon/></div>
                        <div className="service-info"><div>Deployment & DevOps</div><div className="brochure_paragraphs">Efficient and scalable deployment pipelines to get your application to market quickly and reliably.</div></div>
                    </div>
                </div>
                <div className="zoom-section">
                    <div className="brochure-services">
                        <div className="icon-wrapper"><MiscellaneousServicesIcon/></div>
                        <div className="service-info"><div>Lifetime Service & Support</div><div className="brochure_paragraphs">We provide continuous support and maintenance to ensure your application remains up-to-date and secure.</div></div>
                    </div>
                </div>

                <div className="brochure_headings" style={{marginTop: '2rem'}}>Our Proven Process</div>
                 <div className="zoom-section">
                  <div className="process-step">
                    <div className="icon-wrapper"><StrategyIcon/></div>
                    <div className="process-info"><div>1. Discovery & Strategy</div><p className="brochure_paragraphs">We start by understanding your vision and goals to build a comprehensive project roadmap.</p></div>
                  </div>
                </div>
                <div className="zoom-section">
                  <div className="process-step">
                    <div className="icon-wrapper"><DesignIcon/></div>
                    <div className="process-info"><div>2. UI/UX Design</div><p className="brochure_paragraphs">Crafting intuitive and beautiful interfaces that provide an engaging user experience.</p></div>
                  </div>
                </div>
                <div className="zoom-section">
                  <div className="process-step">
                    <div className="icon-wrapper"><DevelopIcon/></div>
                    <div className="process-info"><div>3. Development & Testing</div><p className="brochure_paragraphs">We build your application with clean, scalable code and conduct rigorous testing.</p></div>
                  </div>
                </div>
              </div>
          </div>

          {/* Card 3: Why Us & Contact */}
          <div className="brochure-blocks b3">
            <div className="content-padding">
                <div className="brochure_headings">Why Choose Us?</div>
                <div className="zoom-section">
                    <div className="brochure-services">
                        <div className="icon-wrapper"><VerifiedIcon/></div>
                        <div className="service-info"><div>Agile & Transparent</div><div className="brochure_paragraphs">We believe in clear communication and an iterative process. You're involved at every step, ensuring the final product perfectly matches your vision.</div></div>
                    </div>
                </div>
                <div className="zoom-section">
                    <div className="brochure-services">
                        <div className="icon-wrapper"><VerifiedIcon/></div>
                        <div className="service-info"><div>Modern Tech Stack</div><div className="brochure_paragraphs">Leveraging the latest, most reliable technologies to build solutions that are not only powerful today but also scalable for tomorrow.</div></div>
                    </div>
                </div>
                 <div className="zoom-section">
                    <div className="brochure-services">
                        <div className="icon-wrapper"><VerifiedIcon/></div>
                        <div className="service-info"><div>Cost-Effective Solutions</div><div className="brochure_paragraphs">As a lean team, we offer agency-level quality and dedication without the hefty price tag, providing maximum value for your investment.</div></div>
                    </div>
                </div>
                
                <div className="brochure_headings" style={{marginTop: '2rem'}}>Let's Build Together</div>
                <p className="brochure_paragraphs" style={{textAlign: 'left', marginBottom: '1.5rem'}}>Have an idea? Reach out to us. We're excited to learn about your project and discuss how we can help you succeed.</p>
                <div className="contact-details">
                    <div className="contact-item">
                        <div className="icon-wrapper"><EmailIcon/></div>
                        <a href="mailto:contact@compilecup.dev" className="contact-text">contact@compilecup.dev</a>
                    </div>
                    <div className="contact-item">
                        <div className="icon-wrapper"><CallIcon/></div>
                        <span className="contact-text">+91 12345 67890</span>
                    </div>
                    <div className="contact-item">
                        <div className="icon-wrapper"><LocationOnIcon/></div>
                        <span className="contact-text">Bengaluru, Karnataka, India</span>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <button onClick={handleDownloadPdf} className="download-button" disabled={!libsLoaded}>
          {libsLoaded ? 'Download PDF' : 'Loading...'}
        </button>
      </div>
    </>
  );
};

export default Brochure;