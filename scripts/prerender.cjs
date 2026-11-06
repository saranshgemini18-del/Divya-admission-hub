const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(templatePath, 'utf8');

const pages = [
  {
    route: '/',
    dir: distDir,
    filename: 'index.html',
    title: 'Class 10th & 12th by Open Near Me | NIOS Dayalpur | Divya Admission Hub',
    description: 'Class 10th & 12th by open near me in Dayalpur Delhi. Get 100% recognized NIOS & IGNOU admission, TOC credit transfer, B.Ed & D.Pharma. Call 8178056407 today!',
    canonical: 'https://divya-admission-hub.vercel.app/',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    heading: 'Class 10th & 12th by Open Near Me in Dayalpur, Delhi',
    subheading: 'Divya Admission Hub • Authorized Academic Consultancy • 15,000+ Students Guided',
    content: `
      <header class="py-12 text-center max-w-4xl mx-auto px-4">
        <h1 class="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-4">
          Class 10th &amp; 12th by Open <span class="text-blue-600">Near Me</span>
        </h1>
        <p class="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-6">
          Divya Admission Hub • NIOS &amp; IGNOU Admissions in Dayalpur, Delhi 110094
        </p>
        <p class="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Authorized admission counseling for NIOS Class 10th &amp; 12th open schooling, Transfer of Credit (TOC) to save failed students' academic years, IGNOU distance degrees, and direct admissions for B.Ed, DIET, and D.Pharma.
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/918178056407" class="bg-blue-600 text-white font-bold px-6 py-3 rounded-full">
            WhatsApp: +91 81780 56407
          </a>
          <a href="tel:+918178056407" class="bg-slate-900 text-white font-bold px-6 py-3 rounded-full">
            Call Desk: +91 81780 56407
          </a>
        </div>
      </header>

      <section class="max-w-5xl mx-auto px-4 py-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Key Academic Programs &amp; Services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
            <h3 class="text-xl font-bold text-blue-600 mb-2">NIOS Class 10th &amp; 12th Open Schooling</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">
              Complete Secondary and Senior Secondary certificates recognized by Govt of India, AIU, NEET, JEE, and UPSC. Flexible On-Demand and Public exam cycles.
            </p>
          </div>
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
            <h3 class="text-xl font-bold text-blue-600 mb-2">Transfer of Credit (TOC) Guidance</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">
              Transfer up to 2 passed subjects from CBSE, ICSE, or State Boards. Save your academic year with minimal exams.
            </p>
          </div>
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
            <h3 class="text-xl font-bold text-blue-600 mb-2">IGNOU Degrees &amp; University Admissions</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">
              Admission support, solved assignment assistance, and exam guidance for IGNOU BA, B.Com, BCA, MBA, MCA, and direct admissions for B.Ed, DIET, D.Pharma.
            </p>
          </div>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 py-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Visit Our Dayalpur, Delhi Center
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-300 mb-2">
          <strong>Address:</strong> 2nd Floor, Prime Dental Clinic, Near Pani Ki Tanki (Water Tank), Dayalpur, Delhi - 110094
        </p>
        <p class="text-base text-slate-600 dark:text-slate-300 mb-2">
          <strong>Serving Areas:</strong> Dayalpur, Bhajanpura, Karawal Nagar, Yamuna Vihar, Khajuri Khas, Gokalpuri, Shahdara, Dilshad Garden, Seelampur, Nand Nagri, Shastri Park, and all Delhi NCR.
        </p>
        <p class="text-base text-slate-600 dark:text-slate-300">
          <strong>Director:</strong> Divya Dhariwal • 12+ Years Counseling Excellence • Phone: +91 81780 56407
        </p>
      </section>
    `
  },
  {
    route: '/programs',
    dir: path.join(distDir, 'programs'),
    filename: 'index.html',
    title: 'Academic Programs & Admissions: NIOS 10th/12th, IGNOU, B.Ed & Degrees | Divya Admission Hub',
    description: 'Explore verified programs: NIOS 10th and 12th open schooling, TOC credit transfer, IGNOU distance degrees (BCA, MCA, MBA), B.Ed, DIET, and D.Pharma admissions in Dayalpur Delhi.',
    canonical: 'https://divya-admission-hub.vercel.app/programs',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    heading: 'Academic Programs & Admission Pathways',
    subheading: 'NIOS Open Schooling, IGNOU Distance Degrees, Teaching & Pharmacy Admissions',
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Academic Programs & Admission Pathways",
      "description": "Comprehensive list of accredited school board and university degree admission programs at Divya Admission Hub.",
      "itemListElement": [
        {
          "@type": "EducationalOccupationalProgram",
          "position": 1,
          "name": "NIOS Secondary (Class 10th)",
          "description": "Flexible open schooling for 10th standard under Ministry of Education, Govt. of India.",
          "programPrerequisites": "Minimum 14 years of age. Basic reading/writing ability.",
          "provider": { "@type": "EducationalOrganization", "name": "Divya Admission Hub", "url": "https://divya-admission-hub.vercel.app/" }
        },
        {
          "@type": "EducationalOccupationalProgram",
          "position": 2,
          "name": "NIOS Senior Secondary (Class 12th)",
          "description": "12th standard certification recognized by all universities, IITs, AIIMS, NEET, NDA, and UPSC.",
          "programPrerequisites": "Must have passed Class 10th from any recognized board.",
          "provider": { "@type": "EducationalOrganization", "name": "Divya Admission Hub", "url": "https://divya-admission-hub.vercel.app/" }
        },
        {
          "@type": "EducationalOccupationalProgram",
          "position": 3,
          "name": "IGNOU Undergraduate & Postgraduate Degrees",
          "description": "Accredited university degrees (BA, B.Com, BCA, MA, M.Com, MBA, MCA) from central university.",
          "provider": { "@type": "EducationalOrganization", "name": "Divya Admission Hub", "url": "https://divya-admission-hub.vercel.app/" }
        },
        {
          "@type": "EducationalOccupationalProgram",
          "position": 4,
          "name": "Direct Professional Admissions: B.Ed, DIET, JBT, D.Pharma & B.Pharma",
          "description": "Direct seat allocation for Teaching (B.Ed, JBT) and Pharmacy (D.Pharma, B.Pharma) in NCTE and PCI approved institutions.",
          "provider": { "@type": "EducationalOrganization", "name": "Divya Admission Hub", "url": "https://divya-admission-hub.vercel.app/" }
        }
      ]
    },
    content: `
      <header class="py-12 text-center max-w-4xl mx-auto px-4">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Academic Programs &amp; <span class="text-blue-600">Admissions</span>
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Comprehensive admission consultation for NIOS Secondary (10th), Senior Secondary (12th), IGNOU university degrees, and professional courses.
        </p>
      </header>

      <section class="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <article class="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
          <h2 class="text-2xl font-bold text-blue-600 mb-3">1. NIOS Secondary (Class 10th) &amp; Senior Secondary (Class 12th)</h2>
          <p class="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            Govt. of India recognized board certification. Flexible subject selection without mandatory science/math requirements. 100% valid for NEET, JEE, CUET, NDA, state police, UPSC, and central government employment.
          </p>
          <ul class="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>Block 1 (April/May) and Block 2 (October/November) public examinations.</li>
            <li>On-Demand Examination (ODE) available year-round for fast results.</li>
            <li>Transfer of Credit (TOC) for failed students from CBSE, ICSE, and State Boards.</li>
            <li>Tutor Marked Assignment (TMA) and practical exam support.</li>
          </ul>
        </article>

        <article class="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
          <h2 class="text-2xl font-bold text-blue-600 mb-3">2. IGNOU Distance Degrees &amp; Professional Diplomas</h2>
          <p class="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            Central University degrees for undergraduate and postgraduate learners. Study while working with full assignment and exam center support.
          </p>
          <ul class="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>Undergraduate: BA, B.Com, BCA, BBA, B.Sc.</li>
            <li>Postgraduate: MA (English, History, Sociology, Hindi), M.Com, MCA, MBA.</li>
            <li>Assignment solutions, project synopsis, and re-registration assistance.</li>
          </ul>
        </article>

        <article class="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
          <h2 class="text-2xl font-bold text-blue-600 mb-3">3. Direct Professional Admissions: B.Ed, JBT, D.Pharma &amp; B.Tech</h2>
          <p class="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            Direct institutional counseling in NCTE, PCI, and UGC-approved universities across North India.
          </p>
          <ul class="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>B.Ed (Bachelor of Education) &amp; JBT / DIET Primary Teacher Training.</li>
            <li>D.Pharma (Diploma in Pharmacy) &amp; B.Pharma.</li>
            <li>Lateral entry engineering (B.Tech) and MBA management programs.</li>
          </ul>
        </article>

        <div class="text-center pt-6">
          <a href="https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub,%20I%20want%20to%20know%20more%20about%20your%20programs." class="bg-blue-600 text-white font-bold px-8 py-3.5 rounded-full inline-block">
            Inquire About Programs on WhatsApp
          </a>
        </div>
      </section>
    `
  },
  {
    route: '/about',
    dir: path.join(distDir, 'about'),
    filename: 'index.html',
    title: 'About Divya Dhariwal & Divya Admission Hub | 12+ Years Academic Leadership',
    description: 'Learn about Director Divya Dhariwal and Divya Admission Hub: 12+ years of educational counseling excellence, Google for Education awardee, and 15,000+ students guided.',
    canonical: 'https://divya-admission-hub.vercel.app/about',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    heading: 'About Divya Admission Hub & Director Divya Dhariwal',
    subheading: '12+ Years of Academic Guidance & Leadership in Dayalpur, Delhi',
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Divya Dhariwal & Divya Admission Hub",
      "description": "12+ years of educational counseling leadership, Google for Education Best Educator Award recipient, guiding over 15,000 students across Delhi NCR.",
      "mainEntity": {
        "@type": "Person",
        "name": "Divya Dhariwal",
        "jobTitle": "Director & Principal Academic Counselor",
        "worksFor": {
          "@type": "EducationalOrganization",
          "name": "Divya Admission Hub",
          "url": "https://divya-admission-hub.vercel.app/"
        },
        "award": [
          "The Best Educator Award - Google for Education Leader Series India 2025",
          "Swami Vivekananda Academic Excellence Award",
          "International Women's Day Leadership Award",
          "Maharishi University Academic Merit Trophy"
        ],
        "image": "https://divya-admission-hub.vercel.app/director-divya.jpg",
        "sameAs": [
          "https://instagram.com/director_divya",
          "https://wa.me/918178056407"
        ]
      }
    },
    content: `
      <header class="py-12 text-center max-w-4xl mx-auto px-4">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          About <span class="text-blue-600">Divya Admission Hub</span>
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Founded and directed by Divya Dhariwal, providing authoritative, transparent educational counseling across Delhi NCR and India.
        </p>
      </header>

      <section class="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div class="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Director’s Profile &amp; Mission</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            With over 12 years of hands-on educational counseling, <strong>Divya Dhariwal</strong> has mentored more than 15,000 students to successful completions of their Class 10th, Class 12th, undergraduate, and postgraduate credentials.
          </p>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            She has been honored on national platforms including the <strong>Google for Education Leader Series India 2025</strong> (The Best Educator Award), the <strong>Economic Times Education Summit</strong>, <strong>International Women’s Day Leadership Honors</strong>, and university convocations.
          </p>
          <div class="mt-4 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-sm text-blue-900 dark:text-blue-200">
            <strong>Core Philosophy:</strong> No student should ever lose an academic year due to procedural confusion or rigid board criteria. Flexible, legitimate, government-approved pathways exist for every learner.
          </div>
        </div>

        <div class="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Verified Physical Center</h2>
          <p class="text-slate-600 dark:text-slate-300 mb-2">
            <strong>Address:</strong> 2nd Floor, Prime Dental Clinic, Near Pani Ki Tanki, Dayal Pur, Delhi - 110094
          </p>
          <p class="text-slate-600 dark:text-slate-300 mb-2">
            <strong>Phone / WhatsApp:</strong> +91 81780 56407
          </p>
          <p class="text-slate-600 dark:text-slate-300 mb-2">
            <strong>Email:</strong> divyaadmissionhub@gmail.com
          </p>
          <p class="text-slate-600 dark:text-slate-300">
            <strong>Instagram:</strong> @director_divya
          </p>
        </div>
      </section>
    `
  },
  {
    route: '/support',
    dir: path.join(distDir, 'support'),
    filename: 'index.html',
    title: 'Student Support Desk & Admission Helpline | Divya Admission Hub Dayalpur',
    description: 'Contact Divya Admission Hub support desk in Dayalpur Delhi. Get immediate helpline assistance for NIOS admission forms, exam dates, fee structures, and TOC credit transfer.',
    canonical: 'https://divya-admission-hub.vercel.app/support',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    heading: 'Student Support Desk & Helpline',
    subheading: 'Direct Admission Guidance & Form Assistance in Dayalpur, Delhi',
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Student Support Desk & Helpline",
      "description": "Direct student counseling and admission helpline for NIOS open schooling, IGNOU degrees, and TOC transfer in Dayalpur, Delhi.",
      "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "Divya Admission Hub",
        "telephone": "+91-8178056407",
        "email": "divyaadmissionhub@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2nd Floor, Prime Dental Clinic, Near Pani Ki Tanki, Dayal Pur",
          "addressLocality": "Delhi",
          "postalCode": "110094",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8178056407",
          "contactType": "admissions counseling & student support",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"]
        }
      }
    },
    content: `
      <header class="py-12 text-center max-w-4xl mx-auto px-4">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Student Support &amp; <span class="text-blue-600">Helpline</span>
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Need help with NIOS admissions, IGNOU re-registration, TOC marksheet transfer, or fee structures? Our team is available 6 days a week.
        </p>
      </header>

      <section class="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
            <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Direct Phone Helpline</h2>
            <p class="text-2xl font-extrabold text-blue-600 mb-2">+91 81780 56407</p>
            <p class="text-sm text-slate-600 dark:text-slate-300">
              Monday to Saturday: 9:30 AM to 7:30 PM. Speak directly with senior counselors.
            </p>
          </div>

          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
            <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Instant WhatsApp Assistance</h2>
            <p class="text-2xl font-extrabold text-green-600 mb-2">+91 81780 56407</p>
            <p class="text-sm text-slate-600 dark:text-slate-300">
              Send your previous marksheets or query for instant document verification and eligibility check.
            </p>
          </div>
        </div>

        <div class="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Physical Counseling Office</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Visit us in person with your original educational documents for one-on-one counseling:
          </p>
          <p class="text-base font-semibold text-slate-800 dark:text-slate-200">
            Divya Admission Hub<br />
            2nd Floor, Prime Dental Clinic, Near Pani Ki Tanki (Water Tank),<br />
            Dayalpur, Delhi - 110094
          </p>
        </div>
      </section>
    `
  },
  {
    route: '/developed-by',
    dir: path.join(distDir, 'developed-by'),
    filename: 'index.html',
    title: 'Developed by Saransh (+91 8851285088) | Engineering Credits | Divya Admission Hub',
    description: 'Technical architecture and engineering credits for Divya Admission Hub, architected and built by Saransh (+91 8851285088).',
    canonical: 'https://divya-admission-hub.vercel.app/developed-by',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    heading: 'Engineering Credits',
    subheading: 'Technical Architecture',
    content: `
      <div class="py-12 text-center max-w-xl mx-auto px-4">
        <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Engineering Credits</h1>
        <p class="text-sm text-slate-500">Platform architecture credits for Divya Admission Hub.</p>
        <p class="mt-4"><a href="/" class="text-blue-600 underline">Return to Home</a></p>
      </div>
    `
  }
];

