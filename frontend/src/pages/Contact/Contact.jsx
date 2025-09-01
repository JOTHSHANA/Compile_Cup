import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import emailjs from "emailjs-com";
import { gsap } from "gsap";
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
    if (allValues.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(allValues.email)) completed++;
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
    ease: "power1.inOut"
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
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="contact-page-container">
        <div className="left-contact">
          <div className="contact-image">
            <img src={contact} alt="Contact" className="contact-img-element" />
          </div>
          <div className="contact-info">
            <div className="con-info-container">
              <MarkAsUnreadIcon sx={{ padding: "10px", backgroundColor: "white", fontSize: "40px", color: "black", borderRadius: "5px" }} />
              compilecup@gmail.com
            </div>
            <div className="con-info-container">
              <PhoneInTalkIcon sx={{ padding: "10px", backgroundColor: "white", fontSize: "40px", color: "black", borderRadius: "5px" }} />
              +91 8281352999
            </div>
            <div className="con-info-container">
              <LinkedInIcon sx={{ padding: "10px", backgroundColor: "white", fontSize: "40px", color: "black", borderRadius: "5px" }} />
              Compile Cup
            </div>
          </div>
        </div>

        <div className="right-contact-formm">
          <h1 className="contact-title">Contact Us</h1>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onValuesChange={handleFormChange}
            className="contact-form"
          >
            <div className="form-row">
              <Form.Item name="name" label="Name" className="form-item">
                <Input prefix={<UserOutlined />} size="large" placeholder="Enter your name" />
              </Form.Item>
              <Form.Item name="email" label="Email" className="form-item">
                <Input prefix={<MailOutlined />} size="large" placeholder="Enter your email" />
              </Form.Item>
            </div>
            <Form.Item name="message" label="Message">
              <TextArea rows={5} placeholder="Write your message here..." className="no-resize" />
            </Form.Item>
            <Form.Item>
              <Button
                color="cyan"
                variant="solid"
                shape="round"
                type="success"
                htmlType="submit"
                className="submit-btn"
                loading={loading}
                disabled={progress < 100}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Form.Item>
          </Form>
          <div className="arc-bg"></div>
          <div className="progress-bar-container">
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
