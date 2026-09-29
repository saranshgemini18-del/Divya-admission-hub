import React from 'react';

const ADVANTAGES = [
  {
    feature: 'Official Govt Recognition',
    openSchooling: '100% equivalent to CBSE & ICSE under Ministry of Education, Govt of India',
    traditional: 'Recognized by respective national or state government boards',
    highlight: true,
  },
  {
    feature: 'NEET, JEE, CUET & NDA Validity',
    openSchooling: 'Fully valid for all national entrance examinations & defense careers',
    traditional: 'Fully valid for entrance exams',
    highlight: false,
  },
  {
    feature: 'Exam Schedule Flexibility',
    openSchooling: 'On-Demand examinations (ODE) throughout the year + Public exams twice a year',
    traditional: 'Fixed once-a-year annual board schedule with strict timetable',
    highlight: true,
  },
  {
    feature: 'Subject Selection Freedom',
    openSchooling: 'Choose any combination across Science, Arts, Commerce without restrictions',
    traditional: 'Restricted rigid stream combinations defined by school administration',
    highlight: false,
  },
  {
    feature: 'Transfer of Credit (TOC)',
    openSchooling: 'Transfer up to 2 passed subjects from failed board to save full academic year',
    traditional: 'Repeat full year and reappear in all subjects from scratch',
    highlight: true,
  },
  {
    feature: 'Attendance Requirement',
    openSchooling: '0% mandatory daily attendance — ideal for athletes, job holders & competitive aspirants',
    traditional: 'Minimum 75% compulsory classroom attendance required',
    highlight: false,
  },
];

export default function OpenSchoolingAdvantage() {
  return (
    <section className="mb-28 md:mb-36" id="open-vs-regular" aria-labelledby="advantage-heading">
      <div className="flex flex-col items-center mb-12 gap-2 text-center">
        <span className="font-label-mono text-xs uppercase tracking-widest text-emerald-accent font-bold">
          Compare &amp; Decide
        </span>
        <h2 id="advantage-heading" className="font-display-xl text-3xl md:text-5xl text-navy-deep dark:text-white">
          Why Choose <span className="text-emerald-accent">Class 10th &amp; 12th by Open?</span>
        </h2>
        <div className="h-1 w-24 bg-emerald-accent rounded-full mb-3"></div>
        <p className="text-on-surface-variant dark:text-slate-400 text-sm md:text-base max-w-2xl">
          National Institute of Open Schooling (NIOS) offers government-accredited qualifications with unprecedented flexibility, empowering over 5 lakh students each year.
        </p>
      </div>

      <div className="glass-panel rounded-3xl border border-glass-border dark:border-white/10 shadow-xl overflow-hidden bg-white/85 dark:bg-slate-900/85">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-glass-border dark:border-white/10 bg-slate-50/80 dark:bg-slate-800/80">
                <th scope="col" className="p-4 sm:p-5 font-display-xl text-xs sm:text-sm font-bold text-navy-deep dark:text-white w-1/3">
                  Academic Dimension
                </th>
                <th scope="col" className="p-4 sm:p-5 font-display-xl text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 w-1/3 bg-emerald-500/10">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    <span>NIOS Open Schooling (Our Specialty)</span>
                  </div>
                </th>
                <th scope="col" className="p-4 sm:p-5 font-display-xl text-xs sm:text-sm font-bold text-on-surface-variant dark:text-slate-400 w-1/3">
                  Traditional Regular Schooling
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-glass-border dark:divide-white/5">
              {ADVANTAGES.map((adv, idx) => (
                <tr 
                  key={idx} 
                  className={`hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors ${
                    adv.highlight ? 'bg-emerald-500/[0.02]' : ''
                  }`}
                >
                  <th scope="row" className="p-4 sm:p-5 font-semibold text-navy-deep dark:text-white align-top text-xs sm:text-sm">
                    {adv.feature}
                  </th>
                  <td className="p-4 sm:p-5 text-on-surface dark:text-slate-200 bg-emerald-500/[0.04] align-top text-xs sm:text-sm font-medium">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-emerald-accent text-base shrink-0 mt-0.5">check</span>
                      <span>{adv.openSchooling}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-on-surface-variant dark:text-slate-400 align-top text-xs sm:text-sm">
                    {adv.traditional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Banner */}
        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/60 border-t border-glass-border dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-on-surface-variant dark:text-slate-300">
            <strong>Need instant admission for the upcoming cycle?</strong> Our counselors guide you through subject selection and TMA preparation.
          </div>
          <a
            href="https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub!%20I%20want%20to%20know%20more%20about%20Class%2010th%20or%2012th%20by%20open%20schooling."
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-emerald-accent hover:bg-emerald-600 text-white font-bold py-2.5 px-5 rounded-full text-xs font-label-mono transition-all flex items-center gap-1.5 shadow-md"
          >
            <span>Ask Counselor Now</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
