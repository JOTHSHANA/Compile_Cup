import React, { useEffect, useState, forwardRef, useImperativeHandle, useLayoutEffect, useRef } from "react";
import { supabase } from "../../lib/supabaseClient";
import { showError } from "../../components/toast/toast";
import { Modal, Skeleton } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ReviewList.css";

gsap.registerPlugin(ScrollTrigger);

const ReviewList = forwardRef((props, ref) => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

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

  useImperativeHandle(ref, () => ({
    reload: fetchReviews,
  }));

  useEffect(() => {
    fetchReviews();
  }, []);

  useLayoutEffect(() => {
    if (!loading && reviews.length > 0) {
      const ctx = gsap.context(() => {
        gsap.from(".review-card", {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse", 
          },
        });
      }, containerRef); 

      return () => ctx.revert(); 
    }
  }, [loading, reviews]); 

  useEffect(() => {
    if (modalOpen) {
      gsap.from(".modal-content-animate", {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.05
      });
    }
  }, [modalOpen]);

  const handleCardClick = (review) => {
    setSelectedReview(review);
    setModalOpen(true);
  };

  return (
    <div className="review-container" ref={containerRef}>
      <div className="reviews-grid">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="review-card">
              <Skeleton active paragraph={{ rows: 3 }} title={false} />
            </div>
          ))
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="review-card"
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
        <div className="modal-content-animate">
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