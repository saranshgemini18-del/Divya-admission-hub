import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the general admission process through your consultancy?",
      answer: "The admission process typically involves an initial consultation to determine your goals, followed by document collection and verification, application submission to the desired board/university, and finally, enrollment confirmation. Our team handles the entire process on your behalf."
    },
    {
      question: "What is the timeline for admission processing and enrollment?",
      answer: "Standard processing takes about 3-5 working days from document submission to application filing. However, the final enrollment timeline depends on the respective institution (NIOS, IGNOU, etc.). For priority applicants, we can fast-track the initial document verification within 48 business hours."
    },
    {
      question: "What are the essential document requirements for admission?",
      answer: "While specific requirements vary by program, the essential documents include: valid Government ID (Aadhar/Passport), Date of Birth proof, recent passport-sized photographs, and previous academic marksheets/certificates. Additional documents may be required for specific university or doctoral programs."
    },
    {
      question: "How does the IGNOU and NIOS support system work?",
      answer: "We provide end-to-end assistance starting from university/board registration, selection of electives, procurement of study materials, to dedicated guidance for solving assignments and project submissions."
    },
    {
      question: "Is the fast-track degree program globally recognized?",
      answer: "Yes. All degrees and certifications processed through our consultancy are fully accredited by UGC/MHRD and are completely valid for government jobs, higher education abroad, and corporate placements."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
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
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="font-display-xl text-3xl md:text-4xl text-navy-deep dark:text-white">
          Frequently Asked <span className="text-emerald-accent">Questions</span>
        </h2>
        <div className="h-1 w-24 bg-primary rounded-full mt-4"></div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-primary/30 shadow-md bg-white dark:bg-slate-800' : 'border-glass-border dark:border-white/10 hover:border-primary/20 dark:hover:border-primary/40 bg-white/50 dark:bg-slate-800/50'}`}
          >
            <button 
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={`font-display-xl text-lg md:text-xl transition-colors ${openIndex === index ? 'text-primary dark:text-emerald-400' : 'text-navy-deep dark:text-slate-200'}`}>
                {faq.question}
              </span>
              <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary dark:text-emerald-400' : 'text-on-surface-variant dark:text-slate-400'}`}>
                expand_more
              </span>
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 overflow-hidden px-6'}`}
            >
              <p className="text-on-surface-variant dark:text-slate-300 font-medium text-sm md:text-base border-t border-black/5 dark:border-white/10 pt-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
