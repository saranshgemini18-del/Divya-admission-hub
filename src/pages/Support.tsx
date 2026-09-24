import React, { useState } from 'react';
import FaqAccordion from '../components/FaqAccordion';
import SEO from '../components/SEO';

export default function Support() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'NIOS Board Admissions (10th/12th)',
    urgency: 'Standard',
    narrative: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.narrative.trim()) {
      setErrorMessage("Please fill in candidate name, contact email/phone, and your inquiry details.");
      return;
    }
    
    const message = `Hello Divya Admission Hub! I have submitted an official inquiry:
• *Name:* ${formData.name.trim()}
• *Email:* ${formData.email.trim()}
• *Phone:* ${formData.phone.trim() || 'Not specified'}
• *Interest:* ${formData.interest}
• *Urgency:* ${formData.urgency}
• *Inquiry:* ${formData.narrative.trim()}`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/918178056407?text=${encodedMessage}`;
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsSubmitted(true);
  };

  return (
    <main className="relative z-10 pt-28 md:pt-36 pb-24 px-4 md:px-12 max-w-[1280px] mx-auto">
      <SEO 
        title="Student Support & Admission Helpline Dayalpur Delhi" 
        description="Contact Divya Admission Hub counseling desk at 2nd Floor, Prime Dental Clinic, Near Water Tank, Dayalpur, Delhi 110094. Instant WhatsApp & phone helpline for NIOS admissions, IGNOU enrollment, and TOC solutions." 
        keywords="admission helpline Dayalpur Delhi, NIOS inquiry phone number, IGNOU student support, Divya Admission Hub contact, Divya Dhariwal phone number, education counselor Dayalpur Delhi, Prime Dental Clinic Dayalpur 110094, TOC counseling" 
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Divya Admission Hub Helpdesk & Consultation",
          "description": "Direct student helpdesk for NIOS and IGNOU admission queries in Dayalpur, Delhi 110094 and PAN India.",
          "mainEntity": {
            "@type": "EducationalOrganization",
            "name": "Divya Admission Hub",
            "telephone": "+918178056407",
            "email": "Divya19970719@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2nd Floor, Prime Dental Clinic, Near Pani Ki Tanki (Water Tank), Dayalpur",
              "addressLocality": "Dayalpur, Delhi",
              "addressRegion": "Delhi",
              "postalCode": "110094",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+918178056407",
              "contactType": "admission counseling",
              "availableLanguage": ["English", "Hindi"],
              "areaServed": "IN"
            }
          }
        }}
      />

      {/* Hero Section */}
      <section className="mb-14 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-3xl">
            <span className="font-label-mono text-xs uppercase tracking-widest text-emerald-accent font-bold mb-2 inline-block">
              Authoritative Advisory &amp; Inquiries
            </span>
            <h1 className="font-display-xl text-3xl sm:text-4xl md:text-5xl mb-4 text-navy-deep dark:text-white leading-tight">
              Design Your <span className="text-emerald-accent">Academic Future</span>
            </h1>
            <p className="font-body-md text-base md:text-lg text-on-surface-variant dark:text-slate-300 max-w-xl md:mx-0 mx-auto">
              We bridge the gap between institutional regulations and your academic aspirations. Reach our certified educational mentors directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-2.5 border-emerald-500/20 dark:border-white/10 bg-white/70 dark:bg-slate-800/80">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="font-label-mono text-xs text-emerald-700 dark:text-emerald-300 uppercase tracking-widest font-bold">
                Counselors Online Now
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Priority Form & Advisors */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Priority Inquiry Form */}
          <div className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden bg-white/90 dark:bg-slate-800/90 shadow-lg border border-glass-border dark:border-white/10">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-glass-border dark:border-white/10">
              <h2 className="font-display-xl text-xl md:text-2xl text-navy-deep dark:text-white flex items-center gap-2.5">
                <span className="material-symbols-outlined text-emerald-accent text-2xl">mail_lock</span>
                Priority Inquiry Portal
              </h2>
              <span className="font-label-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full">
                SLA: &lt; 2 Hours
              </span>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs md:text-sm font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                <span>{errorMessage}</span>
              </div>
            )}
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-emerald-500/15 rounded-full flex items-center justify-center mb-5 text-emerald-500">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="font-display-xl text-2xl md:text-3xl text-navy-deep dark:text-white mb-3">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-on-surface-variant dark:text-slate-300 max-w-md text-sm md:text-base leading-relaxed mb-6">
                  Your details have been forwarded to our senior admissions team. If your WhatsApp did not open automatically, click the button below.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={`https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub,%20I%20just%20submitted%20my%20inquiry%20for%20${encodeURIComponent(formData.interest)}.%20My%20name%20is%20${encodeURIComponent(formData.name)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-accent hover:bg-emerald-600 text-white font-label-mono text-xs font-bold uppercase px-6 py-3 rounded-full shadow-md transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    Open WhatsApp Chat
                  </a>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        interest: 'NIOS Board Admissions (10th/12th)',
                        urgency: 'Standard',
                        narrative: ''
                      });
                    }}
                    className="font-label-mono text-xs text-on-surface-variant dark:text-slate-300 font-bold uppercase tracking-wider bg-black/5 dark:bg-white/5 hover:bg-black/10 px-5 py-3 rounded-full transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSupportSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-mono text-xs text-on-surface-variant dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">
                      Candidate Full Name *
                    </label>
                    <input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      type="text" 
                      className="w-full bg-surface-container dark:bg-slate-900/60 border border-glass-border dark:border-slate-700 rounded-xl py-3 px-4 focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent text-on-surface dark:text-white outline-none text-sm transition-all" 
                      placeholder="Enter candidate full name" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block font-label-mono text-xs text-on-surface-variant dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">
                      Email Address *
                    </label>
                    <input 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      type="email" 
                      className="w-full bg-surface-container dark:bg-slate-900/60 border border-glass-border dark:border-slate-700 rounded-xl py-3 px-4 focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent text-on-surface dark:text-white outline-none text-sm transition-all" 
                      placeholder="Enter email address" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-mono text-xs text-on-surface-variant dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">
                      Mobile / WhatsApp Number
                    </label>
                    <input 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      type="tel" 
                      className="w-full bg-surface-container dark:bg-slate-900/60 border border-glass-border dark:border-slate-700 rounded-xl py-3 px-4 focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent text-on-surface dark:text-white outline-none text-sm transition-all" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div>
                    <label className="block font-label-mono text-xs text-on-surface-variant dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">
                      Academic Vertical of Interest
                    </label>
                    <select 
                      name="interest" 
                      value={formData.interest} 
                      onChange={handleInputChange} 
                      className="w-full bg-surface-container dark:bg-slate-900/60 border border-glass-border dark:border-slate-700 rounded-xl py-3 px-4 focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent text-on-surface dark:text-white outline-none text-sm transition-all"
                    >
                      <option value="NIOS Board Admissions (10th/12th)">NIOS Board Admissions (10th/12th)</option>
                      <option value="IGNOU Distance Degree (UG/PG)">IGNOU Distance Degree (UG/PG)</option>
                      <option value="B.Tech / MBA Regular College Admission">B.Tech / MBA Regular College Admission</option>
                      <option value="Doctoral Research & PhD Guidance">Doctoral Research &amp; PhD Guidance</option>
                      <option value="Transfer of Credit (TOC) Consultation">Transfer of Credit (TOC) Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-label-mono text-xs text-on-surface-variant dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">
                    Inquiry Urgency
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                      <input 
                        type="radio" 
                        name="urgency" 
                        value="Standard" 
                        checked={formData.urgency === 'Standard'} 
                        onChange={handleInputChange} 
                        className="accent-emerald-600"
                      />
                      <span>Standard (Within 24 Hours)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                      <input 
                        type="radio" 
                        name="urgency" 
                        value="Immediate" 
                        checked={formData.urgency === 'Immediate'} 
                        onChange={handleInputChange} 
                        className="accent-emerald-600"
                      />
                      <span className="text-amber-600 dark:text-amber-400 font-semibold">Immediate Priority (Session Deadline)</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block font-label-mono text-xs text-on-surface-variant dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">
                    Case Narrative &amp; Prior Academic Background *
                  </label>
                  <textarea 
                    name="narrative" 
                    value={formData.narrative} 
                    onChange={handleInputChange} 
                    className="w-full bg-surface-container dark:bg-slate-900/60 border border-glass-border dark:border-slate-700 rounded-xl py-3 px-4 focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent text-on-surface dark:text-white outline-none text-sm transition-all resize-none" 
                    placeholder="Briefly describe your qualification, previous board/college, and what admission outcome you are seeking..." 
                    rows={4} 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-emerald-accent hover:bg-emerald-600 text-white font-bold font-label-mono text-sm uppercase tracking-wider shadow-lg shadow-emerald-accent/20 active:scale-[0.99] transition-all flex justify-center items-center gap-2"
                >
                  <span>SUBMIT PRIORITY INQUIRY</span>
                  <span className="material-symbols-outlined text-lg">lock</span>
                </button>
              </form>
            )}
          </div>

          {/* Director & Principal Academic Counselor Profile */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-glass-border dark:border-white/10 bg-white/80 dark:bg-slate-800/80 shadow-md">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-emerald-accent/40 bg-slate-100 dark:bg-slate-700 shrink-0 shadow-lg group">
                <img 
                  src="/director-divya.svg" 
                  alt="Divya Dhariwal - Founder & Director, Divya Admission Hub" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="flex-grow text-center sm:text-left space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white font-bold">Divya Dhariwal</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-label-mono text-xs uppercase font-bold tracking-wider mt-0.5">
                      Founder &amp; Principal Academic Counselor
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold font-label-mono uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Accepting Consultations
                  </span>
                </div>

                <p className="text-on-surface-variant dark:text-slate-300 text-sm leading-relaxed pt-1">
                  12+ years of verified student mentorship across NIOS board certification, IGNOU higher education curricula, and regular university degree admissions. Leading all strategic counseling personally to guarantee transparent and authentic enrollment.
                </p>

                <div className="pt-3 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-navy-deep dark:text-slate-200">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <span className="material-symbols-outlined text-base">verified</span>
                    Verified Academic Strategist
                  </span>
                  <span className="flex items-center gap-1 text-premium-gold">
                    <span className="material-symbols-outlined text-base">award_star</span>
                    15,000+ Students Mentored
                  </span>
                  <a 
                    href="https://instagram.com/dhriti19977777" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[#E1306C] hover:underline"
                  >
                    <span className="material-symbols-outlined text-base">photo_camera</span>
                    @dhriti19977777
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Executive Hub Contact Info */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="glass-card rounded-3xl overflow-hidden bg-white/90 dark:bg-slate-800/90 shadow-lg border border-glass-border dark:border-white/10 p-6 md:p-8 space-y-6">
            <div>
              <span className="font-label-mono text-[10px] uppercase tracking-widest text-emerald-accent font-bold">
                Central Office
              </span>
              <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white mt-1">
                Admission Desk
              </h3>
              <p className="text-xs text-on-surface-variant dark:text-slate-400 mt-1">
                Serving scholars across Delhi NCR and Pan-India.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <p className="font-label-mono text-[10px] uppercase font-bold text-on-surface-variant dark:text-slate-400">Office Address</p>
                  <p className="text-navy-deep dark:text-slate-200 font-medium text-xs mt-1 leading-relaxed">
                    2nd Floor, Prime Dental Clinic, Near Pani Ki Tanki (Water Tank), Dayalpur, Delhi - 110094
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
                <div>
                  <p className="font-label-mono text-[10px] uppercase font-bold text-on-surface-variant dark:text-slate-400">Direct Helpline</p>
                  <a href="tel:+918178056407" className="text-navy-deep dark:text-slate-200 font-bold text-xs mt-1 block hover:text-emerald-accent">
                    +91 81780 56407
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <p className="font-label-mono text-[10px] uppercase font-bold text-on-surface-variant dark:text-slate-400">Official Correspondence</p>
                  <a href="mailto:Divya19970719@gmail.com" className="text-navy-deep dark:text-slate-200 font-medium text-xs mt-1 block hover:text-emerald-accent break-all">
                    Divya19970719@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-4 border-t border-glass-border dark:border-white/10 space-y-2.5">
              <a 
                href="https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub,%20I%20would%20like%20to%20speak%20with%20an%20academic%20counselor."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-accent hover:bg-emerald-600 text-white font-label-mono text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Instant WhatsApp Chat
              </a>
              <a 
                href="tel:+918178056407"
                className="w-full bg-navy-deep hover:bg-slate-800 text-white font-label-mono text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-base">phone_in_talk</span>
                Call Counselor Directly
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 space-y-2 text-xs">
              <div className="font-label-mono font-bold uppercase tracking-wider text-on-surface-variant dark:text-slate-400">
                Operating Schedule
              </div>
              <div className="flex justify-between text-on-surface-variant dark:text-slate-300">
                <span>Monday – Saturday:</span>
                <span className="font-semibold text-navy-deep dark:text-white">09:00 – 19:00 IST</span>
              </div>
              <div className="flex justify-between text-on-surface-variant dark:text-slate-300">
                <span>Sunday &amp; Holidays:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">WhatsApp Support On</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-20">
        <FaqAccordion />
      </div>
    </main>
  );
}
