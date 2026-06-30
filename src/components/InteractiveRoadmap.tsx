import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
    details: 'Receive your official enrollment number, ID card, and study materials. Welcome to your new academic journey with Divya Academia!'
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
          <motion.div 
            className="h-full bg-emerald-accent"
            initial={{ width: 0 }}
            animate={{ width: `${(activeStep / (roadmapSteps.length - 1)) * 100}%` }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
        </div>

        {/* Steps */}
        {roadmapSteps.map((step, index) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center">
            <button
              onClick={() => setActiveStep(index)}
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                index <= activeStep 
                  ? 'bg-emerald-accent text-white shadow-lg shadow-emerald-accent/30 scale-110 border-4 border-white dark:border-slate-900' 
                  : 'bg-white dark:bg-slate-800 text-on-surface-variant dark:text-slate-400 border-4 border-glass-border dark:border-slate-700 hover:scale-105'
              }`}
              aria-label={`Step ${index + 1}: ${step.title}`}
              aria-pressed={index === activeStep}
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">{step.icon}</span>
            </button>
            <div className={`mt-4 font-bold text-sm md:text-base hidden sm:block transition-colors duration-300 ${
              index <= activeStep ? 'text-navy-deep dark:text-emerald-accent' : 'text-on-surface-variant dark:text-slate-500'
            }`}>
              {step.title}
            </div>
          </div>
        ))}
      </div>

      {/* Active Step Details */}
      <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-glass-border dark:border-slate-700 rounded-3xl p-6 md:p-8 min-h-[220px] md:min-h-[200px] shadow-lg relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col md:flex-row gap-6 items-start md:items-center h-full"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-emerald-accent/10 dark:bg-emerald-accent/20 text-emerald-accent rounded-2xl flex items-center justify-center border border-emerald-accent/20">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {roadmapSteps[activeStep].icon}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-label-mono text-xs font-bold text-emerald-accent bg-emerald-accent/10 px-2 py-1 rounded">STEP 0{activeStep + 1}</span>
                <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white">{roadmapSteps[activeStep].title}</h3>
              </div>
              <p className="text-on-surface-variant dark:text-slate-300 text-lg font-medium mb-3">
                {roadmapSteps[activeStep].description}
              </p>
              <p className="text-on-surface-variant/80 dark:text-slate-400 text-sm">
                {roadmapSteps[activeStep].details}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation buttons */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button 
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button 
            onClick={() => setActiveStep(prev => Math.min(roadmapSteps.length - 1, prev + 1))}
            disabled={activeStep === roadmapSteps.length - 1}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
