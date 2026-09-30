import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import InteractiveRoadmap from '../components/InteractiveRoadmap';
import SEO from '../components/SEO';
import HomeFAQ, { homeFaqData } from '../components/HomeFAQ';
import LocalCatchment from '../components/LocalCatchment';
import OpenSchoolingAdvantage from '../components/OpenSchoolingAdvantage';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    course: 'NIOS Secondary/Sr. Secondary',
    phone: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Fast Stream Finder State
  const [selectedLevel, setSelectedLevel] = useState<'10th' | '12th' | 'degree' | 'phd'>('12th');

  const streamInfo = {
    '10th': {
      title: 'NIOS Secondary (Class 10th)',
      duration: 'Flexible (6 - 12 Months)',
      eligibility: 'Age 14+ years with basic literacy / prior school records',
      highlights: ['No age upper limit', 'On-Demand examination options', 'Credit transfer from previous boards', 'Recognized by all colleges across India'],
      badge: 'Fast-Track 10th'
    },
    '12th': {
      title: 'NIOS Senior Secondary (Class 12th)',
      duration: '1 Year Academic Cycle',
      eligibility: 'Passed 10th standard from recognized board',
      highlights: ['Eligible for NEET, JEE, CUET & NDA exams', 'Transfer of Credit (TOC) up to 2 subjects', 'Subject change flexibility', 'Government of India recognized certificate'],
      badge: 'NEET/JEE Valid'
    },
    'degree': {
      title: 'IGNOU & Regular University Portals',
      duration: '3 - 4 Years (UG) / 2 Years (PG)',
      eligibility: '12th pass (UG) or Graduate degree (PG)',
      highlights: ['UGC-DEB approved distance & regular degrees', 'Assignment guidance & exam prep mentorship', 'B.Tech, BCA, MBA, B.Com, MA streams', 'Worldwide academic & job equivalence'],
      badge: 'NAAC A++ Graded'
    },
    'phd': {
      title: 'Executive Degrees & PhD Guidance',
      duration: '2 - 3 Years',
      eligibility: 'Master’s degree with 55%+ marks',
      highlights: ['Research proposal structuring & topic defense', 'UGC-CARE journal publication assistance', 'Top NAAC accredited universities', 'Executive mentorship for working professionals'],
      badge: 'Elite Tier'
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formStatus === 'error') {
      setFormStatus('idle');
      setErrorMessage('');
    }
  };

  const handleWaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = formData.name.trim();
    const cleanPhone = formData.phone.trim();

    if (!cleanName || cleanName.length < 2) {
      setFormStatus('error');
      setErrorMessage('Please enter your full candidate name.');
      return;
    }
    if (!cleanPhone || cleanPhone.length < 7) {
      setFormStatus('error');
      setErrorMessage('Please enter a valid WhatsApp or contact number.');
      return;
    }

    const message = `Hello Divya Admission Hub! I am interested in admission guidance for *${formData.course}*.%0A%0A*Candidate Name:* ${encodeURIComponent(cleanName)}%0A*Phone:* ${encodeURIComponent(cleanPhone)}%0A%0APlease provide admission details, eligibility, and deadline for the upcoming session.`;
    const waUrl = `https://wa.me/918178056407?text=${message}`;
    
    setFormStatus('success');
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const homePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://divya-admission-hub.vercel.app/#webpage",
        "url": "https://divya-admission-hub.vercel.app/",
        "name": "Class 10th & 12th by Open Near Me | NIOS Dayalpur | Divya Admission Hub",
        "description": "Class 10th & 12th by open near me in Dayalpur Delhi. Get 100% recognized NIOS & IGNOU admission, TOC credit transfer, B.Ed & D.Pharma. Call 8178056407 today!",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://divya-admission-hub.vercel.app/#website",
          "name": "Divya Admission Hub",
          "url": "https://divya-admission-hub.vercel.app/"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://divya-admission-hub.vercel.app/"
            }
          ]
        },
        "about": [
          {
            "@type": "Service",
            "name": "Class 10th Open Admission (NIOS Secondary)",
            "serviceType": "Open Schooling Admission",
            "description": "Stream 1 & 2 admission assistance, on-demand exams, and marksheet verification for Class 10th in Dayalpur, Delhi."
          },
          {
            "@type": "Service",
            "name": "Class 12th Open Admission (NIOS Senior Secondary)",
            "serviceType": "Open Schooling Admission",
            "description": "Stream 1 & 2 admission assistance for Class 12th, valid for NEET, JEE, CUET, and NDA entrance examinations."
          },
          {
            "@type": "Service",
            "name": "Transfer of Credit (TOC) Guidance",
            "serviceType": "Academic Year Protection",
            "description": "Transfer passed subject marks from failed boards to save full academic year with official recognized marksheet."
          },
          {
            "@type": "Service",
            "name": "IGNOU Distance Degree Admission",
            "serviceType": "University Admissions",
            "description": "Undergraduate (BCA, B.Com, BA) and Postgraduate (MBA, MCA, MA) distance education registration and assignment mentorship."
          },
          {
            "@type": "Service",
            "name": "Direct Admissions in B.Ed, DIET/JBT & D.Pharma",
            "serviceType": "Professional Degree Admissions",
            "description": "Direct admission consulting for professional teacher education (B.Ed, JBT) and pharmacy (D.Pharma, B.Pharma) in recognized colleges."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://divya-admission-hub.vercel.app/#faq",
        "mainEntity": homeFaqData.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      },
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": "https://divya-admission-hub.vercel.app/#organization",
        "name": "Divya Admission Hub",
        "alternateName": [
          "NIOS Admission Dayalpur",
          "Class 10th & 12th by Open Near Me",
          "Divya Dhariwal Admission Hub",
          "NIOS & IGNOU Help Desk Delhi",
          "Divya Academia"
        ],
        "url": "https://divya-admission-hub.vercel.app/",
        "logo": "https://divya-admission-hub.vercel.app/favicon.svg",
        "image": "https://divya-admission-hub.vercel.app/director-divya-alt.svg",
        "description": "Expert center for Class 10th & 12th by open near me, NIOS admission in Dayalpur, Transfer of Credit (TOC), IGNOU degrees, and direct admissions for B.Ed, D.Pharma, and JBT.",
        "founder": {
          "@type": "Person",
          "name": "Divya Dhariwal",
          "jobTitle": "Director & Principal Academic Counselor",
          "sameAs": "https://instagram.com/dhriti19977777"
        },
        "telephone": "+91-8178056407",
        "email": "Divya19970719@gmail.com",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Net Banking, Credit Card",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2nd Floor, Prime Dental Clinic, Near Pani Ki Tanki, Dayal Pur",
          "addressLocality": "Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110094",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.7174,
          "longitude": 77.2662
        },
        "hasMap": "https://maps.google.com/?q=28.7174,77.2662",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:30",
            "closes": "19:30"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "1280"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya Sharma" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Cleared NIOS 12th with on-demand exams while continuing sports trials. Divya Admission Hub provided exceptional guidance."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul Verma" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Seamless admission guidance for engineering degree. Documentation was verified promptly without procedural delays."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Kumar" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Navigating IGNOU re-registration and assignments was made effortless by the counselors here."
          }
        ],
        "areaServed": [
          "Dayalpur",
          "Bhajanpura",
          "Karawal Nagar",
          "Yamuna Vihar",
          "Khajuri Khas",
          "Gokalpuri",
          "Shahdara",
          "Dilshad Garden",
          "Seelampur",
          "Nand Nagri",
          "Shastri Park",
          "Delhi NCR",
          "India"
        ]
      }
    ]
  };

  return (
    <main className="relative z-10 pt-28 md:pt-36 px-4 md:px-12 max-w-[1280px] mx-auto">
      <SEO 
        title="Class 10th & 12th by Open Near Me | NIOS Dayalpur" 
        description="Class 10th & 12th by open near me in Dayalpur Delhi. Get 100% recognized NIOS & IGNOU admission, TOC credit transfer, B.Ed & D.Pharma. Call 8178056407 today!" 
        keywords="Divya admission hub, Nios admission in dayalpur, Class 10 th by open, Class 12th by open, Class 12th by open near me, Class 10 th by open near me, College nios course, IGNOU help desk, direct admission B.Ed, BA-B.Ed, DIET, JBT, D.Pharma, B.Pharma, open schooling Delhi, NIOS center Bhajanpura, NIOS Karawal Nagar, Yamuna Vihar open school" 
        schema={homePageSchema}
      />

      {/* Hero Section */}
      <section className="min-h-[580px] md:min-h-[640px] flex flex-col justify-center items-start text-left gap-8 md:gap-10 mb-24 md:mb-32" id="home">
        <div className="flex flex-col gap-5 max-w-3xl text-left items-start">
          <div className="inline-flex items-center gap-2 self-start bg-premium-gold/10 border border-premium-gold/30 px-4 py-1.5 rounded-full w-fit shadow-xs">
            <span className="material-symbols-outlined text-premium-gold text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span className="font-label-mono text-[11px] tracking-widest text-premium-gold uppercase font-bold">Authorized Academic Consultancy • Dayalpur Delhi 110094</span>
          </div>

          <h1 className="font-display-xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-on-surface dark:text-white leading-[1.15] tracking-tight text-left animate-slide-left">
            Class 10th &amp; 12th by Open <span className="text-emerald-accent">Near Me</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl text-navy-deep dark:text-slate-200 font-semibold mt-2.5">
              Divya Admission Hub &bull; NIOS &amp; IGNOU Admissions in Dayalpur, Delhi
            </span>
          </h1>

          {/* Quick Search Intent Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <span className="material-symbols-outlined text-xs">school</span> Class 10th &amp; 12th Open
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <span className="material-symbols-outlined text-xs">update</span> On-Demand Exams
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <span className="material-symbols-outlined text-xs">published_with_changes</span> TOC Credit Transfer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <span className="material-symbols-outlined text-xs">assignment_turned_in</span> IGNOU Distance Degrees
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <span className="material-symbols-outlined text-xs">workspace_premium</span> Direct B.Ed &amp; D.Pharma
            </span>
          </div>

          <p className="font-body-md text-on-surface-variant dark:text-slate-300 text-base md:text-xl max-w-2xl leading-relaxed text-left">
            Looking for <strong>Class 10th by open near me</strong> or <strong>Class 12th by open near me</strong>? Fast-track admissions for <strong>NIOS 10th &amp; 12th</strong>, <strong>IGNOU University Portals</strong>, and <strong>Direct B.Ed / D.Pharma Courses</strong>. Save your academic year with Transfer of Credit (TOC) and verified counseling.
          </p>

          <div className="flex flex-wrap gap-4 mt-3 justify-start items-center">
            <Link to="/programs" className="bg-navy-deep hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-full flex items-center gap-2.5 shadow-lg shadow-navy-deep/20 hover:scale-105 active:scale-95 transition-all text-sm md:text-base">
              Explore Programs <span className="material-symbols-outlined text-emerald-accent text-lg">arrow_forward</span>
            </Link>
            <button 
              onClick={() => scrollToSection('query-box')} 
              className="bg-emerald-accent hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-full flex items-center gap-2 shadow-lg shadow-emerald-accent/20 hover:scale-105 active:scale-95 transition-all text-sm md:text-base"
            >
              <span className="material-symbols-outlined text-lg">bolt</span> Fast-Track Inquiry
            </button>
            <button 
              onClick={() => scrollToSection('workflow')} 
              className="glass-panel text-navy-deep dark:text-white font-bold px-6 py-3.5 rounded-full border border-glass-border dark:border-white/20 hover:bg-navy-deep/5 dark:hover:bg-white/10 transition-colors text-sm"
            >
              View Process
            </button>
          </div>

          {/* Social Contact Icons */}
          <div className="flex items-center justify-start gap-4 mt-2">
            <a 
              href="https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub!%20I%20need%20academic%20consultancy." 
              target="_blank" 
              rel="noreferrer" 
              className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-md hover:shadow-[#25D366]/30 transition-all hover:scale-110"
              aria-label="WhatsApp Contact"
              title="Chat on WhatsApp (+91 8178056407)"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
            
            <a 
              href="https://instagram.com/dhriti19977777" 
              target="_blank" 
              rel="noreferrer" 
              className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-md hover:shadow-[#E1306C]/30 transition-all hover:scale-110"
              aria-label="Instagram Page (@dhriti19977777)"
              title="Follow @dhriti19977777 on Instagram"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="url(#ig-grad)" className="drop-shadow-xs">
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F58529" />
                    <stop offset="50%" stopColor="#DD2A7B" />
                    <stop offset="100%" stopColor="#8134AF" />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            
            <a 
              href="mailto:Divya19970719@gmail.com" 
              className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-md hover:shadow-[#D44638]/30 transition-all hover:scale-110"
              aria-label="Email Divya Admission Hub"
              title="Email: Divya19970719@gmail.com"
            >
              <span className="material-symbols-outlined text-[#D44638] text-2xl">mail</span>
            </a>

            <a 
              href="tel:+918178056407" 
              className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-md hover:shadow-emerald-500/30 transition-all hover:scale-110"
              aria-label="Direct Call"
              title="Direct Phone Call (+91 8178056407)"
            >
              <span className="material-symbols-outlined text-primary text-2xl">call</span>
            </a>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          <div className="glass-panel p-4 rounded-2xl border border-glass-border dark:border-white/10 flex flex-col items-center">
            <span className="font-display-xl text-2xl md:text-3xl text-emerald-700 dark:text-emerald-400 font-bold">15,000+</span>
            <span className="font-label-mono text-[10px] md:text-xs text-on-surface-variant dark:text-slate-400 uppercase tracking-wider font-semibold mt-1">Students Guided</span>
          </div>
          <div className="glass-panel p-4 rounded-2xl border border-glass-border dark:border-white/10 flex flex-col items-center">
            <span className="font-display-xl text-2xl md:text-3xl text-emerald-700 dark:text-emerald-400 font-bold">100%</span>
            <span className="font-label-mono text-[10px] md:text-xs text-on-surface-variant dark:text-slate-400 uppercase tracking-wider font-semibold mt-1">Govt Recognized</span>
          </div>
          <div className="glass-panel p-4 rounded-2xl border border-glass-border dark:border-white/10 flex flex-col items-center">
            <span className="font-display-xl text-2xl md:text-3xl text-amber-800 dark:text-amber-400 font-bold">12+ Yrs</span>
            <span className="font-label-mono text-[10px] md:text-xs text-on-surface-variant dark:text-slate-400 uppercase tracking-wider font-semibold mt-1">Academic Mentorship</span>
          </div>
          <div className="glass-panel p-4 rounded-2xl border border-glass-border dark:border-white/10 flex flex-col items-center">
            <span className="font-display-xl text-2xl md:text-3xl text-cyan-800 dark:text-cyan-300 font-bold">24/7</span>
            <span className="font-label-mono text-[10px] md:text-xs text-on-surface-variant dark:text-slate-400 uppercase tracking-wider font-semibold mt-1">Direct Support</span>
          </div>
        </div>
      </section>

      {/* Local SEO & Catchment Presence */}
      <LocalCatchment />

      {/* Support Verticals - Bento Grid (Clean & Fast Rendering) */}
      <section className="mb-28 md:mb-36" id="programs-section">
        <div className="flex flex-col items-center mb-12 gap-2">
          <h2 className="font-display-xl text-3xl md:text-5xl text-center dark:text-white">Academic <span className="text-premium-gold">Verticals</span></h2>
          <div className="h-1 w-24 bg-emerald-accent rounded-full"></div>
          <p className="text-on-surface-variant dark:text-slate-400 text-center max-w-xl text-sm md:text-base mt-2">
            Select your preferred academic pathway for comprehensive guidance and verified enrollment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* NIOS Card */}
          <Link 
            to="/programs" 
            className="group glass-panel p-8 rounded-3xl border border-glass-border dark:border-white/10 shadow-md hover:shadow-xl transition-all relative overflow-hidden h-[400px] flex flex-col justify-end bg-gradient-to-br from-emerald-900/10 via-slate-900/5 to-slate-100 dark:from-slate-800 dark:to-slate-900"
          >
            <div 
              className="absolute inset-0 z-[-1] opacity-35 group-hover:opacity-50 transition-opacity mix-blend-multiply dark:mix-blend-overlay bg-cover bg-center" 
              style={{ backgroundImage: "url('/assets/card-nios.svg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent dark:from-slate-950 dark:via-slate-900/90 z-[-1]"></div>
            <div className="absolute top-8 left-8 bg-navy-deep/5 dark:bg-white/10 p-4 rounded-2xl border border-navy-deep/10 dark:border-white/20 backdrop-blur-sm">
              <span className="material-symbols-outlined text-emerald-accent dark:text-emerald-400 text-3xl">menu_book</span>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-700/60 text-xs font-bold font-label-mono mb-2">
                STREAM 1 & 2
              </div>
              <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white mb-2 group-hover:text-emerald-accent transition-colors">NIOS Board</h3>
              <p className="text-on-surface-variant dark:text-slate-300 text-sm mb-4 font-medium leading-relaxed">
                Complete Secondary (10th) and Senior Secondary (12th) certificates with flexible on-demand exams and credit transfers.
              </p>
              <div className="flex items-center gap-2 text-emerald-accent font-bold text-sm">
                EXPLORE PROGRAM <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </Link>

          {/* IGNOU Card */}
          <Link 
            to="/programs" 
            className="group glass-panel p-8 rounded-3xl border border-glass-border dark:border-white/10 shadow-md hover:shadow-xl transition-all relative overflow-hidden h-[400px] flex flex-col justify-end bg-gradient-to-br from-teal-900/10 via-slate-900/5 to-slate-100 dark:from-slate-800 dark:to-slate-900"
          >
            <div 
              className="absolute inset-0 z-[-1] opacity-35 group-hover:opacity-50 transition-opacity mix-blend-multiply dark:mix-blend-overlay bg-cover bg-center" 
              style={{ backgroundImage: "url('/assets/card-ignou.svg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent dark:from-slate-950 dark:via-slate-900/90 z-[-1]"></div>
            <div className="absolute top-8 left-8 bg-tertiary/10 dark:bg-tertiary/20 p-4 rounded-2xl border border-tertiary/20 backdrop-blur-sm">
              <span className="material-symbols-outlined text-cyan-700 dark:text-cyan-400 text-3xl">school</span>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 text-xs font-bold font-label-mono mb-2">
                UG / PG DEGREES
              </div>
              <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white mb-2 group-hover:text-tertiary transition-colors">IGNOU Hub</h3>
              <p className="text-on-surface-variant dark:text-slate-300 text-sm mb-4 font-medium leading-relaxed">
                Direct admission and comprehensive assignment, registration, and exam guidance for India's premier central university.
              </p>
              <div className="flex items-center gap-2 text-cyan-800 dark:text-cyan-400 font-bold text-sm">
                VIEW SUPPORT <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </Link>

          {/* Degrees Card */}
          <Link 
            to="/programs" 
            className="group glass-panel p-8 rounded-3xl border border-glass-border dark:border-white/10 shadow-md hover:shadow-xl transition-all relative overflow-hidden h-[400px] flex flex-col justify-end bg-gradient-to-br from-amber-900/10 via-slate-900/5 to-slate-100 dark:from-slate-800 dark:to-slate-900"
          >
            <div 
              className="absolute inset-0 z-[-1] opacity-35 group-hover:opacity-50 transition-opacity mix-blend-multiply dark:mix-blend-overlay bg-cover bg-center" 
              style={{ backgroundImage: "url('/assets/card-degrees.svg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent dark:from-slate-950 dark:via-slate-900/90 z-[-1]"></div>
            <div className="absolute top-8 left-8 bg-premium-gold/10 dark:bg-premium-gold/20 p-4 rounded-2xl border border-premium-gold/20 backdrop-blur-sm">
              <span className="material-symbols-outlined text-premium-gold text-3xl">workspace_premium</span>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-premium-gold/15 text-amber-800 dark:text-amber-300 text-xs font-bold font-label-mono mb-2">
                TOP COLLEGES
              </div>
              <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white mb-2 group-hover:text-premium-gold transition-colors">Prestige Degrees</h3>
              <p className="text-on-surface-variant dark:text-slate-300 text-sm mb-4 font-medium leading-relaxed">
                Direct admission assistance for accredited regular B.Tech, MBA, MCA, and PhD doctoral research programs.
              </p>
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm">
                SEE COLLEGES <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Open Schooling vs Traditional Advantage Matrix */}
      <OpenSchoolingAdvantage />

      {/* Interactive Academic Stream Finder */}
      <section className="mb-28 md:mb-36 glass-panel p-6 md:p-12 rounded-3xl border border-glass-border dark:border-white/10 shadow-xl bg-white/70 dark:bg-slate-900/70">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-6 border-b border-glass-border dark:border-white/10">
          <div>
            <span className="font-label-mono text-xs uppercase tracking-widest text-emerald-accent font-bold">Quick Academic Advisor</span>
            <h2 className="font-display-xl text-2xl md:text-3xl text-navy-deep dark:text-white mt-1">Not Sure Where to Start?</h2>
            <p className="text-sm md:text-base text-on-surface-variant dark:text-slate-400 mt-1">Select your current academic goal to view the recommended pathway.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(['10th', '12th', 'degree', 'phd'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-xl font-label-mono text-xs font-bold transition-all ${
                  selectedLevel === level
                    ? 'bg-emerald-accent text-white shadow-md shadow-emerald-accent/20 scale-105'
                    : 'bg-black/5 dark:bg-white/5 text-on-surface-variant dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10'
                }`}
              >
                {level === '10th' && 'Class 10th'}
                {level === '12th' && 'Class 12th'}
                {level === 'degree' && 'College Degree'}
                {level === 'phd' && 'Master / PhD'}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Stream Details */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white">{streamInfo[selectedLevel].title}</h3>
              <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-700/60 text-xs font-label-mono font-bold">
                {streamInfo[selectedLevel].badge}
              </span>
            </div>
            <p className="text-sm font-semibold text-on-surface-variant dark:text-slate-300">
              <strong>Eligibility:</strong> {streamInfo[selectedLevel].eligibility}
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
              {streamInfo[selectedLevel].highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-on-surface-variant dark:text-slate-300">
                  <span className="material-symbols-outlined text-emerald-accent text-lg">check_circle</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-glass-border dark:border-white/10 flex flex-col gap-4 text-center bg-white/50 dark:bg-slate-800/50">
            <div className="text-xs font-label-mono uppercase tracking-wider text-on-surface-variant dark:text-slate-400">Duration</div>
            <div className="font-display-xl text-lg font-bold text-navy-deep dark:text-white">{streamInfo[selectedLevel].duration}</div>
            <a 
              href={`https://wa.me/918178056407?text=Hello,%20I%20am%20interested%20in%20${encodeURIComponent(streamInfo[selectedLevel].title)}.%20Please%20share%20the%20admission%20process.`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-accent hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-xs font-label-mono transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Free Guidance</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="mb-28 md:mb-36" id="workflow">
        <div className="flex flex-col mb-12">
          <span className="font-label-mono text-xs uppercase tracking-widest text-emerald-accent font-bold mb-2">Clear 4-Step Process</span>
          <h2 className="font-display-xl text-3xl md:text-4xl text-on-surface dark:text-white leading-tight mb-4">
            Your Journey to <span className="text-emerald-accent">Academic Excellence</span>
          </h2>
          <p className="text-on-surface-variant dark:text-slate-400 text-base md:text-lg max-w-2xl">
            Our streamlined workflow ensures a transparent, stress-free transition into your chosen academic program.
          </p>
        </div>
        
        <InteractiveRoadmap />
      </section>

      {/* Director Spotlight Section */}
      <section className="mb-28 md:mb-36">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-glass-border dark:border-white/10 shadow-xl bg-white/80 dark:bg-slate-800/80 relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Director Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border-4 border-emerald-accent/40 shadow-2xl bg-slate-900 group">
                <img 
                  src="/director-divya-alt.svg" 
                  alt="Divya Dhariwal - Founder &amp; Director, Divya Admission Hub" 
                  width="288"
                  height="384"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-label-mono text-[10px] font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    Divya Dhariwal &bull; Director
                  </div>
                </div>
              </div>
            </div>

            {/* Director Bio & Vision */}
            <div className="md:col-span-7 space-y-5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-bold font-label-mono uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">school</span>
                Direct Leadership &amp; Mentorship
              </div>
              <h2 className="font-display-xl text-3xl sm:text-4xl text-navy-deep dark:text-white font-bold leading-tight">
                Guided by <span className="text-emerald-accent">Divya Dhariwal</span>
              </h2>
              <p className="font-label-mono text-xs uppercase font-bold text-premium-gold tracking-widest">
                Founder &amp; Principal Academic Counselor
              </p>
              <p className="text-on-surface-variant dark:text-slate-300 text-sm md:text-base leading-relaxed">
                "Our commitment is to guide every student through legitimate, accredited educational avenues with complete peace of mind. Whether you need NIOS on-demand exams to save a year, or direct enrollment into IGNOU and UGC-recognized universities, our team stands by your side at every step."
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10 text-center">
                  <span className="font-display-xl text-xl font-bold text-emerald-700 dark:text-emerald-400 block">12+ Yrs</span>
                  <span className="font-label-mono text-[10px] uppercase text-on-surface-variant dark:text-slate-400 font-semibold">Experience</span>
                </div>
                <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10 text-center">
                  <span className="font-display-xl text-xl font-bold text-emerald-700 dark:text-emerald-400 block">15,000+</span>
                  <span className="font-label-mono text-[10px] uppercase text-on-surface-variant dark:text-slate-400 font-semibold">Scholars</span>
                </div>
                <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-glass-border dark:border-white/10 text-center col-span-2 sm:col-span-1">
                  <span className="font-display-xl text-xl font-bold text-cyan-800 dark:text-cyan-300 block">100%</span>
                  <span className="font-label-mono text-[10px] uppercase text-on-surface-variant dark:text-slate-400 font-semibold">Govt Approved</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3">
                <a 
                  href="https://wa.me/918178056407?text=Hello%20Divya%20Dhariwal,%20I%20would%20like%20to%20consult%20regarding%20my%20admissions."
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-accent hover:bg-emerald-600 text-white font-label-mono text-xs font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-md transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  Consult With Divya Dhariwal
                </a>
                <Link
                  to="/about"
                  className="glass-panel text-navy-deep dark:text-white font-label-mono text-xs font-bold px-5 py-3 rounded-full inline-flex items-center gap-2 border border-glass-border dark:border-white/10 hover:text-emerald-accent transition-colors"
                >
                  <span>Read Full Story</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* SEO FAQ Section with Structured Content */}
      <HomeFAQ />

      {/* Fast-Track Admission Query Box */}
      <section className="mb-28 md:mb-36 flex justify-center w-full" id="query-box">
        <div className="w-full max-w-2xl">
          <div className="glass-panel p-6 md:p-10 rounded-3xl border border-glass-border dark:border-white/10 shadow-2xl relative bg-white/85 dark:bg-slate-800/90 transition-transform duration-200">
            <div className="absolute -top-4 -right-4 bg-emerald-accent p-3 rounded-2xl shadow-lg animate-bounce">
              <span className="material-symbols-outlined text-white">rocket_launch</span>
            </div>
            <h3 className="font-display-xl text-2xl md:text-3xl text-center mb-2 text-navy-deep dark:text-white">Start Your Admission Query</h3>
            <p className="text-center text-on-surface-variant dark:text-slate-400 mb-6 text-sm font-medium">
              Direct connection with our senior academic counselors via WhatsApp &amp; Phone.
            </p>

            {formStatus === 'error' && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs md:text-sm font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                <span>{errorMessage}</span>
              </div>
            )}

            {formStatus === 'success' && (
              <div className="mb-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs md:text-sm font-medium flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl text-emerald-accent">check_circle</span>
                  <span>WhatsApp conversation initialized! Opening chat...</span>
                </div>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-xs font-bold underline ml-2"
                >
                  Reset
                </button>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleWaSubmit}>
              <div className="space-y-1">
                <label htmlFor="inquiry-name" className="font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 uppercase ml-2 font-bold">Full Name *</label>
                <input 
                  id="inquiry-name"
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="w-full bg-white dark:bg-slate-900 border border-glass-border dark:border-slate-700 rounded-xl px-4 py-3 focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent outline-none transition-all text-on-surface dark:text-white text-sm" 
                  placeholder="Enter your full name" 
                  type="text" 
                  required
                  aria-label="Full Name"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="inquiry-course" className="font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 uppercase ml-2 font-bold">Academic Vertical *</label>
                <select 
                  id="inquiry-course"
                  name="course" 
                  value={formData.course} 
                  onChange={handleInputChange} 
                  className="w-full bg-white dark:bg-slate-900 border border-glass-border dark:border-slate-700 rounded-xl px-4 py-3 focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent outline-none transition-all text-on-surface dark:text-white text-sm cursor-pointer"
                  aria-label="Academic Vertical"
                >
                  <option value="NIOS Secondary (Class 10th)">NIOS Secondary (Class 10th)</option>
                  <option value="NIOS Sr. Secondary (Class 12th)">NIOS Sr. Secondary (Class 12th)</option>
                  <option value="IGNOU Undergraduate (BA, B.Com, BCA, etc.)">IGNOU Undergraduate (BA, B.Com, BCA, etc.)</option>
                  <option value="IGNOU Postgraduate (MA, M.Com, MBA, MCA)">IGNOU Postgraduate (MA, M.Com, MBA, MCA)</option>
                  <option value="Regular University Degrees (B.Tech, MBA, Law)">Regular University Degrees (B.Tech, MBA, Law)</option>
                  <option value="PhD Research & Doctoral Thesis Guidance">PhD Research &amp; Doctoral Thesis Guidance</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="inquiry-phone" className="font-label-mono text-[10px] text-on-surface-variant dark:text-slate-400 uppercase ml-2 font-bold">WhatsApp / Mobile Contact *</label>
                <input 
                  id="inquiry-phone"
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="w-full bg-white dark:bg-slate-900 border border-glass-border dark:border-slate-700 rounded-xl px-4 py-3 focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent outline-none transition-all text-on-surface dark:text-white text-sm" 
                  placeholder="+91 98765 43210" 
                  type="tel" 
                  required
                  aria-label="WhatsApp or Mobile Phone Number"
                />
              </div>

              <button 
                className="w-full bg-emerald-accent hover:bg-emerald-600 text-white py-3.5 rounded-xl font-bold font-label-mono transition-all hover:scale-[1.01] active:scale-95 shadow-lg shadow-emerald-accent/20 flex items-center justify-center gap-2 mt-4 text-sm cursor-pointer" 
                type="submit"
              >
                <span>CONNECT WITH COUNSELOR</span>
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </form>
            <p className="text-center text-[11px] font-label-mono text-emerald-800 dark:text-emerald-400 font-semibold mt-4 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-xs">lock</span> 100% PRIVATE &amp; OFFICIAL GUIDANCE
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By / Partners */}
      <section className="mb-20 flex flex-col items-center border-t border-glass-border dark:border-white/10 pt-14">
        <p className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant dark:text-slate-400 mb-8 font-bold text-center">
          ACADEMIC RECOGNITIONS &amp; ACCREDITATIONS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75 dark:opacity-65">
          <div className="flex items-center gap-2 text-navy-deep dark:text-slate-200">
            <span className="material-symbols-outlined text-3xl text-emerald-accent">verified</span>
            <span className="font-display-xl text-lg font-bold">NIOS MHRD</span>
          </div>
          <div className="flex items-center gap-2 text-navy-deep dark:text-slate-200">
            <span className="material-symbols-outlined text-3xl text-tertiary">school</span>
            <span className="font-display-xl text-lg font-bold">IGNOU Central Uni</span>
          </div>
          <div className="flex items-center gap-2 text-navy-deep dark:text-slate-200">
            <span className="material-symbols-outlined text-3xl text-premium-gold">workspace_premium</span>
            <span className="font-display-xl text-lg font-bold">UGC - DEB Approved</span>
          </div>
          <div className="flex items-center gap-2 text-navy-deep dark:text-slate-200">
            <span className="material-symbols-outlined text-3xl text-primary">public</span>
            <span className="font-display-xl text-lg font-bold">AIU Equivalence</span>
          </div>
        </div>
      </section>
    </main>
  );
}
