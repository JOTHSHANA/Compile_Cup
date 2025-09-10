import React, { useEffect, useState } from "react";
import "./Parallax.css";

const ParallaxBackground = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="layer layer1"
        style={{
          transform: `translate(${offset.x * 30}px, ${offset.y * 30}px)`,
        }}
      />
      <div
        className="layer layer2"
        style={{
          transform: `translate(${offset.x * 50}px, ${offset.y * 50}px)`,
        }}
      />
      <div
        className="layer layer3"
        style={{
          transform: `translate(${offset.x * 70}px, ${offset.y * 70}px)`,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
