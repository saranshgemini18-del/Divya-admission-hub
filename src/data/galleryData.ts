export interface GalleryItem {
  id: string;
  filename: string;
  src: string;
  title: string;
  category: 'Awards' | 'Media' | 'Conferences' | 'Students';
  event: string;
  location: string;
  date: string;
  description: string;
  highlights: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'google-leader-series',
    filename: 'IMG-20260929-WA0026.jpg',
    src: '/images/IMG-20260929-WA0026.jpg',
    title: 'The Best Educator Award',
    category: 'Awards',
    event: 'Google for Education - Leader Series India 2025',
    location: 'New Delhi, India',
    date: '2025',
    description: 'Divya Dhariwal receiving the prestigious "The Best Educator Award" plaque at the Google for Education Leader Series India national conference.',
    highlights: ['Google for Education recognition', 'Best Educator Award Plaque', 'National Education Leadership']
  },
  {
    id: 'et-education-summit',
    filename: 'IMG-20260929-WA0020.jpg',
    src: '/images/IMG-20260929-WA0020.jpg',
    title: 'Keynote Speaker: ET Education Summit',
    category: 'Conferences',
    event: 'The Economic Times Annual Education Summit \'26',
    location: 'New Delhi',
    date: '2026',
    description: 'Delivering keynote lecture on "India\'s Education Revolution: For the World, with the World" co-presented by Accenture, Google Cloud, and IBM.',
    highlights: ['The Economic Times Stage', 'Accenture & Google Cloud Summit', 'Education Revolution Speaker']
  },
  {
    id: 'swami-vivekananda-award',
    filename: 'IMG-20260929-WA0019.jpg',
    src: '/images/IMG-20260929-WA0019.jpg',
    title: 'Swami Vivekananda Excellence Award',
    category: 'Awards',
    event: 'GNIOT & Delhi Police Educational Felicitation',
    location: 'Greater Noida / Delhi NCR',
    date: '2026',
    description: 'Presented with the framed Swami Vivekananda Academic Award by senior Delhi Police Officer and institutional leadership.',
    highlights: ['Conferred by Delhi Police ACP', 'Swami Vivekananda Honor', 'GNIOT Greater Noida']
  },
  {
    id: 'womens-day-press-meet',
    filename: 'IMG-20260929-WA0037.jpg',
    src: '/images/IMG-20260929-WA0037.jpg',
    title: 'International Women\'s Day Leadership Award',
    category: 'Awards',
    event: 'National Women\'s Day Press Conference',
    location: 'BVIMR / Delhi',
    date: 'March 8, 2026',
    description: 'Addressing national media press conference holding the International Women\'s Day award with microphones from Zee, DD News, News 24, ABP, and Bharat News.',
    highlights: ['Covered by 15+ News Channels', 'Women in Leadership Honor', 'Press Conference Address']
  },
  {
    id: 'zee-news-interview',
    filename: 'IMG-20260929-WA0036.jpg',
    src: '/images/IMG-20260929-WA0036.jpg',
    title: 'Zee News Television Special Interview',
    category: 'Media',
    event: 'Zee News Education Feature Broadcast',
    location: 'New Delhi',
    date: '2026',
    description: 'Special televised broadcast with Zee News discussing the crucial role of NIOS open schooling, credit transfer (TOC), and student career counseling.',
    highlights: ['Zee News Official Microphone', 'Televised Special on Open Schooling', 'Career Guidance Expert']
  },
  {
    id: 'zee-crc-briefing',
    filename: 'IMG-20260929-WA0035.jpg',
    src: '/images/IMG-20260929-WA0035.jpg',
    title: 'University Career & Placement Media Briefing',
    category: 'Media',
    event: 'Corporate Resource Center (CRC) Briefing',
    location: 'University Campus, Delhi',
    date: '2026',
    description: 'Briefing media correspondents on university placement stats, job readiness, and degree authentication at the central Corporate Resource Center.',
    highlights: ['CRC Placement Authority', 'Media Q&A with Zee News', 'Industry-Academia Bridge']
  },
  {
    id: 'constitution-club-address',
    filename: 'IMG-20260929-WA0038.jpg',
    src: '/images/IMG-20260929-WA0038.jpg',
    title: 'Speaker at Constitution Club of India',
    category: 'Conferences',
    event: 'National Forum on Education Policy & Reforms',
    location: 'Constitution Club of India, Rafi Marg, New Delhi',
    date: '2026',
    description: 'Delivering an address from the prestigious Constitution Club of India podium to academic strategists, counselors, and educators.',
    highlights: ['Constitution Club of India Podium', 'National Policy Discussions', 'New Delhi Dignitaries']
  },
  {
    id: 'shikshak-samman',
    filename: 'IMG-20260929-WA0039.jpg',
    src: '/images/IMG-20260929-WA0039.jpg',
    title: 'Shikshak Samman Samaroh Keynote',
    category: 'Awards',
    event: 'Shikshak Samman Samaroh (Teacher Honor Ceremony)',
    location: 'Delhi',
    date: '2026',
    description: 'Honored at the annual Teacher Felicitation Ceremony for outstanding dedication in guiding over 15,000 students to legitimate board certifications.',
    highlights: ['Teacher of the Year Honor', '15,000+ Students Mentored', 'Auditorium Felicitation']
  },
  {
    id: 'prantiya-sammelan-stage',
    filename: 'IMG-20260929-WA0030.jpg',
    src: '/images/IMG-20260929-WA0030.jpg',
    title: '48th Prantiya Sammelan Stage Honor',
    category: 'Awards',
    event: '48th Prantiya Sammelan Convention',
    location: 'Indira Gandhi Pratishthan, Gomti Nagar',
    date: 'June 26, 2026',
    description: 'Conferred stage honors by ministers and educational chancellors at Indira Gandhi Pratishthan during the 48th Annual State Convention.',
    highlights: ['Cabinet Ministers on Stage', 'Indira Gandhi Pratishthan', 'State Level Recognition']
  },
  {
    id: 'maharishi-uni-trophy',
    filename: 'IMG-20260929-WA0034.jpg',
    src: '/images/IMG-20260929-WA0034.jpg',
    title: 'Maharishi University Academic Merit Award',
    category: 'Awards',
    event: 'MUIT Academic Leadership Felicitation',
    location: 'Maharishi University of Information Technology',
    date: '2026',
    description: 'Receiving the Golden Emblem Trophy and Certificate of Academic Contribution from leadership at Maharishi University of Information Technology.',
    highlights: ['Golden Ashoka Emblem Trophy', 'Maharishi University (MUIT)', 'Academic Leadership Plaque']
  },
  {
    id: 'maharishi-stage-honor-1',
    filename: 'IMG-20260929-WA0022.jpg',
    src: '/images/IMG-20260929-WA0022.jpg',
    title: 'MUIT Chancellor & Faculty Felicitation',
    category: 'Awards',
    event: 'Higher Education Leadership Summit',
    location: 'MUIT Auditorium',
    date: '2026',
    description: 'Honored in royal blue attire on the grand stage of MUIT by the university vice-chancellor, registrar, and senior academic council.',
    highlights: ['Auditorium Grand Stage', 'Vice-Chancellor Felicitation', 'Special Recognition Award']
  },
  {
    id: 'maharishi-stage-honor-2',
    filename: 'IMG-20260929-WA0023.jpg',
    src: '/images/IMG-20260929-WA0023.jpg',
    title: 'National Educator Stage Citation',
    category: 'Awards',
    event: 'Education Vanguard Summit',
    location: 'MUIT Main Campus',
    date: '2026',
    description: 'A ceremony recognizing Divya Dhariwal\'s work in preventing student academic year dropouts through strategic counseling.',
    highlights: ['Stage Citation Ceremony', 'Drop-out Prevention Advocate', 'University Partnership']
  },
  {
    id: 'mmyrv-conference-podium',
    filename: 'IMG-20260929-WA0025.jpg',
    src: '/images/IMG-20260929-WA0025.jpg',
    title: 'MMYRV National Conference Address',
    category: 'Conferences',
    event: 'Mahesh Yogi Ramayan Vishwavidyalaya Conference',
    location: 'MMYRV Main Hall',
    date: '2026',
    description: 'Delivering the invited address at the flower-adorned podium during the Mahesh Yogi Ramayan Vishwavidyalaya National Conference.',
    highlights: ['MMYRV National Conference', 'Flower Adorned Dais', 'Values-Based Education']
  },
  {
    id: 'kiet-international-folk',
    filename: 'IMG-20260929-WA0017.jpg',
    src: '/images/IMG-20260929-WA0017.jpg',
    title: 'International Delegation at KIET (NAAC A+)',
    category: 'Conferences',
    event: 'India International Folk Festival / Rhythm of Poland',
    location: 'KIET Group of Institutions (NAAC A+ Grade)',
    date: '2026',
    description: 'Standing alongside European and Polish educational delegates and university faculty at KIET Group of Institutions during cultural-academic exchange.',
    highlights: ['NAAC A+ KIET Group', 'Polish Cultural Delegates', 'Global Academic Exchange']
  },
  {
    id: 'ims-dia-delegation',
    filename: 'IMG-20260929-WA0033.jpg',
    src: '/images/IMG-20260929-WA0033.jpg',
    title: 'IMS Design & Innovation Academy Felicitation',
    category: 'Students',
    event: 'IMS DIA Certificate Presentation Ceremony',
    location: 'IMS Campus, Sector 62, Noida',
    date: '2026',
    description: 'Surrounded by graduating students and faculty members holding certificate folios and university gift bags on the campus stairs.',
    highlights: ['IMS DIA Noida Campus', '20+ Graduating Students', 'Certificate Distribution']
  },
  {
    id: 'saksham-trust-award-1',
    filename: 'IMG-20260929-WA0031.jpg',
    src: '/images/IMG-20260929-WA0031.jpg',
    title: 'Saksham Educational Trust Convocation',
    category: 'Students',
    event: 'Saksham Educational and Charitable Trust Annual Day',
    location: 'Delhi',
    date: '2025',
    description: 'Presenting the Certificate of Achievement to an outstanding candidate in partnership with Saksham Educational and Charitable Trust.',
    highlights: ['Saksham Educational Trust', 'Student Convocation Medal', 'Scholarship Distribution']
  },
  {
    id: 'saksham-trust-award-2',
    filename: 'IMG-20260929-WA0029.jpg',
    src: '/images/IMG-20260929-WA0029.jpg',
    title: 'Women Scholars Felicitation',
    category: 'Students',
    event: 'Special Scholarship Award Ceremony',
    location: 'Delhi NCR',
    date: '2025',
    description: 'Jointly conferring academic passing certificates and honors to young female scholars embarking on college degrees.',
    highlights: ['Female Scholar Empowerment', 'Certificate of Completion', 'Trust Dignitaries']
  },
  {
    id: 'saksham-trust-award-3',
    filename: 'IMG-20260929-WA0027.jpg',
    src: '/images/IMG-20260929-WA0027.jpg',
    title: 'Youth Excellence Medal & Certificate',
    category: 'Students',
    event: 'Excellence in Board Examinations Felicitation',
    location: 'Delhi NCR',
    date: '2025',
    description: 'Awarding certificate of merit and medal to an accomplished board candidate who successfully cleared exams through strategic guidance.',
    highlights: ['Board Candidate Success', 'Medal of Excellence', 'Annual Felicitation']
  }
];
