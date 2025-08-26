import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select, Button, message } from 'antd';
import emailjs from 'emailjs-com';

import projectsData from '../shared/projects.json';
import './Reviews.css'; 

const { TextArea } = Input;

const Reviews = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const onFinish = (values) => {
    const templateParams = {
    name: values.name,   
    message: `Project: ${values.project}\n\nReview: ${values.review}`, 
  };


    emailjs
       .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        message.success("Review submitted successfully!");
      })
      .catch((error) => {
        console.error(error);
        message.error("Failed to send review. Please try again.");
      });
  };

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">Reviews</h1>
      <Link to="/" className="reviews-link">
        Back to Home
      </Link>

      <Form
        name="reviewForm"
        layout="vertical"
        onFinish={onFinish}
        className="reviews-form"
      >
        <Form.Item
          label={<span style={{ color: 'white' }}>Name</span>}
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label={<span style={{ color: 'white' }}>Project</span>}
          name="project"
          rules={[{ required: true, message: 'Please select a project!' }]}
        >
          <Select placeholder="Select a project">
            {projects.map((proj) => (
              <Select.Option key={proj.id} value={proj.name}>
                {proj.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label={<span style={{ color: 'white' }}>Review</span>}
          name="review"
          rules={[{ required: true, message: 'Please enter your review!' }]}
        >
          <TextArea rows={4} placeholder="Write your review..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit Review
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Reviews;
