import React, { useState, useEffect } from "react";
import "./BackToTop.css";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`button ${visible ? "show" : "hide"}`}
      onClick={scrollToTop}
    >
      <svg className="svgIcon" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 
             0l-160 160c-12.5 12.5-12.5 32.8 
             0 45.3s32.8 12.5 45.3 0L160 
             141.2V448c0 17.7 14.3 32 32 
             32s32-14.3 32-32V141.2L329.4 
             246.6c12.5 12.5 32.8 12.5 45.3 
             0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
    </button>
  );
};

export default BackToTopButton;
