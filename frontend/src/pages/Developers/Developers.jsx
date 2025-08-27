import React from 'react';
import DeveloperProfile from './DeveloperProfile';
import './Developers.css';
import developersData from '../../shared/developersData';

const Developers = () => {
  return (
    <div className="developers-page-container">
      {developersData.map((dev) => (
        <DeveloperProfile key={dev.id} developer={dev} />
      ))}
    </div>
  );
};

export default Developers;
