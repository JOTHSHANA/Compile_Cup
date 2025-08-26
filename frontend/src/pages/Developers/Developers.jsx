import React from 'react';
import DeveloperProfile from '../../components/DeveloperProfile/DeveloperProfile';
import person1 from '../../assets/person1.png';
import person2 from '../../assets/person2.png';
import './Developers.css';

const developersData = [
  {
    name: 'Alex Doe',
    email: 'alex.doe@compilecup.com',
    whatsapp: '1234567890',
    image: person1,
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@compilecup.com',
    whatsapp: '0987654321',
    image: person2,
  },
];

const Developers = () => {
  return (
    <div className="developers-container">
      <h1 className="developers-title">Meet the Team</h1>
      <div className="profiles-wrapper">
        <DeveloperProfile developer={developersData[0]} imagePosition="left" />
        <DeveloperProfile developer={developersData[1]} imagePosition="right" />
      </div>
    </div>
  );
};

export default Developers;
