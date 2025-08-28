import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select, Button, Spin, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import { supabase } from '../../lib/supabaseClient';
import ReviewsList from './ReviewsList';
import { showError, showSuccess } from '../../components/toast/toast';
import projectsData from '../../shared/projects.json';
import './Reviews.css';

const { TextArea } = Input;

const Reviews = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { error: supabaseError } = await supabase.from("reviews").insert([
        {
          name: values.name,
          project_name: values.project,
          description: values.review,
        },
      ]);

      if (supabaseError) {
        console.error("Supabase insert error:", supabaseError);
        showError("Error submitting review!");
        setLoading(false);
        return;
      }

      const templateParams = {
        name: values.name,
        message: `Project: ${values.project}\n\nReview: ${values.review}`,
      };

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } catch (emailError) {
        console.error("EmailJS error:", emailError);
        showError("Review saved but email failed!");
      }

      showSuccess("Review submitted successfully!");
      form.resetFields();
      setIsModalOpen(false); 
    } catch (err) {
      console.error("Unexpected error:", err);
      showError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h1 className="reviews-title">Reviews</h1>
        <Button 
          type="" 
          icon={<PlusCircleOutlined />} 
          onClick={() => setIsModalOpen(true)}
          className="add-review-button"
        >
          Add Review
        </Button>
      </div>

      <ReviewsList />
      
      <Modal
        title="Submit a Review"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>,
          <Button 
            key="submit" 
            type="primary" 
            loading={loading} 
            onClick={() => form.submit()}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="reviewForm"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Project"
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
            label="Review"
            name="review"
            rules={[{ required: true, message: 'Please enter your review!' }]}
          >
            <TextArea rows={4} placeholder="Write your review..." />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Reviews;