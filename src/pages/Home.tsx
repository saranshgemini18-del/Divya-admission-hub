import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Testimonials from '../components/Testimonials';
import InteractiveRoadmap from '../components/InteractiveRoadmap';
import SEO from '../components/SEO';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    course: 'NIOS Secondary/Sr. Secondary',
    phone: ''
  });

  const programsRef = useRef<HTMLElement>(null);
  const workflowRef = useRef<HTMLElement>(null);

  const { scrollYProgress: programsProgress } = useScroll({
    target: programsRef,
    offset: ["0 1", "0.3 1"]
  });
  const programsOpacity = useTransform(programsProgress, [0, 1], [0, 1]);
  const programsY = useTransform(programsProgress, [0, 1], [50, 0]);

  const { scrollYProgress: workflowProgress } = useScroll({
    target: workflowRef,
    offset: ["0 1", "0.3 1"]
  });
  const workflowOpacity = useTransform(workflowProgress, [0, 1], [0, 1]);
  const workflowY = useTransform(workflowProgress, [0, 1], [50, 0]);

  useEffect(() => {
    const heroCard = document.getElementById('hero-card');
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroCard) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      
      const rotateY = x * 15; 
      const rotateX = -y * 15; 
      
      heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
        alert("Please fill in your name and contact number.");
        return;
    }

    const message = `Hello Divya Admission Hub! I am interested in admission for ${formData.course}. My details: Name: ${formData.name}, Phone: ${formData.phone}. Please guide me on the next steps.`;
    const waUrl = `https://wa.me/918178056407?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative z-10 pt-32 px-6 md:px-16 max-w-[1280px] mx-auto">
      <SEO 
        title="Home" 
        description="Elite educational consulting for global standard credentials. Secure your academic future with expert guidance for NIOS, IGNOU, and doctoral research." 
        keywords="educational consulting, academic guidance, NIOS admissions, IGNOU support, PhD assistance" 
      />
      {/* Hero Section */}
      <section className="min-h-[707px] flex flex-col justify-center items-center gap-12 text-center mb-32" id="home">
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 self-center bg-premium-gold/10 border border-premium-gold/20 px-4 py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-premium-gold text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span className="font-label-mono text-[10px] tracking-widest text-premium-gold uppercase font-bold">Elite Academic Consultancy</span>
          </div>
          <h1 className="font-display-xl text-5xl md:text-display-xl text-on-surface dark:text-white leading-tight">
            Empowering <span className="text-navy-deep dark:text-slate-300 italic">Global</span> <span className="text-emerald-accent">Scholars</span>.
          </h1>
          <p className="font-body-md text-on-surface-variant dark:text-slate-400 text-lg opacity-90">
            Seamless admissions for NIOS, IGNOU, and Elite Degree Programs. We bridge the gap between your ambition and the world's most prestigious institutions.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <Link to="/programs" className="bg-navy-deep text-white font-bold px-8 py-4 rounded-full flex items-center gap-3 shadow-lg shadow-navy-deep/20 hover:scale-105 transition-transform">
              Explore Verticals <span className="material-symbols-outlined text-emerald-accent">arrow_forward</span>
            </Link>
            <button onClick={() => scrollToSection('workflow')} className="glass-panel text-navy-deep dark:text-white font-bold px-8 py-4 rounded-full border border-glass-border dark:border-white/20 hover:bg-navy-deep/5 dark:hover:bg-white/10 transition-colors">
              View Process
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">
            <a 
              href="https://wa.me/918178056407" 
              target="_blank" 
              rel="noreferrer" 
              className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white/40 dark:bg-slate-800/50 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-xl hover:shadow-[#25D366]/20 transition-all duration-300 hover:scale-110 overflow-hidden"
              aria-label="WhatsApp Contact"
            >
              <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-[#25D366] drop-shadow-sm transition-transform duration-300 group-hover:scale-110 relative z-10">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
            
            <a 
              href="https://instagram.com/directordivya" 
              target="_blank" 
              rel="noreferrer" 
              className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white/40 dark:bg-slate-800/50 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-xl hover:shadow-[#E1306C]/20 transition-all duration-300 hover:scale-110 overflow-hidden"
              aria-label="Instagram Page"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="url(#ig-grad)" className="drop-shadow-sm transition-transform duration-300 group-hover:scale-110 relative z-10">
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F58529" />
                    <stop offset="50%" stopColor="#DD2A7B" />
                    <stop offset="100%" stopColor="#8134AF" />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            
            <a 
              href="mailto:divyaadmissionhub@gmail.com" 
              className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white/40 dark:bg-slate-800/50 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-xl hover:shadow-[#D44638]/20 transition-all duration-300 hover:scale-110 overflow-hidden"
              aria-label="Email Us"
            >
              <div className="absolute inset-0 bg-[#D44638] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="material-symbols-outlined text-[#D44638] text-2xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110 relative z-10">mail</span>
            </a>
          </div>
        </div>
      </section>

      {/* Support Verticals - Bento Grid */}
      <motion.section 
        ref={programsRef} 
        style={{ opacity: programsOpacity, y: programsY }} 
        className="mb-48" 
        id="programs-section"
      >
        <div className="flex flex-col items-center mb-16 gap-2">
          <h2 className="font-display-xl text-3xl md:text-5xl text-center dark:text-white">Academic <span className="text-premium-gold">Verticals</span></h2>
          <div className="h-1 w-24 bg-emerald-accent rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* NIOS Card */}
          <Link to="/programs" className="glass-panel p-8 rounded-3xl border border-glass-border dark:border-white/10 dark:bg-slate-800/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.05)] dark:shadow-none group hover:scale-[1.02] transition-all relative overflow-hidden h-[400px] flex flex-col justify-end shadow-md">
            <div className="absolute inset-0 z-[-1] opacity-40 group-hover:opacity-60 transition-opacity mix-blend-multiply dark:mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEMDK-lMRgWcjlI2V-PjeDCPVkV6Sfs1gqwoVcpwF4PX4y3cyZ4InOCUEdyeVazEJdD-34t4j8JIsQK_QIYn_-nCISUVJ8daYKRWW616jEUXd2dLgvrZtJvbakJ2nMAc8Pb3nQFlz1E_zYJ0NNe5Se5BB3qgDx-tcehKiClJKmykOGLOvjrFFOGqhCMIUaKsTGz-ExJApogZPEOplV-f8d9ry0o9tHmFtzRoK-D8OejFdWc5PpUAiLUsUl5NV61k5Fd_96LH1ht7bc')", backgroundSize: "cover" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80 z-[-1]"></div>
            <div className="absolute top-8 left-8 bg-navy-deep/5 dark:bg-white/10 p-4 rounded-2xl border border-navy-deep/10 dark:border-white/20 backdrop-blur-sm">
              <span className="material-symbols-outlined text-navy-deep dark:text-white text-4xl">menu_book</span>
            </div>
            <div>
              <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white mb-2">NIOS Board</h3>
              <p className="text-on-surface-variant dark:text-slate-300 text-sm mb-4 font-medium">Complete secondary and senior secondary certifications with expert guidance and flexible learning.</p>
              <div className="flex items-center gap-2 text-emerald-accent font-bold text-sm">
                EXPLORE PROGRAM <span className="material-symbols-outlined">trending_flat</span>
              </div>
            </div>
          </Link>

          {/* IGNOU Card */}
          <Link to="/programs" className="glass-panel p-8 rounded-3xl border border-glass-border dark:border-white/10 dark:bg-slate-800/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.05)] dark:shadow-none group hover:scale-[1.02] transition-all relative overflow-hidden h-[400px] flex flex-col justify-end shadow-md">
            <div className="absolute inset-0 z-[-1] opacity-40 group-hover:opacity-60 transition-opacity mix-blend-multiply dark:mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVMwjtUhCPg8U4xJv8zNAJ7uGCljEnFm4qzAJvubGt38H3nDCho-gixkJaGULtYwdIKQupr1MphBNdqVanl5F-ro7e09LpDzImw395NJ8numR6ZdeE7CoBhaTs5qGpfNLGlau3ykiFocGhug87axbjlNgpPyzQTC-uU1bCTVWwwAD6f1SnUS5uMpmUldbjWjgajjCGiZMGyCSFVXA5KDRe1QqTrYbbi_53wgcDlJP9-GEAmdMNW2uPEHVOJw0euei4qfsYjrI6qkUb')", backgroundSize: "cover" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80 z-[-1]"></div>
            <div className="absolute top-8 left-8 bg-emerald-accent/5 dark:bg-emerald-accent/20 p-4 rounded-2xl border border-emerald-accent/10 dark:border-emerald-accent/30 backdrop-blur-sm">
              <span className="material-symbols-outlined text-emerald-accent text-4xl">edit_note</span>
            </div>
            <div>
              <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white mb-2">IGNOU Hub</h3>
              <p className="text-on-surface-variant dark:text-slate-300 text-sm mb-4 font-medium">End-to-end support for Undergraduate and Postgraduate programs from India's largest open university.</p>
              <div className="flex items-center gap-2 text-emerald-accent font-bold text-sm">
                VIEW SUPPORT <span className="material-symbols-outlined">trending_flat</span>
              </div>
            </div>
          </Link>

          {/* Degrees Card */}
          <Link to="/programs" className="glass-panel p-8 rounded-3xl border border-glass-border dark:border-white/10 dark:bg-slate-800/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.05)] dark:shadow-none group hover:scale-[1.02] transition-all relative overflow-hidden h-[400px] flex flex-col justify-end shadow-md">
            <div className="absolute inset-0 z-[-1] opacity-40 group-hover:opacity-60 transition-opacity mix-blend-multiply dark:mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZQZ5jTABr8F0LhMcuRwZoRQS_DMSbp4nY_ytGR8mcwPcbpGf8at5PiWpOGSoBphrJd16UBHyfYZF1nADshyGlAa8OTKVkNm2lpc2iokGzqHedWWb_2c-Kg4u0RjfqWRab8eAMwsCiy2BwPVDG0s71iavDkVhRsJ7cxrBoDxKM13ZmyZ-qom7HFnlfjPbPukWOLQZbR_AlRKoYgfm2KEBQjiZtSxvm5O9PGWgZ-KisR_aWA3E1PCactfPf1mv-0lQyMKTNGzjOFHK2')", backgroundSize: "cover" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80 z-[-1]"></div>
            <div className="absolute top-8 left-8 bg-premium-gold/5 dark:bg-premium-gold/20 p-4 rounded-2xl border border-premium-gold/10 dark:border-premium-gold/30 backdrop-blur-sm">
              <span className="material-symbols-outlined text-premium-gold text-4xl">workspace_premium</span>
            </div>
            <div>
              <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white mb-2">Elite Degrees</h3>
              <p className="text-on-surface-variant dark:text-slate-300 text-sm mb-4 font-medium">Direct admission assistance for regular B.Tech, MBA, and PhD programs in top-tier colleges.</p>
              <div className="flex items-center gap-2 text-emerald-accent font-bold text-sm">
                SEE COLLEGES <span className="material-symbols-outlined">trending_flat</span>
              </div>
            </div>
          </Link>
        </div>
      </motion.section>

      {/* Workflow Timeline */}
      <motion.section 
        ref={workflowRef} 
        style={{ opacity: workflowOpacity, y: workflowY }} 
        className="mb-48" 
        id="workflow"
      >
        <div className="flex flex-col mb-12">
          <h2 className="font-display-xl text-4xl text-on-surface dark:text-white leading-tight mb-4">Your Journey to <br/><span className="text-emerald-accent">Academic Excellence</span></h2>
          <p className="text-on-surface-variant dark:text-slate-400 text-lg max-w-2xl">Our streamlined workflow ensures a hassle-free transition into your chosen academic path. Track your progress from initial consultation to final enrollment.</p>
        </div>
        
        <InteractiveRoadmap />
      </motion.section>

      {/* Testimonials */}
      <Testimonials />

      {/* Fast-Track Admission Query Box */}
      <section className="mb-48 flex justify-center w-full" id="query-box">
        <div className="w-full max-w-2xl">
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-glass-border dark:border-white/10 shadow-2xl relative transition-transform duration-300 ease-out bg-white/70 dark:bg-slate-800/80" id="hero-card">
            <div className="absolute -top-4 -right-4 bg-emerald-accent p-3 rounded-2xl shadow-lg animate-bounce">
              <span className="material-symbols-outlined text-white">rocket_launch</span>
            </div>
            <h3 className="font-display-xl text-3xl md:text-4xl text-center mb-2 text-navy-deep dark:text-white">Start Your Journey</h3>
            <p className="text-center text-on-surface-variant dark:text-slate-400 mb-8 font-medium">Fast-track your admission process with expert guidance.</p>
            <form className="space-y-4" onSubmit={handleWaSubmit}>
              <div className="space-y-1">
                <label className="font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 uppercase ml-2 font-bold">Full Name</label>
                <input name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white dark:bg-slate-900 border border-glass-border dark:border-slate-700 rounded-xl px-4 py-3 focus:border-navy-deep focus:ring-1 focus:ring-navy-deep dark:focus:ring-white outline-none transition-all text-on-surface dark:text-white" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-1">
                <label className="font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 uppercase ml-2 font-bold">Preferred Vertical</label>
                <select name="course" value={formData.course} onChange={handleInputChange} className="w-full bg-white dark:bg-slate-900 border border-glass-border dark:border-slate-700 rounded-xl px-4 py-3 focus:border-navy-deep focus:ring-1 focus:ring-navy-deep dark:focus:ring-white outline-none transition-all text-on-surface dark:text-white appearance-none">
                  <option value="NIOS Secondary/Sr. Secondary">NIOS Secondary/Sr. Secondary</option>
                  <option value="IGNOU UG/PG Support">IGNOU UG/PG Support</option>
                  <option value="Regular Degree Programs">Regular Degree Programs</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 uppercase ml-2 font-bold">WhatsApp Contact</label>
                <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white dark:bg-slate-900 border border-glass-border dark:border-slate-700 rounded-xl px-4 py-3 focus:border-navy-deep focus:ring-1 focus:ring-navy-deep dark:focus:ring-white outline-none transition-all text-on-surface dark:text-white" placeholder="+91 00000 00000" type="tel" />
              </div>
              <button className="w-full bg-navy-deep dark:bg-primary py-4 rounded-xl font-bold text-white hover:bg-slate-800 dark:hover:bg-emerald-600 transition-colors mt-6 shadow-md text-lg" type="submit">
                INITIALIZE REQUEST
              </button>
            </form>
            <p className="text-center text-[10px] font-label-mono text-emerald-accent/60 mt-4">SECURE ENCRYPTION ENABLED</p>
          </div>
        </div>
      </section>

      {/* Trusted By / Partners */}
      <section className="mb-24 flex flex-col items-center border-t border-glass-border dark:border-white/10 pt-16">
        <p className="font-label-mono text-sm uppercase tracking-widest text-on-surface-variant dark:text-slate-500 mb-10 font-bold text-center">
          TRUSTED BY ACADEMIC PARTNERS & INSTITUTIONS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
          <div className="flex items-center gap-2 hover:text-navy-deep dark:hover:text-white transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-4xl">account_balance</span>
            <span className="font-display-xl text-2xl font-bold tracking-tight">Global Uni</span>
          </div>
          <div className="flex items-center gap-2 hover:text-navy-deep dark:hover:text-white transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-4xl">school</span>
            <span className="font-display-xl text-2xl font-bold tracking-tight">EduNet</span>
          </div>
          <div className="flex items-center gap-2 hover:text-navy-deep dark:hover:text-white transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-4xl">public</span>
            <span className="font-display-xl text-2xl font-bold tracking-tight">World Scholar</span>
          </div>
          <div className="flex items-center gap-2 hover:text-navy-deep dark:hover:text-white transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-4xl">auto_stories</span>
            <span className="font-display-xl text-2xl font-bold tracking-tight">Open Board</span>
          </div>
        </div>
      </section>
    </main>
  );
}
