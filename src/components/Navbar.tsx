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
    let lastScrolled = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isNowScrolled = window.scrollY > 20;
          if (isNowScrolled !== lastScrolled) {
            setScrolled(isNowScrolled);
            lastScrolled = isNowScrolled;
          }
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
      <header className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1280px] z-[100] transition-shadow duration-200 ${scrolled ? 'shadow-2xl' : 'shadow-lg'}`} style={{ willChange: 'transform' }}>
        <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full flex justify-between items-center pl-2 sm:pl-3 md:pl-4 pr-2 sm:pr-3 md:pr-4 py-1.5 sm:py-2.5 transition-colors min-h-[54px] sm:min-h-[58px]">
          {/* Brand & Logo Name Banner */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink min-w-0">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="min-w-[40px] min-h-[40px] w-10 h-10 sm:w-11 sm:h-11 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center text-navy-deep dark:text-white shrink-0"
              aria-label="Open navigation menu"
            >
              <span className="material-symbols-outlined text-2xl leading-none flex items-center justify-center">menu</span>
            </button>
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink min-w-0" title="Divya Admission Hub - Home">
              <img 
                src="/logo.svg" 
                alt="Divya Admission Hub Logo" 
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain group-hover:scale-105 transition-transform shrink-0 drop-shadow-xs" 
                width="40"
                height="40"
              />
              <div className="flex flex-col justify-center leading-none min-w-0">
                <span className="font-display-xl text-[13px] sm:text-base md:text-lg lg:text-xl font-extrabold tracking-tight uppercase whitespace-nowrap truncate">
                  <span className="text-navy-deep dark:text-white">DIVYA</span> <span className="text-blue-600 dark:text-blue-400">ADMISSION HUB</span>
                </span>
                <span className="hidden sm:inline-block text-[9px] font-label-mono tracking-wider text-slate-500 dark:text-slate-400 uppercase font-semibold mt-0.5">
                  Dayalpur, Delhi &bull; Authorized NIOS &amp; IGNOU
                </span>
              </div>
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
                  className={`px-4 py-2 rounded-full transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-950 dark:bg-blue-950/80 dark:text-blue-300 font-bold'
                      : 'text-on-surface-variant dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          
          {/* Right section: theme button & consult CTA aligned with nav container */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button 
              onClick={toggleTheme}
              className="min-w-[40px] min-h-[40px] w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0 flex items-center justify-center shrink-0 aspect-square bg-slate-100/80 dark:bg-slate-800/80 text-on-surface dark:text-white border border-black/5 dark:border-white/10 hover:scale-105 active:scale-95 transition-all outline-none"
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
              className="min-w-[40px] min-h-[40px] w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0 flex items-center justify-center shrink-0 aspect-square bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md shadow-[#25D366]/20 hover:scale-105 active:scale-95 transition-all outline-none"
              aria-label="Chat with Counselor on WhatsApp"
              title="Chat on WhatsApp (+91 8178056407)"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
