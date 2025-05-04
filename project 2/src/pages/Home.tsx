import React from 'react';
import PageTransition from '../components/common/PageTransition';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </PageTransition>
  );
};

export default Home;