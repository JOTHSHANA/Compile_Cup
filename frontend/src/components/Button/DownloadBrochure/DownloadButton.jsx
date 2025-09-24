import React from "react";
import "./DownloadButton.css";
import brochure from "../../../assets/brochure.pdf"; // adjust path if needed

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brochure;
    link.download = "brochure.pdf"; 
    link.target = "_blank"; 
    link.click();
  };

  return (
    <button className="Btn" onClick={handleDownload}>
      <svg
        className="svgIcon"
        viewBox="0 0 384 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 
                 0l160-160c12.5-12.5 12.5-32.8 
                 0-45.3s-32.8-12.5-45.3 0L224 
                 370.8 224 64c0-17.7-14.3-32-32-32s-32 
                 14.3-32 32l0 306.7L54.6 
                 265.4c-12.5-12.5-32.8-12.5-45.3 
                 0s-12.5 32.8 0 45.3l160 160z"></path>
      </svg>
      <span className="icon2"></span>
      <span className="tooltip">Download</span>
    </button>
  );
};

export default DownloadButton;
