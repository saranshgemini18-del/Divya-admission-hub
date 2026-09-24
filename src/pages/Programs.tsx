import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface ProgramDetail {
  id: string;
  category: 'nios' | 'ignou' | 'degrees';
  title: string;
  tag: string;
  tagColor: string;
  icon: string;
  iconColor: string;
  shortDesc: string;
  eligibility: string;
  admissionCycles: string;
  keyFeatures: string[];
  subjectsOffered: string[];
  docsRequired: string[];
  feeRange: string;
}

const programsData: ProgramDetail[] = [
  {
    id: 'nios-secondary',
    category: 'nios',
    title: 'NIOS Secondary (Class 10th)',
    tag: 'Fast-Track 10th',
    tagColor: 'bg-primary/15 text-primary',
    icon: 'menu_book',
    iconColor: 'text-primary',
    shortDesc: 'Flexible open schooling for 10th standard under Ministry of Education, Govt. of India. Study at your own pace with on-demand examinations.',
    eligibility: 'Minimum 14 years of age. Basic reading/writing ability or formal schooling up to 8th/9th class.',
    admissionCycles: 'Block 1 (April/May Exams) & Block 2 (October/November Exams) + On-Demand Exams year-round',
    keyFeatures: [
      'MHRD & AIU Recognized globally',
      'Choice of 5 subjects without mandatory science/math restrictions',
      'Transfer of Credit (TOC) up to 2 failed/passed subjects from previous boards (CBSE, ICSE, State Boards)',
      'Practical guidance and Tutor Marked Assignments (TMA) marks assistance'
    ],
    subjectsOffered: ['English', 'Hindi', 'Mathematics', 'Science & Technology', 'Social Science', 'Home Science', 'Data Entry Operations', 'Economics', 'Business Studies'],
    docsRequired: ['Valid Aadhaar Card / ID Proof', 'Date of Birth Certificate / Previous School Leaving Certificate', 'Recent Passport-size Photographs', 'Address Proof'],
    feeRange: 'Affordable Govt. structured fee + complete consultancy support'
  },
  {
    id: 'nios-sr-secondary',
    category: 'nios',
    title: 'NIOS Senior Secondary (Class 12th)',
    tag: 'NEET / JEE Valid',
    tagColor: 'bg-emerald-accent/15 text-emerald-accent',
    icon: 'school',
    iconColor: 'text-emerald-accent',
    shortDesc: '12th standard certification recognized by all universities, IITs, AIIMS, NEET, NDA, and UPSC. Ideal for competitive exam aspirants and working students.',
    eligibility: 'Must have passed Class 10th from any recognized board (CBSE, ICSE, State Board, or NIOS).',
    admissionCycles: 'April Session & October Session + On-Demand Examinations for quick clearance',
    keyFeatures: [
      '100% valid for NEET, JEE Mains/Advanced, CUET, NDA, and CA Foundation',
      'Transfer of Credit (TOC) facility for failed students to save full academic year',
      'Science (PCM/PCB), Commerce, and Humanities streams available',
      'Flexible exam dates & continuous TMA assignment guidance'
    ],
    subjectsOffered: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Accountancy', 'Economics', 'Business Studies', 'Computer Science', 'History', 'Political Science', 'English'],
    docsRequired: ['Class 10th Passed Marksheet & Certificate', 'Aadhaar Card', 'Passport-size Photos', 'Migration Certificate (if applicable)'],
    feeRange: 'Subsidized board charges + specialized tutor & practical guidance packages'
  },
  {
    id: 'ignou-undergraduate',
    category: 'ignou',
    title: 'IGNOU Undergraduate Degrees (BA, B.Com, BCA, B.Sc)',
    tag: 'UGC-DEB NAAC A++',
    tagColor: 'bg-tertiary/15 text-tertiary',
    icon: 'assignment_ind',
    iconColor: 'text-tertiary',
    shortDesc: 'Accredited university degrees from Indira Gandhi National Open University. Complete support for enrollment, assignment submission, project work, and term-end examinations.',
    eligibility: '10+2 (Senior Secondary) pass from any recognized board (CBSE, NIOS, State Board).',
    admissionCycles: 'January Cycle & July Cycle admissions annually',
    keyFeatures: [
      'Degree recognized across government jobs (UPSC, SSC, Banking) and foreign visa assessments (WES)',
      'No daily attendance pressure; complete remote learning support',
      'Comprehensive assignment solutions & solved sample papers',
      'Re-registration and exam form tracking assistance'
    ],
    subjectsOffered: ['Bachelor of Arts (BA General & Honors)', 'Bachelor of Commerce (B.Com)', 'Bachelor of Computer Applications (BCA)', 'Bachelor of Science (B.Sc)', 'Bachelor of Social Work (BSW)'],
    docsRequired: ['Class 10th & 12th Marksheets', 'Aadhaar Card', 'Passport Size Photograph', 'Digital Signature'],
    feeRange: 'Official IGNOU university fees + dedicated mentor support'
  },
  {
    id: 'ignou-postgraduate',
    category: 'ignou',
    title: 'IGNOU Postgraduate Degrees (MA, M.Com, MBA, MCA)',
    tag: 'Career Acceleration',
    tagColor: 'bg-teal-700/15 text-teal-600 dark:text-teal-400',
    icon: 'badge',
    iconColor: 'text-teal-500',
    shortDesc: 'Higher education credentials tailored for working professionals and career changers. Elevate your resume with an authentic Master’s degree from a central university.',
    eligibility: 'Bachelor’s degree in any discipline from a UGC-recognized university.',
    admissionCycles: 'January & July Sessions',
    keyFeatures: [
      'Ideal for corporate professionals seeking promotions and higher pay scales',
      'Specialized MBA streams (Finance, Marketing, HR, Operations, IT)',
      'Dissertation, project synopsis, and research paper submission support',
      'Exams conducted in local district exam centers throughout India'
    ],
    subjectsOffered: ['MBA (General & Specialized)', 'MCA (Master of Computer Applications)', 'MA English / History / Psychology / Sociology', 'M.Com', 'MSW (Master of Social Work)'],
    docsRequired: ['Graduation Marksheet & Provisional Degree', '10th & 12th Certificates', 'Identity Proof (Aadhaar / Passport)', 'Photos'],
    feeRange: 'Central university tariff + personalized concierge counseling'
  },
  {
    id: 'direct-teaching-pharmacy',
    category: 'degrees',
    title: 'Direct Admission: B.Ed, DIET, JBT, D.Pharma & B.Pharma',
    tag: 'Direct Admission',
    tagColor: 'bg-emerald-600/15 text-emerald-600 dark:text-emerald-400',
    icon: 'local_pharmacy',
    iconColor: 'text-emerald-500',
    shortDesc: 'Guaranteed direct seat allocation for Teaching (B.Ed, BA-B.Ed, DIET, JBT from CSCU, MDU, CRSU) and Pharmacy council recognized programs (D.Pharma, B.Pharma).',
    eligibility: '10+2 with Science (PCB/PCM) for Pharmacy; Graduation/12th with 50% for B.Ed / DIET / JBT.',
    admissionCycles: 'Current Academic Session 2024 - 2025 Enrollments Open',
    keyFeatures: [
      'State & Central University approvals (MDU Rohtak, CRSU, CSCU)',
      'Pharmacy Council of India (PCI) and NCTE approved colleges',
      'No hassle counseling and documentation assistance',
      'Examination, practical file, and project assignment support'
    ],
    subjectsOffered: ['B.Ed (Bachelor of Education)', 'Integrated BA-B.Ed', 'DIET / JBT Primary Teacher Training', 'D.Pharma (Diploma in Pharmacy)', 'B.Pharma (Bachelor of Pharmacy)'],
    docsRequired: ['Class 10th & 12th Marksheets', 'Graduation Marksheets (for B.Ed)', 'Aadhaar Card', 'Migration Certificate', 'Passport Photos'],
    feeRange: 'Government and university regulated fee norms with installment flexibility'
  },
  {
    id: 'prestige-degrees',
    category: 'degrees',
    title: 'Prestige Private University Placements (B.Tech, Law, Management)',
    tag: 'Campus Placement',
    tagColor: 'bg-premium-gold/15 text-premium-gold',
    icon: 'workspace_premium',
    iconColor: 'text-premium-gold',
    shortDesc: 'Direct admission consultation for UGC & AICTE approved tier-1 and tier-2 private universities across NCR, Karnataka, Maharashtra, and North India.',
    eligibility: 'Minimum 50% - 60% in 12th / Graduation depending on desired stream and college.',
    admissionCycles: 'Ongoing for Academic Session 2024 - 2025',
    keyFeatures: [
      'Direct institutional quota counseling without hidden commissions',
      'Pre-admission scholarship evaluation and merit fee waivers',
      'Top colleges with high placement records in Tech, Law, and Management',
      'Complete campus visit coordination & parent-student counseling'
    ],
    subjectsOffered: ['B.Tech Computer Science / AI / Cyber Security', 'BBA & MBA (Dual Specialization)', 'BALLB & BBALLB (Bar Council Recognized)', 'B.Pharma & D.Pharma', 'B.Ed & M.Ed Teaching Credentials'],
    docsRequired: ['Academic Marksheets (10th, 12th, Graduation)', 'Entrance Exam Scorecards (if available)', 'Category Certificate (if applicable)', 'ID Proof'],
    feeRange: 'University approved direct fee structures with institutional scholarships'
  },
  {
    id: 'phd-assistance',
    category: 'degrees',
    title: 'Doctoral Research & PhD Guidance',
    tag: 'Elite Tier',
    tagColor: 'bg-purple-600/15 text-purple-600 dark:text-purple-400',
    icon: 'psychology',
    iconColor: 'text-purple-500',
    shortDesc: 'End-to-end guidance for aspiring doctoral scholars: university entrance prep, research proposal / synopsis formulation, and thesis structuring.',
    eligibility: 'Master’s degree with minimum 55% marks (50% for reserved categories).',
    admissionCycles: 'Pre-monsoon and Winter PhD entrance drives',
    keyFeatures: [
      'Identification of active UGC-recognized universities with open research seats',
      'Literature review synthesis and methodology framing',
      'Guidance for UGC-CARE, Scopus, and Peer-Reviewed paper drafting',
      'Defense and Viva-voce interview coaching'
    ],
    subjectsOffered: ['Management & Commerce', 'Computer Science & Engineering', 'Education & Humanities', 'Social Sciences & Law', 'Physical & Life Sciences'],
    docsRequired: ['Master’s Degree & Marksheets', 'Bachelor’s Degree', 'CV / Academic Profile', 'Research Interest Draft'],
    feeRange: 'Custom advisory retainer based on scope of research'
  }
];

