import React from 'react';
import Hero from '../components/Hero';
import SuccessStories from '../components/SuccessStories';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import About from '../components/About';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <SuccessStories />
      <Pricing />
      <FAQ />
      <About />
    </div>
  );
};

export default Home;