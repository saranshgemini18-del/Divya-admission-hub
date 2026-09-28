import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const links = [
    { name: 'HOME', path: '/', icon: 'home' },
    { name: 'PROGRAMS', path: '/programs', icon: 'menu_book' },
    { name: 'SUPPORT', path: '/support', icon: 'support_agent' },
    { name: 'ABOUT US', path: '/about', icon: 'info' },
    { name: 'DEVELOPED BY', path: '/developed-by', icon: 'code' },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-navy-deep/50 dark:bg-slate-900/70 backdrop-blur-xs z-[150] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      
      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-72 max-w-[80vw] bg-white dark:bg-slate-900 z-[160] shadow-2xl border-r border-glass-border dark:border-white/10 flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-glass-border dark:border-white/10">
          <Link to="/" onClick={onClose} className="flex items-center gap-2" title="Divya Admission Hub">
            <span className="material-symbols-outlined text-emerald-accent text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            <span className="font-display-xl text-base font-extrabold tracking-tighter uppercase">
              <span className="text-navy-deep dark:text-white">DIVYA</span> <span className="text-emerald-accent">ADMISSION HUB</span>
            </span>
          </Link>
          <button 
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close navigation menu"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-label-mono text-xs uppercase tracking-wider font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-accent text-white font-bold shadow-md shadow-emerald-accent/20'
                    : 'text-on-surface-variant dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800/60 hover:text-emerald-accent'
                }`}
              >
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                  {link.icon}
                </span>
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="p-6 border-t border-glass-border dark:border-white/10 space-y-4">
          <a
            href="https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub,%20I%20would%20like%20to%20consult%20regarding%20admissions."
            target="_blank"
            rel="noreferrer"
            className="w-full bg-emerald-accent hover:bg-emerald-600 text-white py-3 rounded-xl font-label-mono text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">support_agent</span>
            TALK TO COUNSELOR
          </a>
          <p className="text-[10px] text-center font-label-mono text-on-surface-variant/60 dark:text-slate-500 uppercase">
            Dayalpur, Delhi • +91 8178056407
          </p>
        </div>
      </div>
    </>
  );
}
