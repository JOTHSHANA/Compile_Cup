import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { submitAnimation } from "../../components/Button/buttonAnimation";
import { showSuccess, showError } from "../../components/toast/toast";
import "./Contact.css";

import contact from "../../assets/contact.png";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AnimatedSvg from "../../assets/con-1.svg";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const animatedSvgRef = useRef(null);
  const contactFormRef = useRef(null);
  const leftContactRef = useRef(null);
  const contactImageRef = useRef(null);
  const infoRefs = useRef([]);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftContactRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: leftContactRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      gsap.from(contactImageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: contactImageRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      gsap.from(infoRefs.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: leftContactRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      gsap.from(contactFormRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      gsap.from(formRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      gsap.from(progressRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.7,
        scrollTrigger: {
          trigger: progressRef.current,
          start: "top 85%",
          toggleActions: "restart none none reset",
        },
      });

      gsap.fromTo(
        animatedSvgRef.current,
        { rotation: -5, scale: 0.9, opacity: 0 },
        {
          rotation: 5,
          scale: 1,
          opacity: 0.5,
          duration: 1.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: contactFormRef.current,
            start: "top 70%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    handleProgress(newFormData);
  };

  const handleProgress = (values) => {
    let completed = 0;
    if (values.name.trim() !== "") completed++;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) completed++;
    if (values.message.trim() !== "") completed++;
    setProgress((completed / 3) * 100);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) return showError("Please enter your name!");
    if (!formData.email.trim()) return showError("Please enter your email!");
    if (!emailRegex.test(formData.email)) return showError("Please enter a valid email!");
    if (!formData.message.trim()) return showError("Please enter your message!");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          showSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setProgress(0);
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          showError("Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-container">
        <div ref={leftContactRef} className="left-contact">
          <div className="contact-image" ref={contactImageRef}>
            <img src={contact} alt="Contact" className="contact-img-element" />
          </div>

          <div className="contact-info">
            {[
              { Icon: MarkAsUnreadIcon, text: "compilecup@gmail.com" },
              { Icon: PhoneInTalkIcon, text: "+91 8281352999" },
              { Icon: LinkedInIcon, text: "Compile Cup" },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (infoRefs.current[i] = el)}
                className="con-info-container"
              >
                <item.Icon
                  sx={{
                    padding: "10px",
                    backgroundColor: "white",
                    fontSize: "40px",
                    color: "black",
                    borderRadius: "5px",
                  }}
                />
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div ref={contactFormRef} className="right-contact-formm">
          <img
            ref={animatedSvgRef}
            src={AnimatedSvg}
            alt="Animated Decoration"
            className="animated-contact-svg"
          />

          <h1 ref={titleRef} className="contact-title">
            Contact Us
          </h1>

          <form ref={formRef} className="native-contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="textarea-field"
            />

            <button
              type="submit"
              className="submit-btn"
              disabled={progress < 100 || loading}
              onClick={submitAnimation}
            >
              <span className="text">{loading ? "Sending..." : "Send"}</span>
              <span className="icon">
                <svg viewBox="0 0 512.005 512.005">
                  <path d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z" />
                </svg>
              </span>
            </button>
          </form>

          <div className="arc-bg"></div>
          <div ref={progressRef} className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
