import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';

export default function Programs() {
  const statsRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress: statsProgress } = useScroll({
    target: statsRef,
    offset: ["0 1", "0.5 1"]
  });

  const statsOpacity = useTransform(statsProgress, [0, 1], [0, 1]);
  const statsY = useTransform(statsProgress, [0, 1], [50, 0]);

  return (
    <main className="relative z-10 pt-32 pb-24 md:pt-40 px-6 md:px-16 max-w-[1280px] mx-auto">
      <SEO 
        title="Academic Programs" 
        description="Explore our elite academic pathways, including NIOS admissions, IGNOU distance learning, and specialized university placements." 
        keywords="NIOS board admissions, IGNOU distance education, university placements, academic programs" 
      />
      {/* Header Section */}
      <header className="mb-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 text-center md:text-left">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/50 border border-secondary/20 mb-6 print:hidden">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary font-bold font-label-mono text-[10px] uppercase tracking-widest">2024 Admissions Live</span>
          </div>
          <h1 className="font-display-xl text-4xl md:text-5xl text-on-surface dark:text-white mb-6 max-w-3xl">
            Your Strategic Gateway to <span className="text-primary">Academic Excellence</span>
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant dark:text-slate-300 max-w-2xl md:mx-0 mx-auto">
            Divya Admission Hub simplifies complex educational pathways. From secondary schooling to prestige university degrees, we provide elite guidance for high-achieving individuals.
          </p>
        </div>
        
        <button 
          onClick={() => window.print()}
          className="btn-primary py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30 transition-all duration-300 group shrink-0 print:hidden"
        >
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:-translate-y-1">download</span>
          Download Brochure
        </button>
      </header>

      {/* Programs Explorer: Vertical List */}
      <section className="space-y-6">
        <div className="flex justify-between items-end mb-8 border-b border-outline-variant dark:border-slate-700 pb-4">
          <h2 className="font-display-xl text-3xl text-on-surface dark:text-white">Academic Pathways</h2>
          <span className="text-on-surface-variant dark:text-slate-400 font-body-md text-sm hidden md:block">3 Specialized Streams Available</span>
        </div>

        {/* Pathway Card 1: NIOS */}
            <div className="glass-card rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden shadow-sm hover:scale-[1.01] transition-transform dark:bg-slate-800/80">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 w-full md:w-24 h-24 flex-shrink-0 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center border border-black/5 dark:border-white/10 emerald-glow">
            <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
          </div>
          <div className="relative z-10 flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="font-display-xl text-2xl text-on-surface dark:text-white">NIOS Secondary &amp; Sr. Secondary</h3>
              <span className="bg-primary/10 text-primary px-3 py-0.5 rounded-full font-bold font-label-mono text-[10px] uppercase tracking-tighter">Fast-Track</span>
            </div>
            <p className="text-on-surface-variant dark:text-slate-300 font-body-md text-sm md:text-base mb-4 max-w-2xl">
              Flexible open schooling for standard 10th and 12th. Ideal for students pursuing professional sports, arts, or those needing a tailored academic pace. Recognized by all major universities globally.
            </p>
            <div className="flex flex-wrap gap-4 text-on-surface-variant dark:text-slate-400 font-label-mono text-xs">
              <span className="flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> MHRD Recognized</span>
              <span className="flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Flexible Exams</span>
              <span className="flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Credit Transfer</span>
            </div>
          </div>
          <div className="relative z-10 flex flex-col gap-3 w-full md:w-auto">
            <Link to="/support" className="btn-gradient text-white font-bold px-8 py-3 rounded-xl transition-all hover:brightness-110 active:scale-95 shadow-md shadow-primary/10 text-center">
              Apply Now
            </Link>
            <Link to="/support" className="text-on-surface-variant dark:text-slate-300 hover:text-primary dark:hover:text-primary font-bold font-label-mono text-[10px] uppercase text-center transition-colors">
              View Curriculum
            </Link>
          </div>
        </div>

        {/* Pathway Card 2: IGNOU */}
        <div className="glass-card rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden shadow-sm hover:scale-[1.01] transition-transform dark:bg-slate-800/80">
          <div className="absolute inset-0 bg-gradient-to-r from-tertiary/5 to-transparent pointer-events-none opacity-50"></div>
          <div className="relative z-10 w-full md:w-24 h-24 flex-shrink-0 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center border border-black/5 dark:border-white/10 cyan-glow">
            <span className="material-symbols-outlined text-tertiary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_ind</span>
          </div>
          <div className="relative z-10 flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="font-display-xl text-2xl text-on-surface dark:text-white">IGNOU University Portals</h3>
              <span className="bg-tertiary/10 text-tertiary px-3 py-0.5 rounded-full font-bold font-label-mono text-[10px] uppercase tracking-tighter">Direct Admission</span>
            </div>
            <p className="text-on-surface-variant dark:text-slate-300 font-body-md text-sm md:text-base mb-4 max-w-2xl">
              Elite support for Undergraduate and Postgraduate programs at the world's largest university. Complete end-to-end assistance from registration to assignment submissions and results.
            </p>
            <div className="flex flex-wrap gap-4 text-on-surface-variant dark:text-slate-400 font-label-mono text-xs">
              <span className="flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-sm text-tertiary">verified</span> NAAC A++ Grade</span>
              <span className="flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-sm text-tertiary">verified</span> Global Recognition</span>
              <span className="flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-sm text-tertiary">verified</span> Expert Mentorship</span>
            </div>
          </div>
          <div className="relative z-10 flex flex-col gap-3 w-full md:w-auto">
            <Link to="/support" className="bg-surface-container dark:bg-slate-700 text-on-surface dark:text-white font-bold px-8 py-3 rounded-xl border border-tertiary/20 hover:bg-tertiary/10 transition-all active:scale-95 shadow-sm text-center">
              Access Portal
            </Link>
            <Link to="/support" className="text-on-surface-variant dark:text-slate-300 hover:text-tertiary dark:hover:text-tertiary font-bold font-label-mono text-[10px] uppercase text-center transition-colors">
              Support Services
            </Link>
          </div>
        </div>

        {/* Pathway Card 3: Prestige */}
        <div className="glass-card rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden shadow-sm hover:scale-[1.01] transition-transform dark:bg-slate-800/80">
          <div className="absolute inset-0 bg-gradient-to-r from-premium-gold/5 to-transparent pointer-events-none opacity-50"></div>
          <div className="relative z-10 w-full md:w-24 h-24 flex-shrink-0 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center border border-black/5 dark:border-white/10 shadow-[0_10px_30px_-5px_rgba(180,83,9,0.15)]">
            <span className="material-symbols-outlined text-premium-gold text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          </div>
          <div className="relative z-10 flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="font-display-xl text-2xl text-on-surface dark:text-white">Prestige Degree Services</h3>
              <span className="bg-premium-gold/10 text-premium-gold px-3 py-0.5 rounded-full font-bold font-label-mono text-[10px] uppercase tracking-tighter">Elite Tier</span>
            </div>
            <p className="text-on-surface-variant dark:text-slate-300 font-body-md text-sm md:text-base mb-4 max-w-2xl">
              Bespoke academic consulting for top-tier private university placements and professional degree credentials. Specialized focus on Executive MBA, PhD guidance, and Technical Certifications.
            </p>
            <div className="flex flex-wrap gap-4 text-on-surface-variant dark:text-slate-400 font-label-mono text-xs">
              <span className="flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-sm text-premium-gold">stars</span> Premium Consulting</span>
              <span className="flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-sm text-premium-gold">stars</span> Profile Building</span>
              <span className="flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-sm text-premium-gold">stars</span> Fast Clearance</span>
            </div>
          </div>
          <div className="relative z-10 flex flex-col gap-3 w-full md:w-auto">
            <Link to="/support" className="bg-navy-deep dark:bg-premium-gold text-white font-bold px-8 py-3 rounded-xl transition-all hover:bg-slate-800 dark:hover:brightness-110 active:scale-95 shadow-md text-center">
              Apply Now
            </Link>
            <Link to="/support" className="text-on-surface-variant dark:text-slate-300 hover:text-primary dark:hover:text-premium-gold font-bold font-label-mono text-[10px] uppercase text-center transition-colors">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        style={{ opacity: statsOpacity, y: statsY }}
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="glass-card rounded-xl p-8 text-center border-b-4 border-b-primary shadow-sm dark:bg-slate-800/80">
          <div className="text-primary font-display-xl text-4xl mb-2">15k+</div>
          <div className="text-on-surface-variant dark:text-slate-400 font-bold font-label-mono text-[10px] uppercase tracking-widest">Successful Admissions</div>
        </div>
        <div className="glass-card rounded-xl p-8 text-center border-b-4 border-b-tertiary shadow-sm dark:bg-slate-800/80">
          <div className="text-tertiary font-display-xl text-4xl mb-2">99%</div>
          <div className="text-on-surface-variant dark:text-slate-400 font-bold font-label-mono text-[10px] uppercase tracking-widest">Approval Rate</div>
        </div>
        <div className="glass-card rounded-xl p-8 text-center border-b-4 border-b-primary shadow-sm dark:bg-slate-800/80">
          <div className="text-primary font-display-xl text-4xl mb-2">24/7</div>
          <div className="text-on-surface-variant dark:text-slate-400 font-bold font-label-mono text-[10px] uppercase tracking-widest">Academic Support</div>
        </div>
      </motion.section>
    </main>
  );
}
