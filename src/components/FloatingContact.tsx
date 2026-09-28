import React, { useState, useEffect } from 'react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    setErrorMessage('');
    const text = `Quick Inquiry from ${formData.name}: %0AEmail/Phone: ${formData.email} %0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918178056407?text=${text}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 md:bottom-8 right-6 md:right-8 z-50 bg-primary hover:bg-emerald-600 text-white w-14 h-14 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group cursor-pointer"
        aria-label="Quick Inquiry"
        title="Quick Inquiry (Alt + C)"
      >
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">chat</span>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal Content */}
      <div
        className={`fixed bottom-0 md:bottom-28 right-0 md:right-8 w-full md:w-[400px] bg-surface dark:bg-slate-900 border border-glass-border dark:border-white/10 rounded-t-3xl md:rounded-3xl shadow-2xl z-[70] overflow-hidden flex flex-col max-h-[85vh] transition-all duration-300 ease-out ${
          isOpen ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto' : 'translate-y-12 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-navy-deep dark:bg-slate-800 p-6 flex justify-between items-center relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-white font-display-xl text-xl">Quick Inquiry</h3>
            <p className="text-slate-300 text-xs mt-1">Real-time support connection</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors relative z-10"
            aria-label="Close dialog"
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
              {errorMessage && (
                <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-medium flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">error</span>
                  <span>{errorMessage}</span>
                </div>
              )}
              <div>
                <label htmlFor="quick-name" className="block font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 mb-1 uppercase tracking-wider font-bold">Name</label>
                <input 
                  id="quick-name"
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
                <label htmlFor="quick-contact" className="block font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 mb-1 uppercase tracking-wider font-bold">Email or Phone</label>
                <input 
                  id="quick-contact"
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
                <label htmlFor="quick-message" className="block font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 mb-1 uppercase tracking-wider font-bold">Message</label>
                <textarea 
                  id="quick-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full bg-surface-container dark:bg-slate-800 border border-outline-variant dark:border-slate-700 rounded-lg py-2 px-3 focus:ring-1 focus:ring-primary focus:border-primary text-sm outline-none dark:text-white transition-all resize-none"
                  placeholder="How can we help you today?"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-2 text-sm cursor-pointer">
                <span>Send Inquiry</span>
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
