import React from 'react';
import Section from '../components/Section/Section';
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Developers from './Developers';
import Brochure from './Brochure';
import Contact from './Contact';

const MainLayout = () => {
  return (
    <div>
      <Section id="home" variant="primary"><Home /></Section>
      <Section id="about" variant="secondary"><About /></Section>
      <Section id="services" variant="primary"><Services /></Section>
      <Section id="projects" variant="secondary"><Projects /></Section>
      <Section id="developers" variant="primary"><Developers /></Section>
      <Section id="brochure" variant="secondary"><Brochure /></Section>
      <Section id="contact" variant="primary"><Contact /></Section>
    </div>
  );
};

export default MainLayout;
