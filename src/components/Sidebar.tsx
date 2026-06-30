import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const links = [
    { name: 'HOME', path: '/', icon: 'home' },
    { name: 'PROGRAMS', path: '/programs', icon: 'menu_book' },
    { name: 'SUPPORT', path: '/support', icon: 'support_agent' },
    { name: 'ABOUT US', path: '/about', icon: 'info' },
    { name: 'DEVELOPED BY', path: '/developed-by', icon: 'code' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-deep/40 dark:bg-slate-900/60 backdrop-blur-sm z-[150]"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-72 max-w-[80vw] bg-white dark:bg-slate-900 z-[160] shadow-2xl border-r border-glass-border dark:border-white/10 flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-glass-border dark:border-white/10">
              <Link to="/" onClick={onClose} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                <span className="font-display-xl text-xl font-extrabold tracking-tighter uppercase">
                  <span className="text-navy-deep dark:text-white">DIVYA</span> <span className="text-primary">HUB</span>
                </span>
              </Link>
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-navy-deep dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            
            <nav className="flex-grow py-6 px-4 flex flex-col gap-2">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-label-mono font-bold text-sm tracking-wider ${
                      isActive 
                        ? 'bg-emerald-accent/10 text-emerald-accent' 
                        : 'text-on-surface-variant dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-accent'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">{link.icon}</span>
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            
            <div className="p-6 border-t border-glass-border dark:border-white/10">
              <a 
                href="https://wa.me/918178056407" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full bg-premium-gold text-white px-6 py-3 rounded-full font-label-mono text-xs font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-premium-gold/20"
                onClick={onClose}
              >
                <span className="material-symbols-outlined text-sm">support_agent</span>
                CONSULT NOW
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
