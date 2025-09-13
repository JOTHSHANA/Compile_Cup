import React from 'react';
import Section from '../components/Section/Section';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Developers from './Developers/Developers';
import Brochure from './Brochure/Brochure';
import Contact from './Contact/Contact';

const MainLayout = () => {
  return (
    <div>
      <Section id="home" ><Home /></Section>
      <Section id="about" ><About /></Section>
      <Section id="services"><Services /></Section>
      <Section id="projects" ><Projects /></Section>
      <Section id="developers" ><Developers /></Section>
      <Section id="brochure" ><Brochure /></Section>
      <Section id="contact" ><Contact /></Section>
    </div>
  );
};

export default MainLayout;
