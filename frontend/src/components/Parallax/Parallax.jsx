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
        style={{ transform: `translate(${offset.x * 20}px, ${offset.y * 20}px)` }}
      />
      <div
        className="layer layer2"
        style={{ transform: `translate(${offset.x * 40}px, ${offset.y * 40}px)` }}
      />
      <div
        className="layer layer3"
        style={{ transform: `translate(${offset.x * 60}px, ${offset.y * 60}px)` }}
      />
    </div>
  );
};

export default ParallaxBackground;
