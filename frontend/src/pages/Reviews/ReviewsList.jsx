import React, { useEffect, useState, useRef } from "react";
import { supabase } from "../../lib/supabaseClient";
import { showError } from "../../components/toast/toast";
import { Modal, Card, Button } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './ReviewList.css';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [rotation, setRotation] = useState(0); 
  const carouselRef = useRef(null);

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

  const rotateCarousel = (direction) => {
    const angle = 360 / reviews.length;
    if (direction === 'left') {
      setRotation(prev => prev + angle);
    } else {
      setRotation(prev => prev - angle);
    }
  };

  const cardCount = reviews.length;
  const cardZTranslate = cardCount > 0 ? (200 / Math.tan(Math.PI / cardCount)) : 0;

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `rotateY(${rotation}deg)` }} ref={carouselRef}>
        {reviews.map((review, index) => {
          const angle = 360 / reviews.length;
          const rotateY = index * angle;
          return (
            <Card
              key={review.id}
              className="carousel-card"
              onClick={() => handleCardClick(review)}
              style={{
                transform: `rotateY(${rotateY}deg) translateZ(${cardZTranslate}px)`,
              }}
            >
              <div className="ribbon">Review</div>
              <h3>{review.name}</h3>
              <h4>{review.project_name}</h4>
              <p className="line-clamp">{review.description}</p>
              {/* <p>{review.techStack}</p> */}
            </Card>
          );
        })}
      </div>
      <div className="carousel-controls">
        <Button
          type="primary"
          shape="circle"
          icon={<LeftOutlined />}
          onClick={() => rotateCarousel('left')}
        />
        <Button
          type="primary"
          shape="circle"
          icon={<RightOutlined />}
          onClick={() => rotateCarousel('right')}
        />
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