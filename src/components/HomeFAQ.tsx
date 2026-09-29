import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const homeFaqData: FAQItem[] = [
  {
    category: "NIOS Open Schooling",
    question: "What is Class 10th & 12th admission by open schooling (NIOS)?",
    answer: "Open schooling via NIOS (National Institute of Open Schooling) is an autonomous institution under the Ministry of Education, Government of India. It provides recognized Secondary (10th) and Senior Secondary (12th) certificates with complete flexibility in subject selection and exam schedules. NIOS certificates have 100% legal equivalence with CBSE, ICSE, and all State Boards."
  },
  {
    category: "Validity & Recognition",
    question: "Is NIOS 10th and 12th valid for NEET, JEE, CUET, NDA, and Government Jobs?",
    answer: "Yes, absolutely! The Government of India, Association of Indian Universities (AIU), National Testing Agency (NTA), and Supreme Court of India have affirmed that NIOS 10th and 12th pass certificates are fully eligible for NEET (Medical), JEE Mains & Advanced (Engineering), CUET (Central Universities), NDA (Defense), UPSC, SSC, and all government and private sector jobs."
  },
  {
    category: "Year Protection (TOC)",
    question: "Can a failed student in 10th or 12th save their year through Transfer of Credit (TOC)?",
    answer: "Yes! If you did not clear your 10th or 12th board exams from CBSE, ICSE, or any recognized State Board, NIOS offers the Transfer of Credit (TOC) scheme. You can transfer passing marks for up to 2 subjects directly to your NIOS marksheet and only appear for the remaining 3 subjects via On-Demand or Public exams, saving your full academic year."
  },
  {
    category: "Admissions & Documentation",
    question: "What documents are required for NIOS Class 10th and 12th open admission in Dayalpur?",
    answer: "For Class 10th: Valid Aadhaar card, birth certificate or previous school leaving certificate/transfer certificate (TC), passport-size photographs, and address proof. For Class 12th: Class 10th original passing marksheet, Aadhaar card, recent passport photographs, and address proof. Our counselors at Dayalpur assist with instant digital document verification and fee submission."
  },
  {
    category: "Local Center & Proximity",
    question: "Where is Divya Admission Hub located and what nearby areas do you serve?",
    answer: "Our authorized admission consultancy center is located at 2nd Floor, Prime Dental Clinic, Near Pani Ki Tanki, Dayalpur, Delhi - 110094. We are the premier open schooling help desk for students across Dayalpur, Bhajanpura, Karawal Nagar, Yamuna Vihar, Khajuri Khas, Gokalpuri, Shahdara, Dilshad Garden, Seelampur, and the entire Delhi NCR region."
  },
  {
    category: "College & Professional Courses",
    question: "Do you offer guidance for IGNOU degrees, B.Ed, DIET, and D.Pharma admissions?",
    answer: "Yes! Besides NIOS open schooling, Divya Admission Hub provides authorized admission assistance and study support for IGNOU degrees (BA, B.Com, BCA, MBA, MCA, MA) as well as direct admissions for professional programs including B.Ed, BA-B.Ed, DIET, JBT, D.Pharma, and B.Pharma in NCTE, PCI, and UGC-recognized universities."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="mb-28 md:mb-36" id="faq-section" aria-labelledby="faq-heading">
      <div className="flex flex-col items-center mb-12 gap-2 text-center">
        <span className="font-label-mono text-xs uppercase tracking-widest text-emerald-accent font-bold">
          Got Questions? We Have Answers
        </span>
        <h2 id="faq-heading" className="font-display-xl text-3xl md:text-5xl text-navy-deep dark:text-white">
          Frequently Asked <span className="text-emerald-accent">Questions</span>
        </h2>
        <div className="h-1 w-24 bg-emerald-accent rounded-full mb-3"></div>
        <p className="text-on-surface-variant dark:text-slate-400 text-sm md:text-base max-w-2xl">
          Everything you need to know about Class 10th &amp; 12th open schooling, NIOS admission in Dayalpur, Transfer of Credit (TOC), and higher education options.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {homeFaqData.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className={`glass-panel rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'border-emerald-accent/50 bg-white/90 dark:bg-slate-800/95 shadow-lg' 
                  : 'border-glass-border dark:border-white/10 bg-white/60 dark:bg-slate-900/60 hover:border-emerald-accent/30'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
                className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-accent"
              >
                <div className="flex flex-col gap-1 pr-2">
                  <span className="font-label-mono text-[11px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold">
                    {item.category}
                  </span>
                  <span className="font-display-xl text-base md:text-lg text-navy-deep dark:text-white font-semibold leading-snug">
                    {item.question}
                  </span>
                </div>
                <div 
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen 
                      ? 'bg-emerald-accent text-white rotate-180' 
                      : 'bg-black/5 dark:bg-white/10 text-on-surface-variant dark:text-slate-300'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">expand_more</span>
                </div>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className="px-5 pb-5 md:px-6 md:pb-6 pt-1 text-on-surface-variant dark:text-slate-300 text-sm md:text-base leading-relaxed border-t border-glass-border/40 dark:border-white/5"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs md:text-sm text-on-surface-variant dark:text-slate-400">
          Still have questions regarding your specific board or marksheet?{' '}
          <a 
            href="https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub!%20I%20have%20a%20question%20regarding%20open%20schooling%20admission."
            target="_blank"
            rel="noreferrer"
            className="text-emerald-accent font-bold hover:underline inline-flex items-center gap-1"
          >
            Chat with an Academic Counselor <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </p>
      </div>
    </section>
  );
}
