import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Engineering Scholar",
      initials: "ES",
      program: "B.Tech Computer Science",
      institution: "Delhi NCR University Placement",
      quote: "The consulting team at Divya Admission Hub made my admission process seamless. Their documentation verification was prompt and saved me months of procedural hurdles.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT01O3f-1F7Z5y81_5sXYdN6MGTEaJ7dxwTQUO-3xlytwb2jsei5omP-IrqR2K30cjmSYA93snFS7HwLDNiirYWnbzvFilp8WTINr9UTFtICPuJ3DbT7n88HQf7nUA2Yn2_6xJehFihK7rjTPSH08QDlR-q0yxeB3-JK2Kb1AHEK_VjCcx5TaMasxdD3WDGeFI-SZsd2fxNwzvQQODzLi9S1Fi8pxaWmOEPn_lmc132tjAx_l0wJBpwDjgHam0YyqKNpYuT-AIoCjj"
    },
    {
      name: "Senior Secondary Scholar",
      initials: "SS",
      program: "NIOS Sr. Secondary (12th)",
      institution: "State Athlete & Sports Aspirant",
      quote: "I needed to clear senior secondary via NIOS to pursue national sports trials. The guidance was highly professional and accommodated my training schedule with on-demand exams.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDajlNlbXN3KwJd65VkvcOW4pM-pjUMoFeRU5arJwrFUXQgGEa4ssXmFdPfMYLGPlXBC-KcEVP6UGAijnwElprgeF-tTg2aX3RG-g5vwsWiY0SSineuQC3Y_RpTgh7I0lkltHKEbOgWaDdB9UGVUHwFC5-ZG1zCe86psoxeV6aKJxBmcyWSTdqNCOhL32aTptVyf85SlhMT5Ke-KAiCIkOTsLEBBSucaTbzcvoVt6MC7v9TxKcShL4J7NpJdsvUL0noOjVFZVoYRal6"
    },
    {
      name: "Master's Graduate",
      initials: "MG",
      program: "Master of Arts & B.Ed",
      institution: "IGNOU Central University",
      quote: "Navigating IGNOU's re-registration and assignment deadlines was overwhelming at first. Divya Admission Hub's structured support was invaluable to finishing my degree on time.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOD5B5DiMPduKyrxRAY_8xmuvJZeHjfggp178DycqqjzTIsyuAHM4JnwUu9LijJhTs95cqPJ49QonKYzOCEtwNjlZ1NFljyTP76GT8AcDH-muyCnjKStQlOMboQKF3mYFdJ3UCYhBOz_1Y2KCs0OTQKNW8XuJ4y9Pb7_APiKJ8MTuxqMs4AwWAHYqMfHjXlWgXP8Xx4_itf2RMMTih6rvv7dsaziKjsnj0MgjnYoTh5DBr8Y0ufHyIGMeMHrTJ3zEnq2-o7_gH_fY8"
    },
    {
      name: "Doctoral Researcher",
      initials: "DR",
      program: "PhD Research & Thesis",
      institution: "UGC-CARE Accredited University",
      quote: "The personalized attention I received during my PhD application was outstanding. They guided my research proposal structuring and viva preparation with deep academic rigor.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDajlNlbXN3KwJd65VkvcOW4pM-pjUMoFeRU5arJwrFUXQgGEa4ssXmFdPfMYLGPlXBC-KcEVP6UGAijnwElprgeF-tTg2aX3RG-g5vwsWiY0SSineuQC3Y_RpTgh7I0lkltHKEbOgWaDdB9UGVUHwFC5-ZG1zCe86psoxeV6aKJxBmcyWSTdqNCOhL32aTptVyf85SlhMT5Ke-KAiCIkOTsLEBBSucaTbzcvoVt6MC7v9TxKcShL4J7NpJdsvUL0noOjVFZVoYRal6"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  return (
    <section className="mb-28 md:mb-36" id="testimonials">
      <div className="flex flex-col items-center mb-12 gap-2 text-center">
        <span className="font-label-mono text-xs uppercase tracking-widest text-emerald-accent font-bold">
          Verified Student Testimonials
        </span>
        <h2 className="font-display-xl text-3xl md:text-5xl text-navy-deep dark:text-white">
          Scholar <span className="text-emerald-accent">Success Stories</span>
        </h2>
        <div className="h-1 w-24 bg-emerald-accent rounded-full mb-3"></div>
        <p className="text-on-surface-variant dark:text-slate-400 text-sm md:text-base max-w-2xl">
          Join thousands of successful professionals and students who accelerated their education with our consultancy.
        </p>
      </div>

      <div 
        className="relative w-full max-w-3xl mx-auto min-h-[380px] sm:min-h-[340px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="glass-panel p-6 sm:p-10 rounded-3xl border border-glass-border dark:border-white/10 shadow-lg flex flex-col items-center text-center bg-white/80 dark:bg-slate-800/90 w-full"
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-accent/40 mb-4 shrink-0 bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
              <span className="font-display-xl text-lg font-bold text-emerald-accent select-none">
                {testimonials[currentIndex].initials}
              </span>
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={`${testimonials[currentIndex].name} - Student at Divya Admission Hub`} 
                className="absolute inset-0 w-full h-full object-cover" 
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            
            <div className="flex text-premium-gold mb-4 gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            
            <p className="text-on-surface-variant dark:text-slate-200 font-medium text-base md:text-lg mb-6 flex-grow italic max-w-xl leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            
            <div>
              <h4 className="font-display-xl text-lg text-navy-deep dark:text-white font-bold leading-tight">
                {testimonials[currentIndex].name}
              </h4>
              <p className="font-label-mono text-xs text-emerald-accent uppercase tracking-wider font-bold mt-1">
                {testimonials[currentIndex].program}
              </p>
              <p className="text-xs text-on-surface-variant dark:text-slate-400 font-medium mt-0.5">
                {testimonials[currentIndex].institution}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button 
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 text-navy-deep dark:text-white hover:bg-emerald-accent hover:text-white transition-colors border border-glass-border dark:border-slate-700 shadow-xs"
            aria-label="Previous testimonial"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  idx === currentIndex ? 'w-8 bg-emerald-accent' : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 text-navy-deep dark:text-white hover:bg-emerald-accent hover:text-white transition-colors border border-glass-border dark:border-slate-700 shadow-xs"
            aria-label="Next testimonial"
          >
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
