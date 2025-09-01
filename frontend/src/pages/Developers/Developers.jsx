import React from "react";
import DeveloperProfile from "./DeveloperProfile";
import "./DeveloperProfile.css";

import developersData from "../../shared/developersData";

const Developers = () => {
  return (
    <div className="developers-page-container">
      {/* Background big text */}
      <h1 className="background-title">DEVELOPERS</h1>

      {developersData.map((dev) => (
        <DeveloperProfile key={dev.id} developer={dev} />
      ))}
    </div>
  );
};

export default Developers;
