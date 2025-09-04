import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { supabase } from "../../lib/supabaseClient";
import { showError } from "../../components/toast/toast";
import { Modal, Skeleton } from "antd";
import "./ReviewList.css";

const ReviewList = forwardRef((props, ref) => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  // expose fetchReviews to parent
  useImperativeHandle(ref, () => ({
    reload: fetchReviews,
  }));

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleCardClick = (review) => {
    setSelectedReview(review);
    setModalOpen(true);
  };

  return (
    <div className="review-container">
      <div className="reviews-grid">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="review-card" data-aos="fade-up">
              <Skeleton active paragraph={{ rows: 3 }} title={false} />
            </div>
          ))
        ) : (
          reviews.map((review, index) => (
            <div
              key={review.id}
              className="review-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => handleCardClick(review)}
            >
              <div className="review-content-default">
                <div className="review-header">
                  <h3 className="review-project">{review.project_name}</h3>
                </div>
                <p className="review-snippet">{review.description}</p>
                <div className="review-footer">
                  <span className="review-client">{review.name}</span>
                  <span className="review-date">
                    {new Date(review.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="review-content-hover">
                <p>{review.description}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <Modal
        title={selectedReview?.project_name}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        centered
      >
        <div data-aos="zoom-in">
          <p>
            <strong>Author:</strong> {selectedReview?.name}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {selectedReview &&
              new Date(selectedReview.created_at).toLocaleDateString()}
          </p>
          <div style={{ marginTop: "1rem" }}>
            <p>{selectedReview?.description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default ReviewList;
