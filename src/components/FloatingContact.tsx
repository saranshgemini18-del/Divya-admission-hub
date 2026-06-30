import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle modal with Alt+C
      if (e.altKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Close modal on Escape
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    
    const message = `Hello, I have a quick inquiry:
Name: ${formData.name}
Email/Phone: ${formData.email}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918178056407?text=${encodedMessage}`, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 md:bottom-8 right-6 md:right-8 z-50 bg-primary hover:bg-emerald-500 text-white w-14 h-14 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
        aria-label="Quick Inquiry"
        title="Quick Inquiry (Alt + C)"
      >
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">chat</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed bottom-0 md:bottom-28 right-0 md:right-8 w-full md:w-[400px] bg-surface dark:bg-slate-900 border border-glass-border dark:border-white/10 rounded-t-3xl md:rounded-3xl shadow-2xl z-[70] overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="bg-navy-deep dark:bg-slate-800 p-6 flex justify-between items-center relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <h3 className="text-white font-display-xl text-xl">Quick Inquiry</h3>
                  <p className="text-white/70 text-xs mt-1">Real-time support connection</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="relative z-10 text-white/70 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto flex-grow">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-3xl text-primary">check_circle</span>
                    </div>
                    <h4 className="font-display-xl text-lg text-navy-deep dark:text-white mb-2">Message Sent</h4>
                    <p className="text-on-surface-variant dark:text-slate-400 text-sm">
                      We've received your quick inquiry. An advisor will connect with you momentarily.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 mb-1 uppercase tracking-wider font-bold">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container dark:bg-slate-800 border border-outline-variant dark:border-slate-700 rounded-lg py-2 px-3 focus:ring-1 focus:ring-primary focus:border-primary text-sm outline-none dark:text-white transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 mb-1 uppercase tracking-wider font-bold">Email or Phone</label>
                      <input 
                        type="text" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container dark:bg-slate-800 border border-outline-variant dark:border-slate-700 rounded-lg py-2 px-3 focus:ring-1 focus:ring-primary focus:border-primary text-sm outline-none dark:text-white transition-all"
                        placeholder="Contact details"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 mb-1 uppercase tracking-wider font-bold">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-surface-container dark:bg-slate-800 border border-outline-variant dark:border-slate-700 rounded-lg py-2 px-3 focus:ring-1 focus:ring-primary focus:border-primary text-sm outline-none dark:text-white transition-all resize-none"
                        placeholder="How can we help you today?"
                        required
                      />
                    </div>
                    <button type="submit" className="w-full bg-primary hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-2 text-sm">
                      <span>Send Inquiry</span>
                      <span className="material-symbols-outlined text-sm">send</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
