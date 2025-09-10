import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import emailjs from "emailjs-com";
import { gsap } from "gsap";
import { submitAnimation } from "../../components/Button/buttonAnimation";
import { showSuccess, showError } from "../../components/toast/toast";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import "./Contact.css";
import contact from "../../assets/contact.png";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleFormChange = (_, allValues) => {
    let completed = 0;

    if (allValues.name && allValues.name.trim() !== "") completed++;
    if (allValues.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(allValues.email))
      completed++;
    if (allValues.message && allValues.message.trim() !== "") completed++;

    setProgress((completed / 3) * 100);
  };

  useEffect(() => {
    gsap.to(".arc-bg", {
      y: 20,
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power1.inOut",
    });
  }, []);

  const validateForm = (values) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name || values.name.trim() === "") {
      showError("Please enter your name!");
      return false;
    }
    if (!values.email || values.email.trim() === "") {
      showError("Please enter your email!");
      return false;
    }
    if (!emailRegex.test(values.email)) {
      showError("Please enter a valid email!");
      return false;
    }
    if (!values.message || values.message.trim() === "") {
      showError("Please enter your message!");
      return false;
    }
    return true;
  };

  const onFinish = (values) => {
    if (!validateForm(values)) return;
    setLoading(true);

    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
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
          form.resetFields();
          setLoading(false);
          setProgress(0);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          showError("Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
   <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <div className="contact-page-container">
    <div className="left-contact" data-aos="fade-up" data-aos-duration="1000">
      <div className="contact-image" data-aos="zoom-in" data-aos-delay="200">
        <img src={contact} alt="Contact" className="contact-img-element" />
      </div>

      <div className="contact-info">
        <div
          className="con-info-container"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <MarkAsUnreadIcon
            sx={{
              padding: "10px",
              backgroundColor: "white",
              fontSize: "40px",
              color: "black",
              borderRadius: "5px",
            }}
          />
          compilecup@gmail.com
        </div>

        <div
          className="con-info-container"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <PhoneInTalkIcon
            sx={{
              padding: "10px",
              backgroundColor: "white",
              fontSize: "40px",
              color: "black",
              borderRadius: "5px",
            }}
          />
          +91 8281352999
        </div>

        <div
          className="con-info-container"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <LinkedInIcon
            sx={{
              padding: "10px",
              backgroundColor: "white",
              fontSize: "40px",
              color: "black",
              borderRadius: "5px",
            }}
          />
          Compile Cup
        </div>
      </div>
    </div>

    <div className="right-contact-formm" data-aos="fade-down" data-aos-duration="1000">
      <h1 className="contact-title" data-aos="fade-down">
        Contact Us
      </h1>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onValuesChange={handleFormChange}
        className="contact-form"
        data-aos="zoom-in-up"
        data-aos-delay="300"
      >
        <div className="form-row">
          <Form.Item name="name" label="Name" className="form-item">
            <Input
              prefix={<UserOutlined />}
              size="large"
              placeholder="Enter your name"
            />
          </Form.Item>
          <Form.Item name="email" label="Email" className="form-item">
            <Input
              prefix={<MailOutlined />}
              size="large"
              placeholder="Enter your email"
            />
          </Form.Item>
        </div>

        <Form.Item name="message" label="Message">
          <TextArea
            rows={5}
            placeholder="Write your message here..."
            className="no-resize"
          />
        </Form.Item>

        <Form.Item>
          <Button
            color="cyan"
            variant="solid"
            type="success"
            htmlType="submit"
            className="submit-btn"
            loading={loading}
            onClick={submitAnimation}
            disabled={progress < 100}
          >
            <span className="text">
              {loading ? "Sending..." : "Send"}
            </span>
            <span className="icon">
              <svg viewBox="0 0 512.005 512.005">
                <path d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z" />
              </svg>
            </span>
          </Button>
        </Form.Item>
      </Form>

      <div className="arc-bg" data-aos="fade-in" data-aos-delay="600"></div>
      <div
        className="progress-bar-container"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Contact;
