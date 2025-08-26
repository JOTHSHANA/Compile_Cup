import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { showError } from "../components/toast/toast";
import "./ReviewList.css";
import { Modal } from "antd";

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
    <div className="review-marquee">
      <div className="review-track">
        {/* Duplicate reviews for seamless infinite scroll */}
        {reviews.concat(reviews).map((review, index) => (
          <div
            key={`${review.id}-${index}`}
            className="review-card"
            onClick={() => handleCardClick(review)}
          >
            <h3>{review.name}</h3>
            <h4>{review.project_name}</h4>
            <p className="line-clamp">{review.description}</p>
          </div>
        ))}
      </div>

      <Modal
        title={selectedReview?.project_name}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <h3>{selectedReview?.name}</h3>
        <p>{selectedReview?.description}</p>
      </Modal>
    </div>
  );
};

export default ReviewList;
