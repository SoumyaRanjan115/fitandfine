import React from 'react';
import { Activity, Heart, Shield, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-premium-dark border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left Side: Image (Slightly Reduced Size) */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
             <div className="relative w-full max-w-[90%] md:max-w-md">
               <div className="absolute -inset-4 border-2 border-gold/20 rounded-none transform rotate-3"></div>
               <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Elite training" 
                  className="shadow-2xl w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700 relative z-0"
                />
                <div className="absolute -bottom-8 -right-8 bg-gold p-6 z-20 hidden md:block shadow-lg">
                   <div className="text-black font-bold text-4xl font-heading">5K+</div>
                   <div className="text-black/80 font-medium uppercase tracking-wider text-xs mt-1">Elite Members</div>
                </div>
             </div>
          </div>
          
          {/* Right Side: Expanded Content */}
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              Excellence is <span className="text-gold">Standard</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Fit&Fine is not for everyone. It is for those who refuse to settle for average. Our team of world-class nutritionists and master trainers provides an experience that bridges the gap between science and luxury.
              </p>
              <p>
                We believe that true transformation goes beyond physical appearance; it requires a fundamental shift in mindset. Our training approach combines data-driven metabolic conditioning with old-school strength principles, ensuring that every drop of sweat translates into measurable progress.
              </p>
              <p>
                Nutrition is the fuel for your ambition. We move beyond restrictive diets to create sustainable, high-performance nutritional strategies. Whether you're optimizing for muscle gain, fat loss, or cognitive clarity, our guidance is tailored to your unique physiological blueprint.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="bg-white/5 p-3 text-gold border border-gold/20 group-hover:bg-gold group-hover:text-black transition-colors shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">World Class</h4>
                  <p className="text-sm text-gray-500 mt-1">Certified master trainers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="bg-white/5 p-3 text-gold border border-gold/20 group-hover:bg-gold group-hover:text-black transition-colors shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Premium Care</h4>
                  <p className="text-sm text-gray-500 mt-1">24/7 Concierge support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;