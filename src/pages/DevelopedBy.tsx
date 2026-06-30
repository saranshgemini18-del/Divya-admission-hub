import SEO from '../components/SEO';

export default function DevelopedBy() {
  return (
    <div className="w-full min-h-screen bg-surface dark:bg-slate-900 text-on-surface dark:text-slate-200">
      <SEO 
        title="Developed By" 
        description="Information about the development of the Divya Admission Hub platform." 
        keywords="developer, divya admission hub, platform development" 
      />
      <div className="relative z-10 pt-32 pb-24 md:pt-40 px-6 md:px-16 max-w-[1280px] mx-auto">
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/50 border border-secondary/20 mb-6">
            <span className="material-symbols-outlined text-secondary text-sm">code</span>
            <span className="font-label-mono text-xs font-bold text-secondary uppercase tracking-wider">Credits</span>
          </div>
          <h1 className="font-display-xl text-5xl md:text-6xl text-navy-deep dark:text-white leading-tight mb-6">
            Developed By
          </h1>
          <p className="text-on-surface-variant dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Crafting elegant digital experiences that empower institutions to reach their full potential.
          </p>
        </header>

        <section className="flex justify-center mb-20">
          <div className="max-w-xl w-full glass-panel p-8 md:p-12 rounded-3xl border border-glass-border dark:border-white/10 shadow-lg relative overflow-hidden bg-white/40 dark:bg-slate-800/80 text-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-6 shadow-md border-4 border-white dark:border-slate-800">
               <span className="material-symbols-outlined text-5xl text-slate-500 dark:text-slate-400">person</span>
             </div>
             <h2 className="font-display-xl text-3xl text-navy-deep dark:text-white mb-2">Technical Team</h2>
             <p className="text-emerald-accent font-label-mono font-bold tracking-widest text-sm mb-6 uppercase">Lead Engineering</p>
             
             <p className="text-on-surface-variant dark:text-slate-300 text-base leading-relaxed mb-8">
               This platform was architected and built to deliver a seamless, high-performance experience. Utilizing modern web technologies such as React, Tailwind CSS, and Framer Motion, the application ensures responsiveness, accessibility, and an engaging user interface.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@example.com"
                  className="px-6 py-3 rounded-full bg-navy-deep dark:bg-slate-800 text-white font-label-mono text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">mail</span>
                  Contact Developer
                </a>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
