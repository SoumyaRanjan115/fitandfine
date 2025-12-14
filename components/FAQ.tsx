import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/mockData';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faqs" className="py-24 bg-premium-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Common Questions</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`border transition-colors duration-300 ${openId === faq.id ? 'bg-premium-dark border-gold/50' : 'bg-transparent border-white/10 hover:border-white/30'}`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-semibold pr-4 text-lg ${openId === faq.id ? 'text-gold' : 'text-gray-200'}`}>{faq.question}</span>
                <span className={`text-gold transform transition-transform ${openId === faq.id ? 'rotate-180' : ''}`}>
                  {openId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;