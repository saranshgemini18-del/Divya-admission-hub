import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function DevelopedBy() {
  return (
    <div className="w-full min-h-screen bg-surface dark:bg-slate-900 text-on-surface dark:text-slate-200">
      <SEO 
        title="Technical Architecture & Credits" 
        description="Engineering and technology overview of Divya Admission Hub. High-performance, responsive academic web application built on React 19, Vite, and Tailwind CSS." 
        keywords="developer, divya admission hub, platform development, technical credits, web application architecture" 
        schema={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Technical Architecture of Divya Admission Hub",
          "description": "High-performance architecture specifications of the Divya Admission Hub platform.",
          "author": {
            "@type": "EducationalOrganization",
            "name": "Divya Admission Hub"
          }
        }}
      />
      <div className="relative z-10 pt-28 md:pt-36 pb-24 px-4 md:px-12 max-w-[1280px] mx-auto">
        <header className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="material-symbols-outlined text-emerald-accent text-sm">terminal</span>
            <span className="font-label-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Engineering Architecture
            </span>
          </div>
          <h1 className="font-display-xl text-4xl sm:text-5xl md:text-6xl text-navy-deep dark:text-white leading-tight mb-4">
            Built for Speed &amp; <span className="text-emerald-accent">Reliability</span>
          </h1>
          <p className="text-on-surface-variant dark:text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Crafting a lightning-fast, accessible academic portal that connects students seamlessly with accredited education credentials.
          </p>
        </header>

        <section className="flex justify-center mb-16">
          <div className="max-w-2xl w-full glass-panel p-8 md:p-12 rounded-3xl border border-glass-border dark:border-white/10 shadow-xl relative overflow-hidden bg-white/85 dark:bg-slate-800/90 text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-emerald-accent/15 flex items-center justify-center mb-6 shadow-sm border border-emerald-accent/30 text-emerald-600 dark:text-emerald-400">
              <span className="material-symbols-outlined text-4xl">code</span>
            </div>
            <h2 className="font-display-xl text-2xl md:text-3xl text-navy-deep dark:text-white mb-1">
              Engineering Specifications
            </h2>
            <p className="text-emerald-accent font-label-mono font-bold tracking-widest text-xs mb-6 uppercase">
              Production Client Application
            </p>
            
            <p className="text-on-surface-variant dark:text-slate-300 text-sm md:text-base leading-relaxed mb-8">
              This platform was architected to ensure instant initial painting, zero layout jitter, and high Lighthouse performance. It is built on React 19, Vite, Tailwind CSS, and optimized Framer Motion transitions with client-side SEO and Schema.org structured data.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-left">
              <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10">
                <span className="font-label-mono text-[10px] uppercase text-on-surface-variant dark:text-slate-400 block font-bold">Runtime</span>
                <span className="font-bold text-xs text-navy-deep dark:text-white">React 19 + Vite</span>
              </div>
              <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10">
                <span className="font-label-mono text-[10px] uppercase text-on-surface-variant dark:text-slate-400 block font-bold">Styling</span>
                <span className="font-bold text-xs text-navy-deep dark:text-white">Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10">
                <span className="font-label-mono text-[10px] uppercase text-on-surface-variant dark:text-slate-400 block font-bold">Animations</span>
                <span className="font-bold text-xs text-navy-deep dark:text-white">Zero-Jank GPU</span>
              </div>
              <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10">
                <span className="font-label-mono text-[10px] uppercase text-on-surface-variant dark:text-slate-400 block font-bold">SEO</span>
                <span className="font-bold text-xs text-navy-deep dark:text-white">JSON-LD + OpenGraph</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to="/"
                className="px-6 py-3 rounded-full bg-navy-deep hover:bg-slate-800 text-white font-label-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-base">home</span>
                Return to Home
              </Link>
              <a 
                href="mailto:Divya19970719@gmail.com"
                className="px-6 py-3 rounded-full bg-emerald-accent hover:bg-emerald-600 text-white font-label-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-base">mail</span>
                Contact Administrator
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
