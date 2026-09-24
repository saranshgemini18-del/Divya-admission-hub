import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-12 px-4 md:px-12 border-t border-white/10 mt-20">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-accent text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            <span className="font-display-xl text-xl font-extrabold tracking-tighter uppercase text-white">
              DIVYA <span className="text-emerald-accent">ADMISSION HUB</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Premier educational consultancy offering structured, transparent, and authoritative admission guidance for NIOS 10th/12th, IGNOU distance degrees, and premier accredited universities.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-label-mono text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Govt. Recognized Boards &amp; Portals
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-label-mono uppercase tracking-widest text-white font-bold">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors">Home &amp; Stream Finder</Link>
            </li>
            <li>
              <Link to="/programs" className="text-slate-400 hover:text-emerald-400 transition-colors">Academic Programs &amp; Fees</Link>
            </li>
            <li>
              <Link to="/support" className="text-slate-400 hover:text-emerald-400 transition-colors">Priority Inquiries &amp; Helpdesk</Link>
            </li>
            <li>
              <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">About Divya Admission Hub</Link>
            </li>
            <li>
              <Link to="/developed-by" className="text-slate-400 hover:text-emerald-400 transition-colors">Architecture &amp; Technical Credits</Link>
            </li>
          </ul>
        </div>

        {/* Academic Verticals */}
        <div className="space-y-3">
          <h4 className="text-xs font-label-mono uppercase tracking-widest text-white font-bold">
            Key Academic Streams
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-white transition-colors">
              <Link to="/programs">NIOS Secondary (Class 10th)</Link>
            </li>
            <li className="hover:text-white transition-colors">
              <Link to="/programs">NIOS Senior Secondary (12th Stream 1/2)</Link>
            </li>
            <li className="hover:text-white transition-colors">
              <Link to="/programs">Transfer of Credit (TOC) Guidance</Link>
            </li>
            <li className="hover:text-white transition-colors">
              <Link to="/programs">IGNOU BCA / MCA / MBA / B.Com</Link>
            </li>
            <li className="hover:text-white transition-colors">
              <Link to="/programs">B.Tech, Management &amp; PhD Research</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Location */}
        <div className="space-y-3">
          <h4 className="text-xs font-label-mono uppercase tracking-widest text-white font-bold">
            Central Office &amp; Helpdesk
          </h4>
          <div className="space-y-2.5 text-xs text-slate-400">
            <p className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-accent text-base shrink-0">location_on</span>
              <span>2nd Floor, Prime Dental Clinic, Near Pani Ki Tanki (Water Tank), Dayalpur, Delhi - 110094</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-accent text-base shrink-0">call</span>
              <a href="tel:+918178056407" className="hover:text-emerald-400 font-bold text-slate-200">
                +91 81780 56407
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-accent text-base shrink-0">mail</span>
              <a href="mailto:Divya19970719@gmail.com" className="hover:text-emerald-400 text-slate-200">
                Divya19970719@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-accent text-base shrink-0">public</span>
              <a href="https://instagram.com/dhriti19977777" target="_blank" rel="noreferrer" className="hover:text-emerald-400 text-slate-200">
                Instagram: @dhriti19977777
              </a>
            </p>
            <div className="pt-2">
              <a 
                href="https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub,%20I%20need%20quick%20counseling%20support."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-accent hover:bg-emerald-600 text-white font-label-mono text-xs font-bold transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                WhatsApp Helpline
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Academic Disclaimer */}
      <div className="max-w-[1280px] mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-500">
        <p className="max-w-3xl leading-relaxed">
          <strong>Disclaimer:</strong> Divya Admission Hub is an independent academic advisory and student guidance consultancy. We assist students in preparing documentation and registering for government-recognized boards and universities (such as NIOS and IGNOU). All official board/university fees are transparently routed to their respective institutions.
        </p>
        <p className="shrink-0 font-label-mono font-medium text-slate-400">
          © {new Date().getFullYear()} Divya Admission Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
