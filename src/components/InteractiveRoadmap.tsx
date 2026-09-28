import { useState } from 'react';

const roadmapSteps = [
  {
    id: 1,
    title: 'Application',
    description: 'Submit your initial application form with basic details and program preferences.',
    icon: 'edit_document',
    details: 'Our admission portal is open 24/7. Simply fill in your contact information and select your preferred academic vertical to initiate the process.'
  },
  {
    id: 2,
    title: 'Counseling',
    description: 'One-on-one session with our senior academic consultants to map your career goals.',
    icon: 'chat',
    details: 'Our experts will reach out to discuss your background, analyze your requirements, and suggest the best possible pathways for your future.'
  },
  {
    id: 3,
    title: 'Verification',
    description: 'Digital scanning and multi-layered document verification for eligibility assurance.',
    icon: 'task',
    details: 'Upload your previous mark sheets, ID proofs, and photographs. Our team verifies everything against the respective board/university guidelines.'
  },
  {
    id: 4,
    title: 'Processing',
    description: 'We handle the complex paperwork and liaise directly with the institution.',
    icon: 'autorenew',
    details: 'Sit back and relax while we submit your verified documents to the institution and track the progress of your application closely.'
  },
  {
    id: 5,
    title: 'Enrollment',
    description: 'Final seat allocation and issuance of enrollment documentation from the institution.',
    icon: 'school',
    details: 'Receive your official enrollment number, ID card, and study materials. Welcome to your new academic journey with Divya Admission Hub!'
  }
];

export default function InteractiveRoadmap() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full relative py-8">
      {/* Interactive Horizontal Timeline */}
      <div className="relative flex justify-between items-center mb-12">
        {/* Connecting Line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-glass-border dark:bg-slate-700 rounded-full z-0 overflow-hidden">
          <div 
            className="h-full bg-emerald-accent transition-all duration-300 ease-in-out"
            style={{ width: `${(activeStep / (roadmapSteps.length - 1)) * 100}%` }}
          />
        </div>

        {/* Steps */}
        {roadmapSteps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(index)}
            className={`relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none`}
            aria-label={`Step ${step.id}: ${step.title}`}
          >
            <div 
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-sm md:text-base transition-all duration-300 ${
                index <= activeStep
                  ? 'bg-emerald-accent text-white shadow-lg shadow-emerald-accent/25 ring-4 ring-emerald-accent/20 scale-105'
                  : 'bg-white dark:bg-slate-800 text-on-surface-variant dark:text-slate-400 border border-glass-border dark:border-slate-700 group-hover:border-emerald-accent'
              }`}
            >
              <span className="material-symbols-outlined text-lg md:text-xl">
                {step.icon}
              </span>
            </div>
            <span 
              className={`absolute -bottom-7 font-label-mono text-[10px] md:text-xs font-semibold whitespace-nowrap transition-colors duration-300 ${
                index === activeStep 
                  ? 'text-emerald-700 dark:text-emerald-400 font-bold' 
                  : 'text-on-surface-variant dark:text-slate-400 group-hover:text-emerald-700'
              }`}
            >
              {step.title}
            </span>
          </button>
        ))}
      </div>

      {/* Step Content Card */}
      <div className="mt-14 glass-panel p-6 md:p-8 rounded-3xl border border-glass-border dark:border-white/10 shadow-lg bg-white/80 dark:bg-slate-800/80">
        <div
          key={activeStep}
          className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between transition-opacity duration-300 ease-out"
        >
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-accent/15 text-emerald-800 dark:text-emerald-300 font-label-mono text-xs font-bold uppercase tracking-wider">
              Step {roadmapSteps[activeStep].id} of {roadmapSteps.length}
            </div>
            <h3 className="font-display-xl text-2xl md:text-3xl text-navy-deep dark:text-white font-bold">
              {roadmapSteps[activeStep].title}
            </h3>
            <p className="text-on-surface-variant dark:text-slate-300 text-sm md:text-base leading-relaxed">
              {roadmapSteps[activeStep].details}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className={`min-w-[44px] min-h-[44px] px-5 py-2.5 rounded-full font-label-mono text-xs font-bold transition-all border border-glass-border dark:border-slate-700 flex items-center justify-center gap-1.5 ${
                activeStep === 0
                  ? 'opacity-40 cursor-not-allowed bg-black/5 dark:bg-white/5 text-on-surface-variant'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-navy-deep dark:text-white'
              }`}
              aria-label="Previous step"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              PREV
            </button>
            <button
              onClick={() => setActiveStep((prev) => Math.min(roadmapSteps.length - 1, prev + 1))}
              disabled={activeStep === roadmapSteps.length - 1}
              className={`min-w-[44px] min-h-[44px] px-5 py-2.5 rounded-full font-label-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeStep === roadmapSteps.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-black/5 dark:bg-white/5 text-on-surface-variant'
                  : 'bg-emerald-accent hover:bg-emerald-600 text-white shadow-md shadow-emerald-accent/20'
              }`}
              aria-label="Next step"
            >
              NEXT
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
