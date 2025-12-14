import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { QUOTES } from '../data/mockData';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      />
      
      {/* Gradient Overlay for Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-premium-black via-transparent to-premium-black/20 z-10" />

      <div className="container mx-auto px-4 z-20 flex flex-col items-center">
        {/* Main Text Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-24 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-gold tracking-[0.3em] text-sm uppercase font-bold mb-4 block">Redefine Your Limits</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight text-white"
          >
            Forged in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Gold & Sweat</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            Exclusive training programs for high achievers. Experience the luxury of a perfectly sculpted physique.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <Button size="lg" onClick={scrollToPlans}>
              View Premium Plans
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
              Apply Now
            </Button>
          </motion.div>
        </div>

        {/* Quotes Section - Full Width & Refined Appearance */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {QUOTES.slice(0, 4).map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-md p-6 border-t border-transparent hover:border-gold/40 hover:bg-premium-dark/90 transition-all duration-300 cursor-default flex flex-col justify-between group relative overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <p className="text-gray-300 text-lg font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                {quote.text}
              </p>
              
              <div className="mt-4 w-8 h-0.5 bg-white/10 group-hover:bg-gold transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;