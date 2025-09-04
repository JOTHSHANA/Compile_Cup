import React, { useEffect, useState, useRef } from 'react';
import { Form, Input, Select, Button, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
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

  const reviewsRef = useRef(); // 👈 reference to child

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
        return;
      }

      showSuccess("Review submitted successfully!");
      form.resetFields();
      setIsModalOpen(false);

      // 👈 refresh reviews list after submit
      reviewsRef.current?.reload();
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
          icon={<PlusCircleOutlined />} 
          onClick={() => setIsModalOpen(true)}
          className="add-review-button"
        >
          Add Review
        </Button>
      </div>

      <ReviewsList ref={reviewsRef} /> {/* 👈 pass ref */}

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
