import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const allFaqs = [
    {
      question: "What is the general admission process through your consultancy?",
      answer: "The admission process typically involves an initial consultation to determine your goals, followed by document collection and verification, application submission to the desired board/university, and finally, enrollment confirmation. Our team handles the entire procedure on your behalf."
    },
    {
      question: "Is NIOS 12th certificate eligible for NEET, JEE, CUET, and government jobs?",
      answer: "Yes, 100%. The National Institute of Open Schooling (NIOS) is an autonomous institution under the Ministry of Education, Govt. of India. NIOS 10th and 12th certificates are equivalent to CBSE/ICSE and are fully recognized for NEET, JEE, NDA, UPSC, SSC, and all central/state university admissions."
    },
    {
      question: "What is Transfer of Credit (TOC) and how does it save a student's year?",
      answer: "TOC allows students who failed in CBSE, ICSE, or State Boards to transfer marks of up to 2 passed subjects directly to their NIOS marksheet. You only need to appear and pass the remaining 3 subjects to secure your complete pass certificate, saving a whole academic year."
    },
    {
      question: "How does the IGNOU support system work?",
      answer: "We provide end-to-end assistance: admission form filling, subject selection, procurement of official study kits, solved assignment guidance, project work assistance, and exam center registration tracking."
    },
    {
      question: "What are the essential document requirements for admission?",
      answer: "Essential documents include: valid Government ID (Aadhaar Card / Passport), Date of Birth proof, recent passport-sized photographs, and previous academic marksheets (Class 10th marksheet for 12th admission; 12th marksheet for Degree admission)."
    },
    {
      question: "What is the timeline for admission processing and enrollment?",
      answer: "Standard initial filing takes 24 to 48 hours once documents are verified. Enrollment numbers are assigned directly by the board or university as per their official verification cycles. We provide tracking updates via WhatsApp."
    },
    {
      question: "Can working professionals enroll in regular or distance degrees?",
      answer: "Yes. We offer distance degrees through IGNOU and UGC-DEB approved universities that require no physical daily attendance, as well as executive weekend programs and doctoral research guidance tailored for working professionals."
    },
    {
      question: "Where is Divya Admission Hub located and can I visit the office in Delhi?",
      answer: "Divya Admission Hub central counseling office is situated at 2nd Floor, Prime Dental Clinic, Near Pani Ki Tanki (Water Tank), Dayalpur, Delhi - 110094. Candidates and parents can visit Monday through Saturday (09:30 AM to 07:30 PM) for in-person document review and academic guidance, or connect with Divya Dhariwal directly via WhatsApp (+91 8178056407)."
    },
    {
      question: "What is the difference between NIOS Stream 1, Stream 2, and On-Demand Examinations?",
      answer: "Stream 1 is for fresh learners appearing in regular bi-annual board exams (April/October). Stream 2 is specifically designed for students who recently did not clear exams in CBSE, ICSE, or State Boards to re-appear without losing an entire school year. Stream 3 and 4 are On-Demand Examinations (ODES) allowing students to select their own exam dates at designated Kendriya Vidyalayas and NIOS regional centers."
    }
  ];

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return allFaqs;
    const q = searchQuery.toLowerCase();
    return allFaqs.filter(
      f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );
  }, [searchQuery, allFaqs]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-20">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="flex flex-col items-center mb-8 text-center">
        <span className="font-label-mono text-xs uppercase tracking-widest text-emerald-accent font-bold mb-2">
          Knowledge Base &amp; Clarifications
        </span>
        <h2 className="font-display-xl text-3xl md:text-4xl text-navy-deep dark:text-white">
          Frequently Asked <span className="text-emerald-accent">Questions</span>
        </h2>
        <div className="h-1 w-24 bg-emerald-accent rounded-full mt-3"></div>
      </div>

      {/* Search Input for FAQs */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. NIOS, NEET, documents, TOC)..."
            className="w-full bg-white dark:bg-slate-800 border border-glass-border dark:border-slate-700 rounded-full px-5 py-3 pl-12 text-sm text-on-surface dark:text-white outline-none focus:border-emerald-accent focus:ring-1 focus:ring-emerald-accent shadow-xs"
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
            search
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs font-label-mono font-bold"
            >
              CLEAR
            </button>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-10 glass-panel rounded-2xl p-6">
            <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">contact_support</span>
            <p className="text-on-surface-variant dark:text-slate-300 font-medium text-sm">
              No matching questions found for "{searchQuery}".
            </p>
            <a
              href="https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub,%20I%20have%20a%20specific%20question%20regarding%20admissions."
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-xs font-label-mono font-bold text-emerald-accent underline"
            >
              Ask our counselor directly on WhatsApp →
            </a>
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`glass-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-emerald-accent/40 shadow-sm bg-white dark:bg-slate-800' 
                    : 'border-glass-border dark:border-white/10 hover:border-emerald-accent/20 bg-white/60 dark:bg-slate-800/60'
                }`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 md:py-5 flex items-center justify-between text-left focus:outline-none gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display-xl text-base md:text-lg font-semibold transition-colors ${
                    isOpen ? 'text-emerald-600 dark:text-emerald-400' : 'text-navy-deep dark:text-slate-200'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`material-symbols-outlined shrink-0 text-xl transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-accent' : 'text-slate-400'
                  }`}>
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-5 px-6 pt-1">
                    <p className="text-on-surface-variant dark:text-slate-300 font-medium text-sm md:text-base border-t border-black/5 dark:border-white/10 pt-3 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
