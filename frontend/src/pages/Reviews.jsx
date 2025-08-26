import React from "react";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <div
      style={{
        backgroundColor: "#1A1A1A",
        height: "100vh",
        color: "white",
        padding: "2rem",
      }}
    >
      <h1>Reviews</h1>
      <Link to="/" style={{ color: "#53D6F2" }}>
        Back to Home
      </Link>
      <p>Sample Text</p>
    </div>
  );
};

export default Reviews;
