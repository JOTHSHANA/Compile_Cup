import React from "react";
import "./pdf.css";
import priyan from "../../assets/priyan.jpg";
import jo from "../../assets/jo1.jpg";
import brochure from "../../assets/brochure_img2.png";
const BrochurePdf = () => {
  return (
    <div className="brochure-page-container">
      <div className="brochure-main-heading">COMPILE CUP</div>

      <div className="brochure-content">
        <div className="brochure-blocks b1">
          <div className="intro_img">
            <img
              className="brochure-image1"
              src={brochure}
              alt="Abstract digital art"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/600x400/1E1E1E/FFFFFF?text=Image+Not+Found";
              }}
            />
          </div>
          <div className="company-name">Innovate. Create. Deploy.</div>
          <div className="content-padding">
            <div className="zoom-section">
              <div className="brochure_headings">About Us</div>
              <p className="brochure_paragraphs">
                We are a dynamic duo of final-year Computer Science students,
                combining cutting-edge academic knowledge with two years of
                freelancing experience. We're passionate about building
                technology that solves problems and drives growth through
                elegant, efficient code.
              </p>
            </div>
            <div className="zoom-section">
              <div className="brochure_headings">Developers</div>

              {/* Dev 1 */}
              <div className="dev-profile-container">
                <div className="dev-profile-flex">
                  <img
                    src={jo}
                    alt="Jothshana S M"
                    className="dev-image"
                  />
                  <div className="dev-info">
                    JOTHSHANA S M
                    <div>Full Stack Developer</div>
                  </div>
                </div>
              </div>

              {/* Dev 2 */}
              <div className="dev-profile-container">
                <div className="dev-profile-flex">
                  <img
                    src={priyan}
                    alt="Priyadarshan B"
                    className="dev-image"
                  />
                  <div className="dev-info">
                    PRIYADARSHAN B
                    <div>Full Stack Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="brochure-blocks b2">
          <div className="content-padding">
            <div className="brochure_headings">Our Services</div>

            <div className="zoom-section brochure-services">
              <div className="icon-wrapper">🌐</div>
              <div className="service-info">
                <div>Web Applications</div>
                <div className="brochure_paragraphs">
                  Modern, responsive, and feature-rich web applications tailored
                  to your business needs.
                </div>
              </div>
            </div>

            <div className="zoom-section brochure-services">
              <div className="icon-wrapper">📱</div>
              <div className="service-info">
                <div>Mobile Applications</div>
                <div className="brochure_paragraphs">
                  Cross-platform mobile apps for iOS and Android with a focus on
                  performance and user experience.
                </div>
              </div>
            </div>

            <div className="zoom-section brochure-services">
              <div className="icon-wrapper">☁️</div>
              <div className="service-info">
                <div>Deployment & DevOps</div>
                <div className="brochure_paragraphs">
                  Efficient and scalable deployment pipelines to get your
                  application to market quickly and reliably.
                </div>
              </div>
            </div>

            <div className="zoom-section brochure-services">
              <div className="icon-wrapper">⚙️</div>
              <div className="service-info">
                <div>Lifetime Service & Support</div>
                <div className="brochure_paragraphs">
                  We provide continuous support and maintenance to ensure your
                  application remains secure.
                </div>
              </div>
            </div>

            <div className="brochure_headings" style={{ marginTop: "2rem" }}>
              Our Proven Process
            </div>

            <div className="zoom-section process-step">
              <div className="icon-wrapper">🧭</div>
              <div className="process-info">
                <div>1. Discovery & Strategy</div>
                <p className="brochure_paragraphs">
                  We start by understanding your vision and goals to build a
                  comprehensive project roadmap.
                </p>
              </div>
            </div>

            <div className="zoom-section process-step">
              <div className="icon-wrapper">🎨</div>
              <div className="process-info">
                <div>2. UI/UX Design</div>
                <p className="brochure_paragraphs">
                  Crafting intuitive and beautiful interfaces that provide an
                  engaging user experience.
                </p>
              </div>
            </div>

            <div className="zoom-section process-step">
              <div className="icon-wrapper">💻</div>
              <div className="process-info">
                <div>3. Development & Testing</div>
                <p className="brochure_paragraphs">
                  We build your application with clean, scalable code and
                  conduct rigorous testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 3 */}
      <div className="brochure-blocks b3">
        <div className="content-padding">
          <div className="brochure_headings">Why Choose Us?</div>

          <div className="zoom-section brochure-services">
            <div className="icon-wrapper">✅</div>
            <div className="service-info">
              <div>Agile & Transparent</div>
              <div className="brochure_paragraphs">
                We believe in clear communication and an iterative process with
                your involvement at every step.
              </div>
            </div>
          </div>

          <div className="zoom-section brochure-services">
            <div className="icon-wrapper">✅</div>
            <div className="service-info">
              <div>Modern Tech Stack</div>
              <div className="brochure_paragraphs">
                Leveraging the latest technologies to build scalable solutions.
              </div>
            </div>
          </div>

          <div className="zoom-section brochure-services">
            <div className="icon-wrapper">✅</div>
            <div className="service-info">
              <div>Cost-Effective Solutions</div>
              <div className="brochure_paragraphs">
                We deliver agency-level quality without the hefty price tag.
              </div>
            </div>
          </div>

          <div className="brochure_headings" style={{ marginTop: "2rem" }}>
            Let's Build Together
          </div>
          <p className="brochure_paragraphs">
            Have an idea? Reach out to us. We're excited to learn about your
            project and discuss how we can help you succeed.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-wrapper">📧</div>
              <a
                href="mailto:compilecup@gmail.com"
                className="contact-text"
              >
                compilecup@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper">📞</div>
              <span className="contact-text">+91 9789762908</span>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper">📍</div>
              <span className="contact-text">Erode, TamilNadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochurePdf;