export default function Programs() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'nios' | 'ignou' | 'degrees'>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<ProgramDetail | null>(null);
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  const filteredPrograms = selectedFilter === 'all' 
    ? programsData 
    : programsData.filter(p => p.category === selectedFilter);

  return (
    <main className="relative z-10 pt-28 md:pt-36 pb-24 px-4 md:px-12 max-w-[1280px] mx-auto">
      <SEO 
        title="NIOS 10th 12th, IGNOU Degrees & University Programs" 
        description="Explore accredited admission pathways: NIOS 10th/12th open schooling, IGNOU UG/PG distance degrees, B.Tech, MBA, and PhD research guidance at Divya Admission Hub." 
        keywords="NIOS 10th admission, NIOS 12th admission, IGNOU distance education programs, BCA distance, MCA distance, MBA IGNOU, B.Tech admission, PhD research guidance, Divya Admission Hub, TOC credit transfer" 
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Academic Programs at Divya Admission Hub",
          "description": "Comprehensive list of accredited school board and university degree admission programs.",
          "itemListElement": programsData.map((prog, index) => ({
            "@type": "EducationalOccupationalProgram",
            "position": index + 1,
            "name": prog.title,
            "description": prog.shortDesc,
            "programPrerequisites": prog.eligibility,
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Divya Admission Hub",
              "url": "https://divyaadmissionhub.com/"
            }
          }))
        }}
      />

      {/* Header Section */}
      <header className="mb-12 md:mb-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 print:hidden">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold font-label-mono text-xs uppercase tracking-widest">
              2024 — 2025 Admissions Active
            </span>
          </div>
          <h1 className="font-display-xl text-3xl sm:text-4xl md:text-5xl text-navy-deep dark:text-white mb-4 max-w-3xl">
            Strategic Pathways to <span className="text-emerald-accent">Academic Success</span>
          </h1>
          <p className="font-body-md text-base md:text-lg text-on-surface-variant dark:text-slate-300 max-w-2xl">
            Divya Admission Hub simplifies institutional procedures. From secondary schooling to advanced doctoral credentials, select your stream below.
          </p>
        </div>
        
        <div className="flex items-center gap-3 shrink-0 print:hidden">
          <button 
            onClick={() => setShowBrochureModal(true)}
            className="bg-navy-deep hover:bg-slate-800 text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-navy-deep/20 transition-all duration-200 hover:scale-105 active:scale-95 font-label-mono text-xs font-bold"
          >
            <span className="material-symbols-outlined text-base">picture_as_pdf</span>
            Course Brochure
          </button>
          <a
            href="https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub,%20please%20send%20me%20the%20complete%20admission%20handbook%20and%20fee%20details."
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-accent hover:bg-emerald-600 text-white py-3 px-5 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-emerald-accent/20 transition-all duration-200 hover:scale-105 active:scale-95 font-label-mono text-xs font-bold"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            Direct Help
          </a>
        </div>
      </header>

      {/* Filter Tabs */}
      <section className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-glass-border dark:border-slate-800 pb-4">
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'All Verticals' },
            { key: 'nios', label: 'NIOS Schooling (10th/12th)' },
            { key: 'ignou', label: 'IGNOU Degrees (UG/PG)' },
            { key: 'degrees', label: 'Prestige Degrees & PhD' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedFilter(tab.key as any)}
              className={`px-4 py-2 rounded-xl font-label-mono text-xs font-bold transition-all ${
                selectedFilter === tab.key
                  ? 'bg-emerald-accent text-white shadow-md shadow-emerald-accent/20'
                  : 'bg-white/60 dark:bg-slate-800/60 text-on-surface-variant dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <span className="text-on-surface-variant dark:text-slate-400 font-label-mono text-xs font-semibold">
          Showing {filteredPrograms.length} Academic Streams
        </span>
      </section>

      {/* Program Cards Grid */}
      <section className="space-y-6">
        {filteredPrograms.map((prog) => (
          <div 
            key={prog.id}
            className="glass-card rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center relative overflow-hidden shadow-sm hover:shadow-md transition-all dark:bg-slate-800/90 border border-glass-border dark:border-white/10"
          >
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center border border-black/5 dark:border-white/10 shadow-sm">
              <span className={`material-symbols-outlined text-4xl md:text-5xl ${prog.iconColor}`}>
                {prog.icon}
              </span>
            </div>

            {/* Main Info */}
            <div className="grow space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <h2 className="font-display-xl text-xl md:text-2xl text-navy-deep dark:text-white font-bold">
                  {prog.title}
                </h2>
                <span className={`px-3 py-0.5 rounded-full font-bold font-label-mono text-[11px] uppercase tracking-wider ${prog.tagColor}`}>
                  {prog.tag}
                </span>
              </div>

              <p className="text-on-surface-variant dark:text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
                {prog.shortDesc}
              </p>

              <div className="pt-2 flex flex-wrap gap-y-2 gap-x-5 text-xs text-on-surface-variant dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <strong className="text-navy-deep dark:text-slate-200">Eligibility:</strong> {prog.eligibility}
                </span>
                <span className="flex items-center gap-1">
                  <strong className="text-navy-deep dark:text-slate-200">Session:</strong> {prog.admissionCycles}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="shrink-0 flex flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <a 
                href={`https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub,%20I%20am%20interested%20in%20applying%20for%20*${encodeURIComponent(prog.title)}*.%20Please%20share%20the%20admission%20procedure%20and%20eligibility.`}
                target="_blank"
                rel="noreferrer"
                className="grow lg:grow-0 bg-emerald-accent hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md shadow-emerald-accent/20 text-center font-label-mono text-xs uppercase"
              >
                Apply Via WhatsApp
              </a>
              <button 
                onClick={() => setActiveModalProgram(prog)}
                className="grow lg:grow-0 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-navy-deep dark:text-white font-bold px-5 py-3 rounded-xl transition-colors text-center font-label-mono text-xs uppercase"
              >
                View Curriculum &amp; Docs
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Program Details Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-glass-border dark:border-white/10 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">
            <div className="flex justify-between items-start mb-6 pb-4 border-b border-glass-border dark:border-white/10">
              <div>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-label-mono uppercase ${activeModalProgram.tagColor}`}>
                  {activeModalProgram.tag}
                </span>
                <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white mt-1">
                  {activeModalProgram.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveModalProgram(null)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-300"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-6 text-sm text-on-surface-variant dark:text-slate-300">
              <div>
                <h4 className="font-bold text-navy-deep dark:text-white font-label-mono text-xs uppercase tracking-wider mb-2">
                  Key Highlights &amp; Benefits
                </h4>
                <ul className="space-y-2">
                  {activeModalProgram.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-emerald-accent text-base shrink-0 mt-0.5">check_circle</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-navy-deep dark:text-white font-label-mono text-xs uppercase tracking-wider mb-2">
                  Key Subjects / Disciplines Offered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProgram.subjectsOffered.map((subj, i) => (
                    <span key={i} className="bg-black/5 dark:bg-white/5 px-3 py-1 rounded-lg text-xs font-medium">
                      {subj}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-deep dark:text-white font-label-mono text-xs uppercase tracking-wider mb-2">
                  Mandatory Verification Documents
                </h4>
                <ul className="space-y-1.5">
                  {activeModalProgram.docsRequired.map((doc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-base">description</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="font-label-mono text-xs font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                  FEE STRUCTURE &amp; ASSISTANCE
                </span>
                <p className="text-xs text-emerald-800 dark:text-emerald-200">
                  {activeModalProgram.feeRange}. Direct board/university fees with complete transparency and receipt verification.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-glass-border dark:border-white/10 flex flex-col sm:flex-row gap-3 justify-end">
              <button 
                onClick={() => setActiveModalProgram(null)}
                className="px-5 py-2.5 rounded-xl border border-glass-border dark:border-white/10 text-xs font-label-mono font-bold"
              >
                Close
              </button>
              <a 
                href={`https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub,%20I%20have%20reviewed%20the%20curriculum%20for%20*${encodeURIComponent(activeModalProgram.title)}*%20and%20would%20like%20to%20enroll.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-accent hover:bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-xs font-label-mono font-bold flex items-center justify-center gap-2"
              >
                <span>Proceed with Admission</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Brochure / Prospectus Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-glass-border dark:border-white/10 rounded-3xl p-6 md:p-8 max-w-xl w-full shadow-2xl relative">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-emerald-accent text-3xl">auto_stories</span>
                <div>
                  <h3 className="font-display-xl text-2xl text-navy-deep dark:text-white">Academic Handbook</h3>
                  <p className="text-xs text-on-surface-variant dark:text-slate-400">Divya Admission Hub 2024-25</p>
                </div>
              </div>
              <button 
                onClick={() => setShowBrochureModal(false)}
                className="p-1 rounded-full text-slate-500 hover:text-navy-deep"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-4 text-sm text-on-surface-variant dark:text-slate-300">
              <p>
                The complete Admission Handbook includes detailed seat matrix, examination center lists, subject code combinations for NIOS, IGNOU semester roadmaps, and university placement charts.
              </p>
              <div className="space-y-2 p-4 rounded-2xl bg-black/5 dark:bg-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-accent text-base">check</span>
                  <span>NIOS Secondary &amp; Senior Secondary syllabus breakdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-accent text-base">check</span>
                  <span>IGNOU Assignment submission schedule 2024-25</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-accent text-base">check</span>
                  <span>Direct degree placement scholarship guidelines</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => {
                  window.print();
                }}
                className="grow py-3 rounded-xl bg-navy-deep text-white font-label-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
              >
                <span className="material-symbols-outlined text-base">print</span>
                Print / Save PDF
              </button>
              <a 
                href="https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub,%20please%20send%20me%20the%20official%20PDF%20brochure%20on%20WhatsApp."
                target="_blank"
                rel="noreferrer"
                className="grow py-3 rounded-xl bg-emerald-accent text-white font-label-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Receive on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section (Clean & Immediate Render) */}
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="glass-card rounded-2xl p-6 text-center border-b-4 border-b-emerald-accent shadow-sm dark:bg-slate-800/80">
          <div className="text-emerald-accent font-display-xl text-4xl mb-1 font-bold">15k+</div>
          <div className="text-on-surface-variant dark:text-slate-400 font-bold font-label-mono text-xs uppercase tracking-widest">
            Successful Admissions
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6 text-center border-b-4 border-b-tertiary shadow-sm dark:bg-slate-800/80">
          <div className="text-tertiary font-display-xl text-4xl mb-1 font-bold">99.4%</div>
          <div className="text-on-surface-variant dark:text-slate-400 font-bold font-label-mono text-xs uppercase tracking-widest">
            Clearance &amp; Pass Rate
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6 text-center border-b-4 border-b-premium-gold shadow-sm dark:bg-slate-800/80">
          <div className="text-premium-gold font-display-xl text-4xl mb-1 font-bold">12+ Yrs</div>
          <div className="text-on-surface-variant dark:text-slate-400 font-bold font-label-mono text-xs uppercase tracking-widest">
            Consultancy Experience
          </div>
        </div>
      </section>
    </main>
  );
}
