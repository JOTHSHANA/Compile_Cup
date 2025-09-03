import React from 'react';
import './About.css';
import HotelClassIcon from '@mui/icons-material/HotelClass';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-title" data-aos="fade-down" data-aos-duration="1000">
        ABOUT US
      </div>
      <h1 className="background-title">ABOUT US</h1>

      <div className="about-container">
        {/* Card 1 */}
        <div className="parent">
          <div className="card">
            <div className="logo">
              <span className="circle circle1"></span>
              <span className="circle circle2"></span>
              <span className="circle circle3"></span>
              <span className="circle circle4"></span>
              <span className="circle circle5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                  <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"></path>
                  <path d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
                  <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
                </svg>
              </span>
            </div>
            <div className="glass"></div>
            <div className="content">
              <span className="title">Who We Are?</span>
              <span className="text">
                We are a dynamic duo of final-year Computer Science Engineering students, combining cutting-edge academic knowledge with two years of real-world freelancing experience. We're passionate about building technology that solves problems and drives growth.
              </span>
            </div>
            <div className="bottom">
              <div className="social-buttons-container">
                <button className="social-button social-button1"><span className="social-letter"><HotelClassIcon /></span></button>
                <button className="social-button social-button2"><span className="social-letter"><HotelClassIcon /></span></button>
                <button className="social-button social-button3"><span className="social-letter"><HotelClassIcon /></span></button>
              </div>
              <div className="view-more">
                <button className="view-more-button">View more</button>
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="parent">
          <div className="card">
            <div className="logo">
              <span className="circle circle1"></span>
              <span className="circle circle2"></span>
              <span className="circle circle3"></span>
              <span className="circle circle4"></span>
              <span className="circle circle5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                  <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"></path>
                  <path d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
                  <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
                </svg>
              </span>
            </div>
            <div className="glass"></div>
            <div className="content">
              <span className="title">What We Do?</span>
              <span className="text">
                We specialize in turning ideas into reality. Our core services include building custom web and mobile applications, handling seamless cloud deployment, and implementing efficient DevOps practices to ensure your project runs smoothly.
              </span>
            </div>
            <div className="bottom">
              <div className="social-buttons-container">
                <button className="social-button social-button1"><span className="social-letter"><HotelClassIcon /></span></button>
                <button className="social-button social-button2"><span className="social-letter"><HotelClassIcon /></span></button>
                <button className="social-button social-button3"><span className="social-letter"><HotelClassIcon /></span></button>
              </div>
              <div className="view-more">
                <button className="view-more-button">View more</button>
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="parent">
          <div className="card">
            <div className="logo">
              <span className="circle circle1"></span>
              <span className="circle circle2"></span>
              <span className="circle circle3"></span>
              <span className="circle circle4"></span>
              <span className="circle circle5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                  <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"></path>
                  <path d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
                  <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
                </svg>
              </span>
            </div>
            <div className="glass"></div>
            <div className="content">
              <span className="title">Why Choose Us?</span>
              <span className="text">
                Our partnership doesn't end at launch. We stand out by offering lifetime service and support for every project we build. This means we're committed to ensuring your application remains secure, updated, and effective for the long haul.
              </span>
            </div>
            <div className="bottom">
              <div className="social-buttons-container">
                <button className="social-button social-button1"><span className="social-letter"><HotelClassIcon /></span></button>
                <button className="social-button social-button2"><span className="social-letter"><HotelClassIcon /></span></button>
                <button className="social-button social-button3"><span className="social-letter"><HotelClassIcon /></span></button>
              </div>
              <div className="view-more">
                <button className="view-more-button">View more</button>
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
