import React from 'react';

const COVERED_LOCALITIES = [
  { name: 'Dayalpur (Hub)', pin: '110094', badge: 'Primary Center' },
  { name: 'Bhajanpura', pin: '110053', badge: '5 Mins' },
  { name: 'Karawal Nagar', pin: '110094', badge: 'Immediate' },
  { name: 'Yamuna Vihar', pin: '110053', badge: 'Adjacent' },
  { name: 'Khajuri Khas', pin: '110094', badge: 'Nearby' },
  { name: 'Gokalpuri', pin: '110094', badge: 'Metro Connected' },
  { name: 'Shahdara', pin: '110032', badge: 'North East Delhi' },
  { name: 'Dilshad Garden', pin: '110095', badge: 'Direct Route' },
  { name: 'Seelampur', pin: '110053', badge: '10 Mins' },
  { name: 'Nand Nagri', pin: '110093', badge: 'Nearby' },
  { name: 'Shastri Park', pin: '110053', badge: 'Central' },
  { name: 'Delhi NCR Region', pin: 'All Pincodes', badge: 'Online & In-Person' },
];

export default function LocalCatchment() {
  return (
    <section className="mb-28 md:mb-36" id="local-presence" aria-labelledby="local-heading">
      <div className="glass-panel p-8 md:p-12 rounded-3xl border border-glass-border dark:border-white/10 shadow-xl bg-gradient-to-br from-white/90 via-slate-50/80 to-emerald-50/30 dark:from-slate-900/90 dark:via-slate-800/80 dark:to-emerald-950/20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Local Search Authority Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-700/60 text-xs font-bold font-label-mono uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>Local Open Schooling &amp; Admission Center</span>
            </div>

            <h2 id="local-heading" className="font-display-xl text-3xl sm:text-4xl text-navy-deep dark:text-white font-bold leading-tight">
              Class 10th &amp; 12th by Open <span className="text-emerald-accent">Near Me</span> in Dayalpur, Delhi
            </h2>

            <p className="text-on-surface-variant dark:text-slate-300 text-sm md:text-base leading-relaxed">
              Conveniently located in North East Delhi, <strong>Divya Admission Hub</strong> is the highest-rated academic counseling center for students seeking <strong>Class 10th by open</strong> and <strong>Class 12th by open near me</strong>. We facilitate official registration, Stream 1 &amp; 2 admissions, On-Demand exam booking, and mark transfer (TOC) right at your doorstep.
            </p>

            {/* Localities Tags Grid */}
            <div className="pt-2">
              <span className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant dark:text-slate-400 font-bold block mb-3">
                Serving Students Across Nearby Localities &amp; Delhi NCR:
              </span>
              <div className="flex flex-wrap gap-2">
                {COVERED_LOCALITIES.map((loc, idx) => (
                  <div 
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-glass-border dark:border-white/10 text-xs font-medium shadow-2xs hover:border-emerald-accent/50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-emerald-accent text-sm">check</span>
                    <span className="text-navy-deep dark:text-white font-semibold">{loc.name}</span>
                    <span className="text-[10px] text-on-surface-variant dark:text-slate-400 font-label-mono">({loc.badge})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Benefits Checklist for Local Students */}
            <div className="grid sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-on-surface-variant dark:text-slate-300">
                <span className="material-symbols-outlined text-emerald-accent text-base mt-0.5">verified</span>
                <span>Direct on-spot documentation &amp; verification</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-on-surface-variant dark:text-slate-300">
                <span className="material-symbols-outlined text-emerald-accent text-base mt-0.5">verified</span>
                <span>Solved TMA assignments &amp; study books support</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-on-surface-variant dark:text-slate-300">
                <span className="material-symbols-outlined text-emerald-accent text-base mt-0.5">verified</span>
                <span>Practical exam center guidance in Delhi</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-on-surface-variant dark:text-slate-300">
                <span className="material-symbols-outlined text-emerald-accent text-base mt-0.5">verified</span>
                <span>One-on-one counselor guidance with Divya Dhariwal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Center Details Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-glass-border dark:border-white/10 shadow-lg bg-white/90 dark:bg-slate-850/95 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-glass-border dark:border-white/10">
                <div>
                  <span className="font-label-mono text-[10px] uppercase text-emerald-accent font-bold tracking-widest block">
                    Physical Consultation Office
                  </span>
                  <h3 className="font-display-xl text-xl font-bold text-navy-deep dark:text-white">
                    Dayalpur Center
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-accent/10 border border-emerald-accent/20 flex items-center justify-center text-emerald-accent">
                  <span className="material-symbols-outlined text-2xl">storefront</span>
                </div>
              </div>

              {/* Address with Landmark */}
              <div className="flex items-start gap-3.5">
                <span className="material-symbols-outlined text-emerald-accent text-xl mt-0.5 shrink-0">pin_drop</span>
                <div>
                  <h4 className="font-display-xl text-sm font-bold text-navy-deep dark:text-white">Center Address &amp; Landmark</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant dark:text-slate-300 leading-relaxed mt-0.5">
                    2nd Floor, Prime Dental Clinic, Near Pani Ki Tanki, Dayal Pur, Delhi - 110094
                  </p>
                  <span className="text-[11px] font-label-mono text-emerald-700 dark:text-emerald-400 font-bold block mt-1">
                    Landmark: Above Prime Dental Clinic, Pani Ki Tanki Road
                  </span>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3.5">
                <span className="material-symbols-outlined text-cyan-700 dark:text-cyan-400 text-xl mt-0.5 shrink-0">schedule</span>
                <div>
                  <h4 className="font-display-xl text-sm font-bold text-navy-deep dark:text-white">Visiting &amp; Consultation Hours</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant dark:text-slate-300 mt-0.5">
                    Monday &ndash; Saturday: <strong>09:30 AM &ndash; 07:30 PM</strong>
                  </p>
                  <p className="text-[11px] text-on-surface-variant dark:text-slate-400 font-label-mono mt-0.5">
                    Sunday: By prior phone appointment
                  </p>
                </div>
              </div>

              {/* Direct Contact Buttons */}
              <div className="pt-2 space-y-2.5">
                <a 
                  href="tel:+918178056407"
                  className="w-full bg-emerald-accent hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-xs font-label-mono transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  <span>Call Center: +91 8178056407</span>
                </a>
                
                <a 
                  href="https://maps.google.com/?q=28.7174,77.2662"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full glass-panel hover:bg-black/5 dark:hover:bg-white/10 text-navy-deep dark:text-white font-bold py-3 px-4 rounded-xl text-xs font-label-mono transition-all border border-glass-border dark:border-white/10 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base text-cyan-600 dark:text-cyan-400">directions</span>
                  <span>Get GPS Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
