import React, { useState, useEffect } from 'react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [customQuery, setCustomQuery] = useState('');

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent background scrolling on mobile when modal sheet is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);

  const quickOptions = [
    {
      label: 'Class 10th & 12th NIOS Admission',
      icon: 'school',
      query: 'Hello Divya Admission Hub! I need admission details and dates for NIOS Class 10th & 12th open schooling.'
    },
    {
      label: 'Save Year with TOC (Credit Transfer)',
      icon: 'published_with_changes',
      query: 'Hello! I failed/have backlogs in CBSE/State board and want to transfer credits (TOC) to NIOS to save my academic year.'
    },
    {
      label: 'IGNOU Distance Degrees (BCA, MBA, BA)',
      icon: 'menu_book',
      query: 'Hello Divya Admission Hub! I want admission guidance and assignment support for IGNOU university degrees.'
    },
    {
      label: 'Direct B.Ed, DIET & D.Pharma Seats',
      icon: 'workspace_premium',
      query: 'Hello! Please guide me regarding direct admission eligibility and seats for B.Ed / DIET / D.Pharma programs.'
    },
    {
      label: 'Fee Structure & Exam Schedules',
      icon: 'payments',
      query: 'Hello! I would like to know the exact fee breakdown and upcoming examination schedule for admissions.'
    },
    {
      label: 'Visit Dayalpur Center in Delhi',
      icon: 'pin_drop',
      query: 'Hello! I want to visit your Dayalpur office (Prime Dental Clinic 2nd floor, Near Water Tank) for in-person counseling. What are your timings?'
    }
  ];

  const handleOpenWhatsApp = (messageText: string) => {
    const encoded = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/918178056407?text=${encoded}`;
    
    // Direct safe navigation without popup blocker
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;
    handleOpenWhatsApp(`Hello Divya Admission Hub! ${customQuery.trim()}`);
    setCustomQuery('');
  };

  return (
    <>
      {/* Floating Action Button (Optimized for Mobile & Desktop screens) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white pl-3.5 pr-4 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-xl shadow-[#25D366]/25 flex items-center gap-2 sm:gap-2.5 transition-all duration-200 hover:scale-105 active:scale-95 group cursor-pointer border border-white/20"
        aria-label="Chat with Divya Admission Hub Counselors on WhatsApp"
        title="Chat with Senior Counselor (Alt + C)"
        style={{ willChange: 'transform' }}
      >
        {/* Pulsing Live Beacon */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="shrink-0 group-hover:rotate-6 transition-transform">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>

        <span className="font-label-mono text-xs font-bold tracking-tight uppercase whitespace-nowrap">
          <span className="sm:hidden">Chat</span>
          <span className="hidden sm:inline">Counselor Chat</span>
        </span>
      </button>

      {/* Screen Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-[65] transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Optimized Chat Screen Sheet (Bottom sheet on mobile, floating widget on desktop) */}
      <div
        className={`fixed z-[70] transition-all duration-300 ease-out flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden
          inset-x-0 bottom-0 rounded-t-3xl max-h-[88dvh]
          sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[410px] sm:max-h-[620px] sm:rounded-3xl
          ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-8 sm:translate-y-4 opacity-0 pointer-events-none'}
        `}
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Mobile drag handle indicator */}
        <div className="sm:hidden w-full flex justify-center pt-2 pb-1 bg-navy-deep dark:bg-slate-800">
          <div className="w-10 h-1 bg-white/30 rounded-full"></div>
        </div>

        {/* Chat Header */}
        <div className="bg-navy-deep dark:bg-slate-800 px-4 sm:px-5 py-3.5 flex items-center justify-between text-white shrink-0 border-b border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            {/* Director / Support Avatar */}
            <div className="relative shrink-0">
              <picture>
                <source srcSet="/director-divya.webp" type="image/webp" />
                <img 
                  src="/director-divya.jpg" 
                  alt="Divya Dhariwal" 
                  className="w-11 h-11 rounded-full object-cover object-top border-2 border-white/40 shadow-sm"
                  width="44"
                  height="44"
                />
              </picture>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-navy-deep rounded-full"></span>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className="font-display-xl text-sm sm:text-base font-bold text-white truncate">
                  Divya Admission Support
                </h3>
                <span className="material-symbols-outlined text-blue-400 text-sm shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
              </div>
              <p className="text-[11px] font-label-mono text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                <span>Active Counselor &bull; Dayalpur Delhi</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {/* Direct Phone Call Button */}
            <a 
              href="tel:+918178056407" 
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              title="Call Helpdesk: +91 81780 56407"
              aria-label="Call Admissions Helpdesk"
            >
              <span className="material-symbols-outlined text-xl">call</span>
            </a>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close chat screen"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Chat Body (Scrollable, Optimized for screen height) */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1 overscroll-contain">
          {/* Incoming Welcome Message */}
          <div className="flex items-start gap-2.5">
            <picture className="shrink-0">
              <source srcSet="/director-divya.webp" type="image/webp" />
              <img 
                src="/director-divya.jpg" 
                alt="Divya Dhariwal" 
                className="w-7 h-7 rounded-full object-cover object-top border border-slate-300 dark:border-slate-700"
                width="28"
                height="28"
              />
            </picture>
            <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 p-3.5 rounded-2xl rounded-tl-xs text-xs sm:text-sm leading-relaxed max-w-[85%] border border-slate-200 dark:border-slate-700 shadow-xs">
              <p className="font-semibold text-blue-700 dark:text-blue-400 mb-1 font-label-mono text-[11px] uppercase">
                Divya Dhariwal &bull; Director
              </p>
              Namaste! Welcome to Divya Admission Hub. Choose an option below or type your query for instant guidance:
            </div>
          </div>

          {/* Quick 1-Tap Option Chips */}
          <div className="space-y-1.5 pt-1">
            <span className="font-label-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold block ml-1">
              Select Quick Inquiry Option:
            </span>
            <div className="grid grid-cols-1 gap-2">
              {quickOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(opt.query)}
                  className="w-full text-left p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 hover:bg-blue-50 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700/80 transition-all flex items-center justify-between group active:scale-[0.99] cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg shrink-0">
                      {opt.icon}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 truncate">
                      {opt.label}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-sm shrink-0 transition-transform group-hover:translate-x-0.5">
                    arrow_forward
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Input Area */}
        <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 shrink-0">
          <form onSubmit={handleCustomSubmit} className="flex items-center gap-2">
            <input 
              type="text" 
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              placeholder="Type your question or course name..."
              className="flex-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
            />
            <button 
              type="submit"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl font-bold font-label-mono text-xs flex items-center justify-center gap-1 shrink-0 transition-transform active:scale-95 shadow-sm cursor-pointer"
              title="Send to Counselor on WhatsApp"
            >
              <span className="hidden sm:inline">Send</span>
              <span className="material-symbols-outlined text-base">send</span>
            </button>
          </form>

          {/* Quick Call Direct Strip */}
          <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] font-label-mono text-slate-600 dark:text-slate-400 px-1">
            <span>Direct Desk:</span>
            <a href="tel:+918178056407" className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">call</span>
              +91 81780 56407
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
