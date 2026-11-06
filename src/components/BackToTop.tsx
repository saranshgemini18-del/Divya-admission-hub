import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastVisible = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isNowVisible = window.scrollY > 280;
          if (isNowVisible !== lastVisible) {
            setIsVisible(isNowVisible);
            lastVisible = isNowVisible;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-slate-800/95 border border-black/10 dark:border-white/10 shadow-lg flex items-center justify-center text-navy-deep dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 active:scale-95 ${
        isVisible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label="Back to top"
      style={{ willChange: 'transform, opacity' }}
    >
      <span className="material-symbols-outlined text-xl sm:text-2xl">arrow_upward</span>
    </button>
  );
}
