import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah J.",
      program: "B.Tech Computer Science",
      institution: "Delhi University",
      quote: "The elite consulting team at Divya Hub made my transition to a regular degree seamless. Their documentation verification process is flawless and saved me months of administrative hurdles.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT01O3f-1F7Z5y81_5sXYdN6MGTEaJ7dxwTQUO-3xlytwb2jsei5omP-IrqR2K30cjmSYA93snFS7HwLDNiirYWnbzvFilp8WTINr9UTFtICPuJ3DbT7n88HQf7nUA2Yn2_6xJehFihK7rjTPSH08QDlR-q0yxeB3-JK2Kb1AHEK_VjCcx5TaMasxdD3WDGeFI-SZsd2fxNwzvQQODzLi9S1Fi8pxaWmOEPn_lmc132tjAx_l0wJBpwDjgHam0YyqKNpYuT-AIoCjj"
    },
    {
      name: "Rahul M.",
      program: "NIOS Sr. Secondary",
      institution: "National Level Athlete",
      quote: "I needed to fast-track my senior secondary via NIOS to pursue my sports career. The guidance was incredibly professional and perfectly tailored to accommodate my demanding training schedule.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDajlNlbXN3KwJd65VkvcOW4pM-pjUMoFeRU5arJwrFUXQgGEa4ssXmFdPfMYLGPlXBC-KcEVP6UGAijnwElprgeF-tTg2aX3RG-g5vwsWiY0SSineuQC3Y_RpTgh7I0lkltHKEbOgWaDdB9UGVUHwFC5-ZG1zCe86psoxeV6aKJxBmcyWSTdqNCOhL32aTptVyf85SlhMT5Ke-KAiCIkOTsLEBBSucaTbzcvoVt6MC7v9TxKcShL4J7NpJdsvUL0noOjVFZVoYRal6"
    },
    {
      name: "Ananya S.",
      program: "Master of Arts",
      institution: "IGNOU",
      quote: "Navigating IGNOU's complex admission and assignment structure was daunting initially. The structured support and prompt responses from the consulting team were absolutely invaluable to my success.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOD5B5DiMPduKyrxRAY_8xmuvJZeHjfggp178DycqqjzTIsyuAHM4JnwUu9LijJhTs95cqPJ49QonKYzOCEtwNjlZ1NFljyTP76GT8AcDH-muyCnjKStQlOMboQKF3mYFdJ3UCYhBOz_1Y2KCs0OTQKNW8XuJ4y9Pb7_APiKJ8MTuxqMs4AwWAHYqMfHjXlWgXP8Xx4_itf2RMMTih6rvv7dsaziKjsnj0MgjnYoTh5DBr8Y0ufHyIGMeMHrTJ3zEnq2-o7_gH_fY8"
    },
    {
      name: "Vikram R.",
      program: "PhD Management",
      institution: "Global Research Institute",
      quote: "The personalized attention I received during my PhD application process was exceptional. They guided me through proposal structuring and interview prep meticulously.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDajlNlbXN3KwJd65VkvcOW4pM-pjUMoFeRU5arJwrFUXQgGEa4ssXmFdPfMYLGPlXBC-KcEVP6UGAijnwElprgeF-tTg2aX3RG-g5vwsWiY0SSineuQC3Y_RpTgh7I0lkltHKEbOgWaDdB9UGVUHwFC5-ZG1zCe86psoxeV6aKJxBmcyWSTdqNCOhL32aTptVyf85SlhMT5Ke-KAiCIkOTsLEBBSucaTbzcvoVt6MC7v9TxKcShL4J7NpJdsvUL0noOjVFZVoYRal6"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="mb-48" id="testimonials">
      <div className="flex flex-col items-center mb-16 gap-2 text-center">
        <h2 className="font-display-xl text-3xl md:text-5xl text-navy-deep dark:text-white">
          Scholar <span className="text-emerald-accent">Success Stories</span>
        </h2>
        <div className="h-1 w-24 bg-premium-gold rounded-full mb-4"></div>
        <p className="text-on-surface-variant dark:text-slate-400 text-lg max-w-2xl">
          Join thousands of successful professionals who accelerated their academic journey with our elite consultancy.
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto min-h-[350px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 glass-panel p-8 md:p-12 rounded-3xl border border-glass-border dark:border-white/10 shadow-lg flex flex-col items-center text-center bg-white/40 dark:bg-slate-800/80 h-full justify-center"
          >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-emerald-accent/20 mb-6 flex-shrink-0">
                  <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex text-premium-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                
                <p className="text-on-surface-variant dark:text-slate-300 font-medium text-lg md:text-xl mb-8 flex-grow italic max-w-2xl">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div>
                  <h4 className="font-display-xl text-xl text-navy-deep dark:text-white leading-tight">{testimonials[currentIndex].name}</h4>
                  <p className="font-label-mono text-xs text-emerald-accent uppercase tracking-wider font-bold mt-2">
                    {testimonials[currentIndex].program}
                  </p>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400 font-medium mt-1">
                    {testimonials[currentIndex].institution}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Carousel Controls */}
            <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center gap-4">
              <button 
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 dark:bg-slate-800/50 text-navy-deep dark:text-white hover:bg-emerald-accent hover:text-white transition-colors border border-glass-border dark:border-slate-700 shadow-sm"
                aria-label="Previous testimonial"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-emerald-accent' : 'w-2 bg-glass-border dark:bg-slate-700'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 dark:bg-slate-800/50 text-navy-deep dark:text-white hover:bg-emerald-accent hover:text-white transition-colors border border-glass-border dark:border-slate-700 shadow-sm"
                aria-label="Next testimonial"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
        </div>
      </div>
    </section>
  );
}
