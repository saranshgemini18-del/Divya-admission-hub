import React from 'react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="w-full min-h-screen bg-surface dark:bg-slate-900 text-on-surface dark:text-slate-200">
      <SEO 
        title="About Divya Dhariwal & Divya Admission Hub | 12+ Years Excellence" 
        description="Founded by Divya Dhariwal, Divya Admission Hub is India's premier academic consultancy with 15,000+ students guided for NIOS, IGNOU, and university degrees." 
        keywords="divya dhariwal, about divya admission hub, educational consultancy delhi, academic counseling excellence, NIOS admission guidance director, IGNOU counselors, Dayalpur Delhi 110094" 
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Divya Admission Hub",
          "url": "https://divyaadmissionhub.com/about",
          "description": "Educational leadership and 12+ years history of Divya Admission Hub under Divya Dhariwal.",
          "mainEntity": {
            "@type": "EducationalOrganization",
            "name": "Divya Admission Hub",
            "founder": {
              "@type": "Person",
              "name": "Divya Dhariwal",
              "jobTitle": "Principal Academic Strategist & Founder",
              "sameAs": "https://instagram.com/dhriti19977777"
            }
          }
        }}
      />
      
      <div className="relative z-10 pt-28 md:pt-36 pb-24 px-4 md:px-12 max-w-[1280px] mx-auto">
        {/* Header */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="material-symbols-outlined text-emerald-accent text-sm">verified</span>
            <span className="font-label-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              12+ Years of Educational Leadership
            </span>
          </div>
          <h1 className="font-display-xl text-4xl sm:text-5xl md:text-6xl text-navy-deep dark:text-white leading-[1.15] mb-5 font-bold">
            Bridging Potential with <span className="text-emerald-accent">Academic Success</span>
          </h1>
          <p className="text-on-surface-variant dark:text-slate-300 text-base md:text-xl leading-relaxed">
            Divya Admission Hub was founded with a singular purpose: to remove bureaucratic obstacles and provide unambiguous, authoritative guidance for secondary schooling and higher education degrees.
          </p>
        </header>

        {/* Story & Philosophy */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="space-y-5">
            <span className="font-label-mono text-xs uppercase tracking-widest text-emerald-accent font-bold">
              Our Genesis
            </span>
            <h2 className="font-display-xl text-3xl md:text-4xl text-navy-deep dark:text-white">
              Every Learner Deserves an Open Pathway
            </h2>
            <p className="text-on-surface-variant dark:text-slate-300 text-base leading-relaxed">
              Traditional educational systems often leave behind sports athletes, creative professionals, and students facing sudden health or academic interruptions. We recognized that boards like NIOS and open universities like IGNOU provide extraordinary opportunities, yet their procedures, subject choices, and documentation can be confusing.
            </p>
            <p className="text-on-surface-variant dark:text-slate-300 text-base leading-relaxed">
              For over a decade, Divya Admission Hub has served as a trusted partner for families across India. We ensure correct subject mapping, assist with Transfer of Credit (TOC) to save precious academic years, and guide candidates all the way to graduation and doctoral research.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10">
                <span className="font-display-xl text-2xl font-bold text-emerald-accent block">15,000+</span>
                <span className="text-xs text-on-surface-variant dark:text-slate-400 font-medium">Students Successfully Enrolled</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10">
                <span className="font-display-xl text-2xl font-bold text-emerald-accent block">99.4%</span>
                <span className="text-xs text-on-surface-variant dark:text-slate-400 font-medium">Clearance &amp; Verification Rate</span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-10 rounded-3xl border border-glass-border dark:border-white/10 shadow-lg bg-white/80 dark:bg-slate-800/80">
            <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white mb-6">
              Our Core Principles
            </h3>
            <ul className="space-y-4">
              {[
                { 
                  title: '100% Authenticity & Transparency', 
                  desc: 'We only partner with UGC, AIU, MHRD, and AICTE recognized boards and universities. No unverified promises or shortcuts.' 
                },
                { 
                  title: 'Academic Year Protection', 
                  desc: 'Through Transfer of Credit (TOC) and on-demand examination roadmaps, we prevent students from losing crucial academic years.' 
                },
                { 
                  title: 'Full Lifecycle Mentorship', 
                  desc: 'From syllabus selection to solved assignments, practical preparations, admit cards, and final marksheet delivery.' 
                },
                { 
                  title: 'Accessible & Empathetic Counseling', 
                  desc: 'Direct access to senior education strategists without corporate red tape or hidden fee escalations.' 
                }
              ].map((value, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-emerald-accent/15 text-emerald-accent flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-deep dark:text-white text-base">{value.title}</h4>
                    <p className="text-on-surface-variant dark:text-slate-300 text-xs md:text-sm mt-1 leading-relaxed">{value.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Director's Profile & Note */}
        <section className="mb-20 glass-card rounded-3xl p-8 md:p-12 border border-glass-border dark:border-white/10 bg-white/70 dark:bg-slate-800/70 relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Director Photo Frame */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border-4 border-emerald-accent/30 shadow-2xl bg-slate-900 group">
                <img 
                  src="/director-divya.svg" 
                  alt="Divya Dhariwal - Founder & Director, Divya Admission Hub" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-label-mono text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-500/30">
                    Founder &amp; Director
                  </span>
                </div>
              </div>
            </div>

            {/* Director's Note & Philosophy */}
            <div className="md:col-span-7 space-y-5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-label-mono uppercase">
                <span className="material-symbols-outlined text-sm">format_quote</span> Director's Note
              </div>
              <blockquote className="font-display-xl text-xl sm:text-2xl text-navy-deep dark:text-white leading-relaxed italic">
                "Education is not one-size-fits-all. When a student discovers the right flexible academic pathway, their confidence returns and their career takes flight. That is the mission that drives us every single day."
              </blockquote>
              <div className="space-y-1">
                <h3 className="font-display-xl text-2xl font-bold text-navy-deep dark:text-white">Divya Dhariwal</h3>
                <p className="font-label-mono text-xs text-emerald-accent uppercase font-bold tracking-wider">
                  Founder &amp; Principal Academic Counselor
                </p>
              </div>
              <p className="text-on-surface-variant dark:text-slate-300 text-sm leading-relaxed">
                With more than 12 years of hands-on counseling experience, Divya Dhariwal has helped over 15,000 students navigate board certifications, university lateral entries, and doctoral research proposals. Her student-first approach ensures every learner receives honest, verified, and personalized guidance.
              </p>
              
              <div className="pt-3 flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href="https://wa.me/918178056407?text=Hello%20Divya%20Dhariwal,%20I%20would%20like%20to%20consult%20regarding%20my%20academic%20pathway." 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-emerald-accent hover:bg-emerald-600 text-white font-label-mono text-xs font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-md transition-all"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  Connect Directly on WhatsApp
                </a>
                <a 
                  href="https://instagram.com/dhriti19977777" 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass-panel text-navy-deep dark:text-white font-label-mono text-xs font-bold px-5 py-3 rounded-full inline-flex items-center gap-2 border border-glass-border dark:border-white/10 hover:text-emerald-accent transition-colors"
                >
                  <span className="material-symbols-outlined text-sm text-[#E1306C]">photo_camera</span>
                  Instagram @dhriti19977777
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="text-center max-w-xl mx-auto">
          <h2 className="font-display-xl text-3xl text-navy-deep dark:text-white mb-4">
            Begin Your Consultation
          </h2>
          <p className="text-on-surface-variant dark:text-slate-300 text-sm md:text-base mb-6">
            Speak directly with Divya Dhariwal and senior counselors regarding your 2024-25 admissions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/918178056407?text=Hello%20Divya%20Dhariwal,%20I%20would%20like%20to%20consult%20regarding%20my%20admission%20pathway."
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 bg-emerald-accent hover:bg-emerald-600 text-white px-8 py-3.5 rounded-full font-label-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-accent/20 transition-all hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              WhatsApp Director Directly
            </a>
            <a 
              href="tel:+918178056407"
              className="inline-flex items-center gap-2 bg-navy-deep hover:bg-slate-800 text-white px-7 py-3.5 rounded-full font-label-mono text-xs font-bold uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined text-base">call</span>
              +91 81780 56407
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
