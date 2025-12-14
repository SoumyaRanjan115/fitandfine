import React from 'react';
import Hero from '../components/Hero';
import SuccessStories from '../components/SuccessStories';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import About from '../components/About';

const HomePage: React.FC = () => {
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

export default HomePage;

// Gatsby Head API for SEO
export const Head = () => (
  <>
    <title>Home | FitLife Pro - Transform Your Body</title>
    <meta name="description" content="Join FitLife Pro for personalized diet plans, workout routines, and expert coaching. Start your transformation today." />
  </>
);