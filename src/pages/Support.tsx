import React, { useState } from 'react';
import { motion } from 'motion/react';
import FaqAccordion from '../components/FaqAccordion';
import SEO from '../components/SEO';

export default function Support() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Doctoral Research Support',
    urgency: 'Standard',
    narrative: ''
  });

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.narrative) {
      alert("Please fill in all required fields.");
      return;
    }
    
    const message = `Hello, I have an inquiry:
Name: ${formData.name}
Email: ${formData.email}
Interest: ${formData.interest}
Urgency: ${formData.urgency}
Message: ${formData.narrative}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918178056407?text=${encodedMessage}`, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);

    setFormData({
      name: '',
      email: '',
      interest: 'Doctoral Research Support',
      urgency: 'Standard',
      narrative: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="relative z-10 pt-32 pb-24 md:pt-40 max-w-[1280px] mx-auto px-6 md:px-16">
      <SEO 
        title="Support & Consultation" 
        description="Elite educational consulting for global standard credentials. Contact our expert advisors for personalized academic guidance." 
        keywords="academic support, admission consultancy, NIOS admission, IGNOU support, academic advising" 
      />
      {/* Hero Section */}
      <section className="mb-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <h1 className="font-display-xl text-4xl md:text-5xl mb-4 text-navy-deep dark:text-white">
              <span className="gradient-text">Design Your Academic Future</span>
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant dark:text-slate-300 max-w-xl md:mx-0 mx-auto">
              Elite educational consulting for global standard credentials. We bridge the gap between institutional requirements and your professional aspirations with authoritative guidance.
            </p>
          </div>
          <div className="hidden md:flex gap-4 mb-2">
            <div className="glass-card p-4 rounded-xl flex items-center gap-3 border-primary/10 dark:border-white/10 dark:bg-slate-800/80">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-label-mono text-xs text-primary dark:text-white uppercase tracking-widest font-bold">Active Enrollment Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Inquiry Form & Consultant Cards */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Priority Inquiry Form */}
          <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden bg-white dark:bg-slate-800 shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 dark:bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h2 className="font-display-xl text-2xl text-primary dark:text-white mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined">priority_high</span>
              Priority Inquiry Portal
            </h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
                  className="w-24 h-24 bg-emerald-accent/10 rounded-full flex items-center justify-center mb-6 relative"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="absolute inset-0 rounded-full border-4 border-emerald-accent/30 scale-110"
                  />
                  <span className="material-symbols-outlined text-5xl text-emerald-accent">check_circle</span>
                </motion.div>
                <h3 className="font-display-xl text-3xl text-navy-deep dark:text-white mb-4">Inquiry Received Successfully</h3>
                <p className="text-on-surface-variant dark:text-slate-300 max-w-md text-lg">
                  Thank you for reaching out. Our consultancy team has received your priority inquiry and will contact you shortly regarding your academic future.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 font-label-mono text-sm text-emerald-accent font-bold uppercase tracking-widest hover:underline bg-emerald-accent/5 px-6 py-3 rounded-full"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleSupportSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block font-label-mono text-xs text-on-surface-variant dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">Candidate Name</label>
                  <input name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full bg-transparent border-0 border-b-2 border-outline-variant dark:border-slate-600 py-3 px-0 focus:ring-0 focus:border-b-primary dark:focus:border-b-white text-on-surface dark:text-white placeholder:text-outline-variant transition-all outline-none" placeholder="Dr. Jane Doe" required />
                </div>
                <div className="relative group">
                  <label className="block font-label-mono text-xs text-on-surface-variant dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-transparent border-0 border-b-2 border-outline-variant dark:border-slate-600 py-3 px-0 focus:ring-0 focus:border-b-primary dark:focus:border-b-white text-on-surface dark:text-white placeholder:text-outline-variant transition-all outline-none" placeholder="jane.doe@institution.edu" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block font-label-mono text-xs text-on-surface-variant dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">Academic Interest</label>
                  <select name="interest" value={formData.interest} onChange={handleInputChange} className="w-full bg-transparent border-0 border-b-2 border-outline-variant dark:border-slate-600 py-3 px-0 focus:ring-0 focus:border-b-primary dark:focus:border-b-white text-on-surface dark:text-white transition-all outline-none appearance-none">
                    <option value="Doctoral Research Support">Doctoral Research Support</option>
                    <option value="Post-Graduate Specialization">Post-Graduate Specialization</option>
                    <option value="NIOS Board Admissions">NIOS Board Admissions</option>
                    <option value="IGNOU Distance Excellence">IGNOU Distance Excellence</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="block font-label-mono text-xs text-on-surface-variant dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">Urgency Level</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="urgency" value="Standard" checked={formData.urgency === 'Standard'} onChange={handleInputChange} className="text-primary focus:ring-primary accent-primary" />
                      <span className="text-sm font-medium dark:text-white">Standard</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="urgency" value="Immediate" checked={formData.urgency === 'Immediate'} onChange={handleInputChange} className="text-premium-gold focus:ring-premium-gold accent-premium-gold" />
                      <span className="text-sm font-medium dark:text-white">Immediate</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <label className="block font-label-mono text-xs text-on-surface-variant dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">Case Narrative / Inquiry Details</label>
                <textarea name="narrative" value={formData.narrative} onChange={handleInputChange} className="w-full bg-transparent border-0 border-b-2 border-outline-variant dark:border-slate-600 py-3 px-0 focus:ring-0 focus:border-b-primary dark:focus:border-b-white text-on-surface dark:text-white placeholder:text-outline-variant transition-all resize-none outline-none" placeholder="Briefly describe your academic background and objectives..." rows={4} required></textarea>
              </div>
              
              <button type="submit" className="w-full py-5 rounded-xl bg-gradient-to-r from-[#006c49] to-[#005c6e] dark:from-emerald-600 dark:to-emerald-800 text-white font-bold text-lg uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex justify-center items-center gap-3">
                SUBMIT SECURE INQUIRY
                <span className="material-symbols-outlined">lock</span>
              </button>
            </form>
            )}
          </div>

          {/* Consultant Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Consultant 1 */}
            <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 group hover:border-primary/20 transition-colors bg-white dark:bg-slate-800 shadow-sm hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3n4fOrxDIBxs6gk1dJF4q6tpKQ-cSjnnB2qPxGc_KgXELd4LLu1qTjhMK2Y86TlS3JiOnXBAIKJrtTJ48Y4FOYyrXSg_thRiQ5EGVUrILMj_Ao6gKAfbqhSkLLFUiUy0Q-J_NXtiheW2Ly6RtqQ4DFFVUy-3TEyxr6YR5lfVLjHaFDnrCDfvKoPQZpH-cDL4A28_UYhJzyWoHS6799NP9bwX22Zp0piVGfXGJ3-aChgOcsBTlb_jtAxtYsxTDDiTIMuj-S9f32gBF" alt="Dr. Aryan Sharma" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2 bg-primary/5 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                  <span className="text-[10px] font-bold text-primary dark:text-emerald-400 uppercase tracking-tighter">Available Now</span>
                </div>
              </div>
              <div>
                <h3 className="font-display-xl text-xl text-on-surface dark:text-white group-hover:text-primary transition-colors">Dr. Aryan Sharma</h3>
                <p className="text-primary dark:text-emerald-400 font-label-mono text-[10px] uppercase tracking-wider mb-2 font-bold">Senior Research Advisor</p>
                <p className="text-on-surface-variant dark:text-slate-300 text-sm line-clamp-2 italic">Expert in doctoral thesis structuring and international grant navigation for elite scholars.</p>
              </div>
              <div className="flex gap-2 pt-2 border-t border-black/5 dark:border-white/10">
                <span className="material-symbols-outlined text-primary dark:text-emerald-400 text-sm">verified</span>
                <span className="text-on-surface-variant dark:text-slate-400 text-[11px] font-medium">Verified Academic Consultant</span>
              </div>
            </div>

            {/* Consultant 2 */}
            <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 group hover:border-tertiary/20 transition-colors bg-white dark:bg-slate-800 shadow-sm hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-tertiary/10 group-hover:border-tertiary/30 transition-colors">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRjIL3n1TC7bP4OUS9gGNO8zxugP13iNKd8mNn1fdHKGDNI_Z4-IghOXPcRNJB0sRe4aRpl8iNTPdwDNChLpPvN0zIUAk7ruUshjS21s0-pZdXvmni6K935fimDaDlNewmfQR-bl1-S7jpbThXcgsaz5fQotx7BLlHtNrAjRpdLsfUBdjmglZsTkkhV4gxpwZSXyAXjxVxtfkVgTGPpB3Xy9hSHlNS5tiOJVnqFBxaNj6_XgndHNKxtIka579D3_mcJEfOGc7nXVQG" alt="Priya Varma" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2 bg-primary/5 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                  <span className="text-[10px] font-bold text-primary dark:text-emerald-400 uppercase tracking-tighter">Available Now</span>
                </div>
              </div>
              <div>
                <h3 className="font-display-xl text-xl text-on-surface dark:text-white group-hover:text-tertiary transition-colors">Priya Varma</h3>
                <p className="text-tertiary dark:text-teal-400 font-label-mono text-[10px] uppercase tracking-wider mb-2 font-bold">Admissions Strategist</p>
                <p className="text-on-surface-variant dark:text-slate-300 text-sm line-clamp-2 italic">Specializing in IGNOU &amp; NIOS fast-track certifications and distance education workflow.</p>
              </div>
              <div className="flex gap-2 pt-2 border-t border-black/5 dark:border-white/10">
                <span className="material-symbols-outlined text-tertiary dark:text-teal-400 text-sm">verified</span>
                <span className="text-on-surface-variant dark:text-slate-400 text-[11px] font-medium">Verified Academic Consultant</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Executive Hub Contact & Map */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Executive Hub Card */}
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full bg-white dark:bg-slate-800 shadow-lg">
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 bg-[#e2e2e6] dark:bg-slate-700" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpr3kMPZZcDlyWIfVRrOFwLUoGMyYSMwwirXSngSR00ESREpc75txMOYtVlJLNB-MmbTt5jIlDiL_WC-gugIMm50dH9_eVivi-Nfh8jF9dMlZbbsXzLKdnD7s6ooeJ6M08O-m8d3Ir5ao4XRAqI4HW6lWTzQMuw2QWg1G1JZZl2jPjhYbhz4vhXgfRuEpGMFL801CzGCnFY-5CEQ05QqlcM0_5XXASor1VcAaWHo42ctDRh7dVw4UvHw9zD20ebQFtBHRglpH7Sf_a')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-ping">
                  <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_#10b981]"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-6">
                <span className="font-label-mono text-[10px] font-bold bg-navy-deep dark:bg-white text-white dark:text-navy-deep px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 uppercase tracking-widest shadow-md">Global HQ</span>
              </div>
            </div>
            
            <div className="p-8 flex-grow">
              <h2 className="font-display-xl text-2xl text-on-surface dark:text-white mb-6">Executive Hub</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-surface-container dark:bg-slate-700 p-3 rounded-lg text-primary dark:text-white">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-mono text-[10px] font-bold text-primary dark:text-emerald-400 uppercase tracking-wider">Address</p>
                    <p className="text-on-surface-variant dark:text-slate-300 text-sm mt-1">Elite Academic Tower, Sector 18, NOIDA, NCR-110044</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-surface-container dark:bg-slate-700 p-3 rounded-lg text-primary dark:text-white">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-label-mono text-[10px] font-bold text-primary dark:text-emerald-400 uppercase tracking-wider">Executive Direct</p>
                    <p className="text-on-surface-variant dark:text-slate-300 text-sm mt-1">divyaadmissionhub@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-surface-container dark:bg-slate-700 p-3 rounded-lg text-primary dark:text-white">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-label-mono text-[10px] font-bold text-primary dark:text-emerald-400 uppercase tracking-wider">Priority Hotline</p>
                    <p className="text-on-surface-variant dark:text-slate-300 text-sm mt-1">+91 (120) 4500-Elite</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-black/5 dark:border-white/10 space-y-4">
                <h4 className="font-label-mono text-[10px] font-bold text-on-surface-variant dark:text-slate-400 uppercase tracking-widest">Office Protocol</h4>
                <ul className="space-y-3 text-sm text-on-surface-variant dark:text-slate-300 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Mon — Fri: 09:00 - 18:00
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-premium-gold rounded-full"></span>
                    Sat: Priority Bookings Only
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Support Badge */}
          <div onClick={() => window.open('https://wa.me/918178056407', '_blank')} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-black/5 dark:border-white/10 flex items-center justify-between group cursor-pointer hover:bg-surface-container dark:hover:bg-slate-700 transition-all shadow-sm">
            <div>
              <p className="font-label-mono text-[10px] font-bold text-tertiary dark:text-teal-400 uppercase tracking-widest mb-1">Live Chat</p>
              <h3 className="font-display-xl text-xl group-hover:text-primary dark:group-hover:text-emerald-400 transition-colors text-navy-deep dark:text-white">Talk to a Consultant</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">forum</span>
            </div>
          </div>
        </aside>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-24">
        <FaqAccordion />
      </div>
    </main>
  );
}
