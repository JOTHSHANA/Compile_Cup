import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select, Button, Spin } from 'antd';
import emailjs from 'emailjs-com';
import { supabase } from '../../lib/supabaseClient';
import ReviewsList from './ReviewsList';
import { showError, showSuccess } from '../../components/toast/toast';
import projectsData from '../../shared/projects.json';
import './Reviews.css';

const { TextArea } = Input;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setProjects(projectsData);
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error);
      showError("Failed to load reviews!");
    } else {
      setReviews(data);
    }
  };

  const onFinish = async (values) => {
    setLoading(true); // start loader
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
      form.resetFields(); // clear form after submit
      fetchReviews();

    } catch (err) {
      console.error("Unexpected error:", err);
      showError("Something went wrong!");
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">Reviews</h1>
      <Link to="/" className="reviews-link">
        Back to Home
      </Link>

      <Form
        form={form}
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
          <Button type="primary" htmlType="submit" block loading={loading}>
            {loading ? "Submitting..." : "Submit Review"}
          </Button>
        </Form.Item>
      </Form>

      <ReviewsList />
    </div >
  );
};

export default Reviews;
