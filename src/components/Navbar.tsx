import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Programs', path: '/programs' },
    { label: 'Support & FAQs', path: '/support' },
    { label: 'About', path: '/about' },
  ];

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {/* Desktop Header */}
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-[1280px] z-[100] transition-all duration-150 ${scrolled ? 'scale-[0.98] top-2' : ''}`}>
        <nav className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-full flex justify-between items-center pl-2.5 sm:pl-3 md:pl-4 pr-2.5 sm:pr-3 md:pr-4 py-2 sm:py-2.5 shadow-xl transition-colors min-h-[58px]">
          {/* First selected component: shifted slight left */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 shrink-0 -translate-x-1 sm:-translate-x-1.5">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center text-navy-deep dark:text-white shrink-0"
              aria-label="Open navigation menu"
            >
              <span className="material-symbols-outlined text-2xl leading-none flex items-center justify-center">menu</span>
            </button>
            <Link to="/" className="flex items-center gap-2 group shrink-0" title="Divya Admission Hub - Home">
              <span className="material-symbols-outlined text-emerald-accent text-2xl group-hover:scale-110 transition-transform shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              <span className="font-display-xl text-base sm:text-lg md:text-xl font-extrabold tracking-tighter uppercase whitespace-nowrap">
                <span className="text-navy-deep dark:text-white">DIVYA</span> <span className="text-emerald-accent">ADMISSION HUB</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 font-label-mono text-xs font-semibold uppercase tracking-wider">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full transition-all ${
                    isActive
                      ? 'bg-emerald-accent/15 text-emerald-accent font-bold'
                      : 'text-on-surface-variant dark:text-slate-300 hover:text-emerald-accent hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          
          {/* Right section: theme button & consult CTA aligned with nav container */}
          <div className="flex items-center gap-2 md:gap-2.5 shrink-0">
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full p-0 flex items-center justify-center shrink-0 aspect-square bg-white/90 dark:bg-slate-800/90 text-on-surface dark:text-white border border-black/10 dark:border-white/10 shadow-xs hover:scale-105 active:scale-95 transition-all outline-none"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              <span className="w-full h-full flex items-center justify-center pointer-events-none text-premium-gold">
                {isDark ? (
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
                  </svg>
                ) : (
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="4.5" fill="currentColor" />
                    <line x1="12" y1="1" x2="12" y2="3.5" />
                    <line x1="12" y1="20.5" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.99" y2="5.99" />
                    <line x1="18.01" y1="18.01" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3.5" y2="12" />
                    <line x1="20.5" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.99" y2="18.01" />
                    <line x1="18.01" y1="5.99" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </span>
            </button>
            <a 
              href="https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub,%20I%20would%20like%20to%20consult%20regarding%20admissions." 
              target="_blank" 
              rel="noreferrer" 
              className="bg-emerald-accent hover:bg-emerald-600 text-white h-10 px-4 sm:px-5 rounded-full font-label-mono text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-md shadow-emerald-accent/20 flex items-center justify-center gap-1.5 shrink-0"
            >
              <span className="material-symbols-outlined text-sm leading-none flex items-center justify-center">support_agent</span>
              <span className="hidden sm:inline">CONSULT NOW</span>
              <span className="sm:hidden">CHAT</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
