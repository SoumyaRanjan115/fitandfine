import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SUCCESS_STORIES } from '../data/mockData';
import Modal from './Modal';
import { SuccessStory } from '../types';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by roughly one card width including gap
      const scrollAmount = window.innerWidth < 768 ? container.clientWidth * 0.9 : 400;

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="success-stories" className="py-24 bg-premium-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Hall of <span className="text-gold">Triumph</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Extraordinary results from our elite members.
          </motion.p>
        </div>
      </div>

      {/* 10% - 80% - 10% layout */}
      <div className="w-full flex items-center justify-between relative z-10">
        {/* Left Arrow */}
        <div className="w-[10%] flex justify-center items-center">
          <button
            onClick={() => scroll('left')}
            className="p-4 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all active:scale-95 bg-premium-dark/80 backdrop-blur-sm shadow-lg z-20"
          >
            <ChevronLeft size={28} />
          </button>
        </div>

        {/* Cards Container */}
        <div className="w-[80%] overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-[2rem] pb-8 snap-x snap-mandatory scrollbar-hide px-2 items-start"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SUCCESS_STORIES.map((story, index) => {
              // STRICT UNIFORM DIMENSIONS
              // Width: Fixed on Desktop (380px), Responsive on Mobile (85%)
              // Height: Fixed ALWAYS (540px) to prevent alignment issues
              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`
                    min-w-[85%] md:min-w-[380px] lg:min-w-[380px]
                    h-[540px]
                    snap-center flex-shrink-0 flex flex-col
                    bg-premium-dark border border-white/5 
                    shadow-2xl overflow-hidden cursor-pointer group 
                    hover:border-gold/50 transition-colors
                    relative
                  `}
                  onClick={() => setSelectedStory(story)}
                  whileHover={{ y: -8, scale: 1.01 }}
                >
                  {/* Image Container - STRICT FIXED HEIGHT */}
                  <div className="h-[280px] w-full relative overflow-hidden bg-black shrink-0">
                    <img
                      src={story.imageUrl}
                      alt={story.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-premium-dark via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-2xl font-heading font-bold text-white mb-1 drop-shadow-md">
                        {story.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-semibold shadow-black drop-shadow-sm">
                        <Star size={12} fill="currentColor" />
                        {story.durationWeeks} Week Transformation
                      </div>
                    </div>
                  </div>

                  {/* Content Container - Takes remaining height */}
                  <div className="p-6 flex flex-col flex-1 justify-between bg-premium-dark overflow-hidden">
                    <div>
                      {/* Stats Row */}
                      <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                        <div className="text-center">
                          <span className="block text-gray-500 text-[10px] uppercase tracking-wider">
                            Lost
                          </span>
                          <span className="text-lg font-bold text-white">
                            {(story.beforeWeight - story.afterWeight).toFixed(1)}kg
                          </span>
                        </div>
                        <div className="h-8 w-px bg-white/10"></div>
                        <div className="text-center">
                          <span className="block text-gray-500 text-[10px] uppercase tracking-wider">
                            Start
                          </span>
                          <span className="text-base text-gray-400">
                            {story.beforeWeight}
                          </span>
                        </div>
                        <ArrowRight className="text-gold" size={14} />
                        <div className="text-center">
                          <span className="block text-gray-500 text-[10px] uppercase tracking-wider">
                            Now
                          </span>
                          <span className="text-lg font-bold text-gold">
                            {story.afterWeight}
                          </span>
                        </div>
                      </div>

                      {/* Quote - Clamped */}
                      <p className="text-gray-400 italic text-sm mb-4 line-clamp-3 leading-relaxed">
                        "{story.quote}"
                      </p>
                    </div>

                    <div className="text-white text-xs font-bold flex items-center gap-2 group-hover:text-gold transition-colors uppercase tracking-widest mt-auto">
                      View Journey <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <div className="w-[10%] flex justify-center items-center">
          <button
            onClick={() => scroll('right')}
            className="p-4 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all active:scale-95 bg-premium-dark/80 backdrop-blur-sm shadow-lg z-20"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={!!selectedStory} onClose={() => setSelectedStory(null)} title="Elite Transformation">
        {selectedStory && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src={selectedStory.imageUrl}
                alt={selectedStory.name}
                className="w-40 h-40 rounded-full object-cover border-2 border-gold"
              />
              <div>
                <h4 className="text-3xl font-heading font-bold text-white">
                  {selectedStory.name}
                </h4>
                <div className="mt-2 text-gold text-sm font-bold uppercase tracking-widest">
                  {selectedStory.durationWeeks} Weeks • {selectedStory.beforeWeight - selectedStory.afterWeight}kg Lost
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-gold">
              <p className="text-xl italic text-gray-300 font-light">"{selectedStory.quote}"</p>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">{selectedStory.description}</p>
            
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 mt-4">
              <div className="text-center">
                <span className="block text-gray-500 text-xs uppercase">Starting Weight</span>
                <span className="text-xl font-bold text-white">{selectedStory.beforeWeight}kg</span>
              </div>
              <div className="text-center border-l border-white/10">
                <span className="block text-gray-500 text-xs uppercase">Current Weight</span>
                <span className="text-xl font-bold text-gold">{selectedStory.afterWeight}kg</span>
              </div>
              <div className="text-center border-l border-white/10">
                <span className="block text-gray-500 text-xs uppercase">Result</span>
                <span className="text-xl font-bold text-white">{(selectedStory.beforeWeight - selectedStory.afterWeight).toFixed(1)}kg</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default SuccessStories;