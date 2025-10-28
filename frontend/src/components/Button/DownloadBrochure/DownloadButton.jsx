import React, { useState } from "react";
import "./DownloadButton.css";
// import brochure from "../../../assets/brochure.pdf"; // No longer needed
import bDark from "../../../assets/brochure-dark.pdf"; // Path for dark PDF
import bLight from "../../../assets/brochure-light.pdf"; // Path for light PDF

// --- IMPORTANT ---
// Add preview images (PNG or JPG) for your PDFs to the assets folder
import bDarkPreview from "../../../assets/brochure-dark-preview.png";
import bLightPreview from "../../../assets/brochure-light-preview.png";

const DownloadButton = () => {
  // State to control the modal popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to track which version is selected
  const [selectedVersion, setSelectedVersion] = useState(null); // 'light', 'dark', or null

  // This function now opens the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // This function closes the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVersion(null); // Reset selection when closing
  };

  // This handles the final download after selection
  const handleDownload = () => {
    if (!selectedVersion) {
      alert("Please select a brochure version to download.");
      return;
    }

    const link = document.createElement("a");
    link.href = selectedVersion === 'light' ? bLight : bDark;
    link.download = selectedVersion === 'light' ? "brochure-light.pdf" : "brochure-dark.pdf";
    link.target = "_blank";
    link.click();

    handleCloseModal(); // Close modal after download
  };

  return (
    <>
      {/* This is the original button, but it now opens the modal */}
      <button className="Btn" onClick={handleOpenModal}>
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
        <span className="tooltip">Download Brochure</span>
      </button>

      {/* --- NEW MODAL POPUP --- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Select Brochure Version</h2>
            <p>Click on a preview to select and download.</p>
            <div className="modal-preview-container">
              {/* Light Version Option */}
              <div
                className={`modal-preview-option ${
                  selectedVersion === 'light' ? 'selected' : ''
                }`}
                onClick={() => setSelectedVersion('light')}
              >
                <img src={bLightPreview} alt="Light Brochure Preview" />
                <span>Light Mode</span>
              </div>
              {/* Dark Version Option */}
              <div
                className={`modal-preview-option ${
                  selectedVersion === 'dark' ? 'selected' : ''
                }`}
                onClick={() => setSelectedVersion('dark')}
              >
                <img src={bDarkPreview} alt="Dark Brochure Preview" />
                <span>Dark Mode</span>
              </div>
            </div>
            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={handleCloseModal}>
                Cancel
              </button>
              <button
                className="modal-btn download"
                onClick={handleDownload}
                disabled={!selectedVersion}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DownloadButton;