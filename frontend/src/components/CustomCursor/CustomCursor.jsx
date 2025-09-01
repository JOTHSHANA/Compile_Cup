import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      createBubbles(); 
    };
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase().match(/img|a/)) {
        setHidden(true);
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.tagName.toLowerCase().match(/img|a/)) {
        setHidden(false);
      }
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []); 

  const createBubbles = () => {
    setPosition(currentPosition => {
      const count = Math.floor(Math.random() * 4) + 3; 
      const newBubbles = Array.from({ length: count }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 40 + 20;
        return {
          id: Date.now() + i,
          x: currentPosition.x, 
          y: currentPosition.y,
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance,
        };
      });

      setBubbles((prev) => [...prev, ...newBubbles]);

      setTimeout(() => {
        setBubbles((prev) =>
          prev.filter((b) => !newBubbles.find((nb) => nb.id === b.id))
        );
      }, 600);
      
      return currentPosition;
    });
  };
  useEffect(() => {
    const handleMouseDown = () => {
      setIsClicking(true);
      createBubbles();
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [createBubbles]);


  if (hidden) return null;

  return (
    <>
      <div
        className={`custom-cursor ${isClicking ? "clicking" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>

      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            "--dx": `${bubble.dx}px`,
            "--dy": `${bubble.dy}px`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;