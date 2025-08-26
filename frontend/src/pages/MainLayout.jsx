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
      <Section id="home" backgroundColor="#0D1137"><Home /></Section>
      <Section id="about" backgroundColor="#1A1A1A"><About /></Section>
      <Section id="services" backgroundColor="#53D6F2" textColor="#000"><Services /></Section>
      <Section id="projects" backgroundColor="#FF6B6B"><Projects /></Section>
      <Section id="developers" backgroundColor="#B9FF39" textColor="#000"><Developers /></Section>
      <Section id="brochure" backgroundColor="#F0F2F5" textColor="#000"><Brochure /></Section>
      <Section id="contact" backgroundColor="#0D1137"><Contact /></Section>
    </div>
  );
};

export default MainLayout;
