import React from 'react';
import DeveloperProfile from './DeveloperProfile';
import './DeveloperProfile.css'; // Import the CSS file here

import priyan from '../../assets/priyan.jpg';
import jo from '../../assets/jo.png';

const developersData = [
  {
    id: 1,
    name: 'PRIYAN',
    image: priyan,
    position: 'bottom-left', 
    socials: {
      email: 'bpriyan18082004@gmail.com',
      phone: '9789762908',
      linkedin: 'https://www.linkedin.com/in/priyan1808/',
      instagram: 'https://www.instagram.com/',
    },
  },
  {
    id: 2,
    name: 'JOTHSHANA',
    image: jo,
    position: 'top-right',
    socials: {
      email: 'jothshana123@gmail.com',
      phone: '7306176900',
      linkedin: 'https://www.linkedin.com/in/jothshana/',
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


// import React from 'react';
// import DeveloperProfile from './DeveloperProfile';
// import './Developers.css';
// import developersData from '../../shared/developersData';

// const Developers = () => {
//   return (
//     <div className="developers-page-container">
//       {developersData.map((dev) => (
//         <DeveloperProfile key={dev.id} developer={dev} />
//       ))}
//     </div>
//   );
// };

// export default Developers;
