import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function DevelopedBy() {
  const developerName = "Saransh";
  const developerPhone = "+918851285088";
  const developerPhoneDisplay = "+91 8851285088";

  return (
    <div className="w-full min-h-screen bg-surface dark:bg-slate-900 text-on-surface dark:text-slate-200">
      <SEO 
        title={`Developed by ${developerName} (${developerPhoneDisplay})`}
        description={`Platform technical credits and engineering architecture for Divya Admission Hub, developed by ${developerName} (${developerPhoneDisplay}).`}
        noindex={true}
      />
      <div className="relative z-10 pt-28 md:pt-36 pb-24 px-4 md:px-12 max-w-[1280px] mx-auto">
        <header className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="material-symbols-outlined text-emerald-accent text-sm">terminal</span>
            <span className="font-label-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              Engineering &amp; Development Credits
            </span>
          </div>
          <h1 className="font-display-xl text-4xl sm:text-5xl md:text-6xl text-navy-deep dark:text-white leading-tight mb-4">
            Architected &amp; Built by <span className="text-emerald-accent">{developerName}</span>
          </h1>
          <p className="text-on-surface-variant dark:text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            High-performance, accessible academic portal developed by {developerName} for Divya Admission Hub, Dayalpur, Delhi.
          </p>
        </header>

        {/* Developer Contact & Profile Card */}
        <section className="flex justify-center mb-12">
          <div className="max-w-2xl w-full glass-panel p-8 md:p-10 rounded-3xl border border-glass-border dark:border-white/10 shadow-xl relative overflow-hidden bg-white/90 dark:bg-slate-800/90 text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center mb-4 shadow-sm border border-emerald-300/60 dark:border-emerald-700/60 text-emerald-900 dark:text-emerald-300">
              <span className="material-symbols-outlined text-4xl">code</span>
            </div>
            
            <h2 className="font-display-xl text-3xl font-extrabold text-navy-deep dark:text-white mb-1">
              {developerName}
            </h2>
            <p className="text-emerald-700 dark:text-emerald-400 font-label-mono font-bold tracking-widest text-xs mb-4 uppercase">
              Lead Software Engineer &amp; Web Architect
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 mb-6">
              <span className="material-symbols-outlined text-emerald-accent text-lg">call</span>
              <a 
                href={`tel:${developerPhone}`} 
                className="font-label-mono text-sm sm:text-base font-bold text-navy-deep dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {developerPhoneDisplay}
              </a>
            </div>

            <p className="text-on-surface-variant dark:text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Designed and developed with ultra-fast page load speeds, responsive design, 100/100 Lighthouse SEO architecture, and zero-layout-shift UI engineering.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <a 
                href={`tel:${developerPhone}`}
                className="px-6 py-3 rounded-full bg-emerald-accent hover:bg-emerald-700 text-white font-label-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Call {developerPhoneDisplay}
              </a>
              <a 
                href={`https://wa.me/918851285088?text=${encodeURIComponent(`Hello ${developerName}, I am contacting you regarding your web development work on Divya Admission Hub.`)}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-label-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                WhatsApp {developerName}
              </a>
            </div>

            {/* Architecture Stack */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-left">
              <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10">
                <span className="font-label-mono text-[10px] uppercase text-on-surface-variant dark:text-slate-400 block font-bold">Runtime</span>
                <span className="font-bold text-xs text-navy-deep dark:text-white">React 19 + Vite</span>
              </div>
              <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10">
                <span className="font-label-mono text-[10px] uppercase text-on-surface-variant dark:text-slate-400 block font-bold">Styling</span>
                <span className="font-bold text-xs text-navy-deep dark:text-white">Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10">
                <span className="font-label-mono text-[10px] uppercase text-on-surface-variant dark:text-slate-400 block font-bold">Layout Shift</span>
                <span className="font-bold text-xs text-navy-deep dark:text-white">0.000 CLS</span>
              </div>
              <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10">
                <span className="font-label-mono text-[10px] uppercase text-on-surface-variant dark:text-slate-400 block font-bold">Structured Data</span>
                <span className="font-bold text-xs text-navy-deep dark:text-white">JSON-LD Graph</span>
              </div>
            </div>

            <div className="pt-2 border-t border-glass-border dark:border-white/10 flex justify-center">
              <Link 
                to="/"
                className="px-6 py-2.5 rounded-full bg-navy-deep hover:bg-slate-800 text-white font-label-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-base">home</span>
                Go to Divya Admission Hub Homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
