import React from 'react';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import './Brochure.css';

import brochureImage from '../../assets/brochure_img1.png'; // Example image import
import brochureImage2 from '../../assets/brochure_img2.png'; // Example image import

import PersonIcon from '@mui/icons-material/Person';
import WebhookIcon from '@mui/icons-material/Webhook';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BackupIcon from '@mui/icons-material/Backup';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const Brochure = () => {
  const handleDownloadPdf = () => {
    const input = document.querySelector('.brochure-content');

    html2canvas(input, {
      scale: 2,
      ignoreElements: (element) => element.classList.contains('pdf-ignore-button'),
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        const pdf = new jsPDF({
          orientation: imgWidth > imgHeight ? 'l' : 'p',
          unit: 'px',
          format: [imgWidth, imgHeight],
        });

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('brochure.pdf');
      })
      .catch((err) => {
        console.error('Error generating PDF:', err);
      });
  };

  return (
    <div className="brochure-page-container">
      <div className="brochure_heading">BROCHURE</div>

      {/* The main content area that will be captured */}
      <div className="brochure-content">
        <div className="brochure-blocks b1">
          <div className="intro_img">
            <img className="brochure-image1" src={brochureImage} alt="" />
          </div>
          <div className="company-name">COMPILE CUP</div>
          <hr />

          {/* About Us */}
          <div className="abt-us-container zoom-section">
            <div className="brochure_headings">About Us</div>
            <p className="brochure_paragraphs">
              We are a dynamic duo of final-year Computer Science Engineering students,
              combining cutting-edge academic knowledge with two years of real-world
              freelancing experience. We're passionate about building technology that solves
              problems and drives growth.
            </p>
          </div>

          {/* Developers */}
          <div className="devs zoom-section">
            <div className="brochure_headings">Developers</div>
            <div className="brochure_paragraphs">
              <div className="dev-profile-flex">
                <div className="brochure-icon-div">
                  <PersonIcon
                    sx={{
                      backgroundColor: '#c54e52',
                      padding: '5px',
                      fontSize: '40px',
                      borderRadius: '5px',
                    }}
                  />
                </div>
                <div>
                  JOTHSHANA S M
                  <div>Full Stack Developer</div>
                </div>
              </div>
              <div className="dev-profile-flex">
                <div className="brochure-icon-div">
                  <PersonIcon
                    sx={{
                      backgroundColor: '#c54e52',
                      padding: '5px',
                      fontSize: '40px',
                      borderRadius: '5px',
                    }}
                  />
                </div>
                <div>
                  PRIYADARSHAN B
                  <div>Full Stack Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="brochure-blocks b2">
          <div className="peach-ribbon zoom-section">
            <div className="brochure_headings">Our Services</div>

            <div className="brochure-services">
              <div>
                <WebhookIcon sx={{ fontSize: '40px' }} className="brochure-icon" />
              </div>
              <div>
                <div>Web Applications</div>
                <div className="brochure_paragraphs sp">
                  Modern, responsive, and feature-rich web applications tailored to your
                  business needs.
                </div>
              </div>
            </div>

            <div className="brochure-services">
              <div>
                <PhoneAndroidIcon sx={{ fontSize: '40px' }} className="brochure-icon" />
              </div>
              <div>
                <div>Mobile Applications</div>
                <div className="brochure_paragraphs sp">
                  Cross-platform mobile apps for iOS and Android with a focus on performance
                  and user experience.
                </div>
              </div>
            </div>

            <div className="brochure-services">
              <div>
                <BackupIcon sx={{ fontSize: '40px' }} className="brochure-icon" />
              </div>
              <div>
                <div>Deployment & DevOps</div>
                <div className="brochure_paragraphs sp">
                  Efficient and scalable deployment pipelines to get your application to
                  market quickly and reliably.
                </div>
              </div>
            </div>

            <div className="brochure-services">
              <div>
                <MiscellaneousServicesIcon
                  sx={{ fontSize: '40px' }}
                  className="brochure-icon"
                />
              </div>
              <div>
                <div>Lifetime Service & Support</div>
                <div className="brochure_paragraphs sp">
                  We provide continuous support and maintenance to ensure your application
                  remains up-to-date and secure.
                </div>
              </div>
            </div>
          </div>
          <img className="brochure-image2" src={brochureImage2} alt="" />
        </div>

        {/* Third block */}
        <div className="brochure-blocks b3">
          And this is the third. All of this will be in the downloaded PDF.
        </div>

        {/* --- BUTTON MOVED INSIDE --- */}
        <button onClick={handleDownloadPdf} className="download-button pdf-ignore-button">
          Download
        </button>
      </div>
    </div>
  );
};

export default Brochure;
