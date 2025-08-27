import React from "react";
import { Form, Input, Button, message as AntMessage } from "antd";
import emailjs from "emailjs-com";
import "./Contact.css";

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
    <div className="contact-container">
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
          rules={[{  message: "Please enter your name!" }]}
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
          rules={[{  message: "Please enter your message!" }]}
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
  );
};

export default Contact;
