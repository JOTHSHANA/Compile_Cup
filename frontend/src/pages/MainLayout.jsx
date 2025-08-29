import React from 'react';
import Section from '../components/Section/Section';
import Home from './Home/Home';
import About from './About/About';
import AboutGSAP from './About/AboutGSAP';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Developers from './Developers/Developers';
import Brochure from './Brochure/Brochure';
import Contact from './Contact/Contact';

const MainLayout = () => {
  return (
    <div>
      <Section id="home" variant="primary"><Home /></Section>
      <Section id="about" variant="secondary"><About /></Section>
      {/* <Section id="about" variant="secondary"><AboutGSAP /></Section> */}
      <Section id="services" variant="primary"><Services /></Section>
      <Section id="projects" variant="secondary"><Projects /></Section>
      <Section id="developers" variant="primary"><Developers /></Section>
      <Section id="brochure" variant="secondary"><Brochure /></Section>
      <Section id="contact" variant="primary"><Contact /></Section>
    </div>
  );
};

export default MainLayout;
