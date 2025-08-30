import React from "react";
import { Form, Input, Button, message as AntMessage } from "antd";
import emailjs from "emailjs-com";
import "./Contact.css";
import contact from "../../assets/contact.png";
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
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
          AntMessage.success("Message sent successfully!");
          form.resetFields();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          AntMessage.error("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="contact-page-container">
        <div className="left-contact">
          <div className="contact-image">
            <img src={contact} alt="Contact" className="contact-img-element"/>
          </div>
          <div className="contact-info">
            <div className="con-info-container"><MarkAsUnreadIcon sx={{padding:"10px", backgroundColor:"white", fontSize:"40px", color:"black", borderRadius:"5px"}}/>compilecup@gmail.com</div>
            <div className="con-info-container"><PhoneInTalkIcon sx={{padding:"10px", backgroundColor:"white", fontSize:"40px", color:"black", borderRadius:"5px"}}/>+91 8281352999</div>
            <div className="con-info-container"><LinkedInIcon sx={{padding:"10px", backgroundColor:"white", fontSize:"40px", color:"black", borderRadius:"5px"}}/> Compile Cup</div>
          </div>
        </div>
        <div className="right-contact-formm">
          <h1 className="contact-title">Contact Us</h1>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="contact-form"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ message: "Please enter your name!" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ message: "Please enter your message!" }]}
            >
              <TextArea
                rows={5}
                placeholder="Write your purpose and message here..."
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="submit-btn">
                Send Message
              </Button>
            </Form.Item>
          </Form>

        </div>
      </div>
    </div>

  );
};

export default Contact;