console.log('Generating static prerendered HTML pages for Google Search Console...');

for (const page of pages) {
  if (!fs.existsSync(page.dir)) {
    fs.mkdirSync(page.dir, { recursive: true });
  }

  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/is,
    `<meta name="description" content="${page.description}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/is,
    `<link rel="canonical" href="${page.canonical}" />`
  );

  // Replace Robots Meta Tag
  html = html.replace(
    /<meta\s+name=["']robots["']\s+content=["'].*?["']\s*\/?>/is,
    `<meta name="robots" content="${page.robots}" />`
  );

  // Replace OpenGraph Title & Description & URL
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/is,
    `<meta property="og:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/is,
    `<meta property="og:description" content="${page.description}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/is,
    `<meta property="og:url" content="${page.canonical}" />`
  );

  // Replace Twitter Title & Description
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/is,
    `<meta name="twitter:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/is,
    `<meta name="twitter:description" content="${page.description}" />`
  );

  // Inject page-specific JSON-LD Schema
  if (page.schema) {
    html = html.replace(
      '</head>',
      `    <!-- Route-Specific Structured Data (JSON-LD) -->\n    <script type="application/ld+json">\n    ${JSON.stringify(page.schema, null, 2)}\n    </script>\n  </head>`
    );
  }

  // Inject prerendered semantic HTML content inside <div id="root"></div>
  html = html.replace(
    '<!--APP_HTML-->',
    `\n${page.content}\n    `
  );

  const outputPath = path.join(page.dir, page.filename);
  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`✓ Generated ${page.route} -> ${outputPath}`);
}

