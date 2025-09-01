import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { showError } from "../../components/toast/toast";
import { Modal, Rate } from "antd";
import './ReviewList.css';

// A simple star icon to use in the card
const StarIcon = () => (
  <svg className="testimonial-card__icon" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
  </svg>
);

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
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
      setReviews(data || []);
    }
  };

  const handleCardClick = (review) => {
    setSelectedReview(review);
    setModalOpen(true);
  };

  return (
    <div className="testimonial-page-container">
      <div className="testimonial-grid">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card" onClick={() => handleCardClick(review)}>
            <div className="testimonial-card__top">
              <div className="testimonial-card__border"></div>
              <div className="testimonial-card__icons">
                <div className="testimonial-card__logo">
                  <p className="testimonial-card__logo-text">CC</p>
                </div>
                <div className="testimonial-card__social">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </div>
            <div className="testimonial-card__bottom">
              <span className="testimonial-card__title">{review.project_name}</span>
              <p className="testimonial-card__description line-clamp">{review.description}</p>
              <div className="testimonial-card__row">
                <div className="testimonial-card__item">
                  <span className="testimonial-card__big-text">{review.name}</span>
                  <span className="testimonial-card__regular-text">Client</span>
                </div>
                <div className="testimonial-card__item">
                  <span className="testimonial-card__big-text">
                    <Rate disabled defaultValue={5} style={{ fontSize: 12 }} />
                  </span>
                  <span className="testimonial-card__regular-text">Rating</span>
                </div>
                <div className="testimonial-card__item">
                  <span className="testimonial-card__big-text">
                    {new Date(review.created_at).toLocaleDateString()}
                  </span>
                  <span className="testimonial-card__regular-text">Date</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Modal
        title={`Review for "${selectedReview?.project_name}"`}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        centered
      >
        <h3>From: {selectedReview?.name}</h3>
        <Rate disabled defaultValue={5} style={{ marginBottom: '1rem' }}/>
        <p>{selectedReview?.description}</p>
      </Modal>
    </div>
  );
};

export default ReviewList;