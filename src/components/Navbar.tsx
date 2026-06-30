import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = "#070A13";
      document.body.style.color = "#f8fafc";
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = "#F8FAFC";
      document.body.style.color = "#0F172A";
    }
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {/* Desktop Header */}
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[1280px] z-[100] transition-all duration-300 ${scrolled ? 'scale-95 top-2' : ''}`}>
        <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-full flex justify-between items-center px-4 md:px-6 py-4 shadow-xl">
          <div className="flex items-center gap-3 md:gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-1 md:p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center text-navy-deep dark:text-white"
              aria-label="Open sidebar"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <Link to="/" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              <span className="font-display-xl text-lg md:text-xl font-extrabold tracking-tighter uppercase hidden sm:block">
                <span className="text-navy-deep dark:text-white">DIVYA</span> <span className="text-primary">HUB</span>
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full glass-panel hover:scale-105 active:scale-95 transition-transform flex items-center justify-center bg-white/50 dark:bg-slate-800/50"
            >
              <span className="material-symbols-outlined text-premium-gold">
                {isDark ? 'dark_mode' : 'light_mode'}
              </span>
            </button>
            <a href="https://wa.me/918178056407" target="_blank" rel="noreferrer" className="bg-premium-gold text-white px-6 py-2 rounded-full font-label-mono text-xs font-bold hover:brightness-110 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-premium-gold/20 hidden md:block">
              CONSULT NOW
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
