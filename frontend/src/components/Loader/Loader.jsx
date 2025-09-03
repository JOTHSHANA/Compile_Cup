import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div id="pre-load" className="loader">
      <div className="loader-inner">
        <div className="loader-logo">
          {/* Your original SVG logo here */}
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            preserveAspectRatio="xMidYMid meet"
            fill="white"
            width="100"
            height="100"
          >
            <g
              transform="translate(0,512) scale(0.1,-0.1)"
              stroke="none"
            >
              {/* paste your original SVG <path> data here */}
              <path d="M2560 5114 c-702 -69 ... z" />
            </g>
          </svg>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}
