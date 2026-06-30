import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-8 left-6 md:left-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-glass-border dark:border-white/10 shadow-lg flex items-center justify-center text-navy-deep dark:text-white hover:text-emerald-accent dark:hover:text-emerald-accent transition-all hover:scale-110 active:scale-95"
          aria-label="Back to top"
        >
          <span className="material-symbols-outlined text-2xl">arrow_upward</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