console.log('All static pages prerendered successfully with Rich JSON-LD schemas!');

// Ensure sitemap.xml is synchronized to dist
const publicSitemap = path.resolve(__dirname, '..', 'public', 'sitemap.xml');
const distSitemap = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(publicSitemap)) {
  fs.copyFileSync(publicSitemap, distSitemap);
  console.log('✓ Synchronized sitemap.xml to dist/sitemap.xml');
}
// Synchronize WebP image assets in dist/ for maximum Core Web Vitals speed
try {
  const sharp = require('sharp');
  const distImgDir = path.join(distDir, 'images');
  if (fs.existsSync(distImgDir)) {
    const jpgs = fs.readdirSync(distImgDir).filter(f => f.endsWith('.jpg'));
    for (const j of jpgs) {
      const webpFile = path.join(distImgDir, j.replace(/\.jpg$/, '.webp'));
      if (!fs.existsSync(webpFile)) {
        sharp(path.join(distImgDir, j))
          .webp({ quality: 82, effort: 6 })
          .toFile(webpFile);
      }
    }
  }
  const distDirDivya = path.join(distDir, 'director-divya.jpg');
  if (fs.existsSync(distDirDivya) && !fs.existsSync(path.join(distDir, 'director-divya.webp'))) {
    sharp(distDirDivya).webp({ quality: 82, effort: 6 }).toFile(path.join(distDir, 'director-divya.webp'));
  }
} catch (e) {
  // Graceful fallback
}
