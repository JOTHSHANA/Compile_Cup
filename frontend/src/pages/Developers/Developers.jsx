import React from 'react';
import DeveloperProfile from './DeveloperProfile';
import './Developers.css';
import priyan from '../../assets/priyan.jpg';
import jo from '../../assets/person1.png';



const developersData = [
  {
    id: 1,
    name: 'PRIYAN',
    image: priyan,
    position: 'bottom-left', 
    socials: {
      email: 'bpriyan18082004@gmail.com',
      phone: '9789762908',
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
    },
  },
  {
    id: 2,
    name: 'JOTHSHANA',
    image: jo,
    position: 'top-right', 
    socials: {
      email: 'jane.smith@example.com',
      phone: '0987654321',
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
    },
  },
];


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
