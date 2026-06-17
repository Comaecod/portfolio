export const navItems = [
  { href: '/about', text: 'About' },
  {
    text: 'Work',
    children: [
      { href: '/experience', text: 'Experience' },
      { href: '/projects', text: 'Projects' },
      { href: '/education', text: 'Education' },
      { href: '/testimonials', text: 'Testimonials' },
    ],
  },
  {
    text: 'Skills',
    children: [
      { href: '/skills', text: 'Technical' },
      { href: '/soft-skills', text: 'Soft Skills' },
    ],
  },
  {
    text: 'More',
    children: [
      { href: '/hobbies', text: 'Hobbies' },
      { href: '/contact', text: 'Contact' },
      { href: '/resume', text: 'Resume' },
    ],
  },
]

export const hero = {
  greeting: "Hi, I'm",
  name: 'Vishnu',
  tagline: 'I build web apps using React, Next.js and Angular.',
  description:
    'Forward Deployment Engineer — full-stack development, AI integration, and deployment engineering.',
}

export const about = {
  title: 'About Me 👨‍💻',
  content:
    'I am a Forward Deployment Engineer at heart — combining full-stack development with modern deployment strategies, AI integration, and infrastructure thinking. Since February 2026, I have been managing a 34-acre CBSE school campus as an Executive Assistant at Sri Kanchi Kamakoti Sankara Vidyalaya, Podili, while building a production-grade school management platform (skksv.vercel.app) that handles assessments, grading, staff directories, image galleries, real-time notifications, and an AI assistant. I believe AI is the future of software engineering, and I am seeking a role where I can bring full-stack expertise, deployment engineering, and AI-driven solutions together.',
  services: [
    { title: 'React', icon: '⚛️' },
    { title: 'Next.js', icon: '▲' },
    { title: 'Angular', icon: '🅰️' },
  ],
}

export const experiences = [
  {
    title: 'Executive Assistant & Full Stack Developer',
    company: 'Sri Kanchi Kamakoti Sankara Vidyalaya',
    period: 'Feb 2026 — Present',
    icon: '🏫',
    points: [
      'Manage a 34-acre CBSE school campus independently — handling administration, faculty coordination, event planning, and operations without a director on-site.',
      'Architected and built a production-grade school management platform handling online assessments, timed examinations, grading, staff directories, image galleries, real-time notifications, and an AI assistant.',
      'Integrated Groq LLM (Llama 3.3 70B) with a dual-mode chatbot for contextual school information and navigation guidance.',
      'Designed Firestore data models for examConfigs, quizResults, timedAssessments, notifications, feedback, images, and analytics — supporting multi-role, multi-class, multi-subject expansion.',
      'Implemented role-based access with Firebase + environment-keyed authentication.',
      'Built real-time notification system using Firestore onSnapshot with read/cleared state persistence.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Zenoti',
    period: 'Aug 2023 — Feb 2025',
    icon: '💆',
    points: [
      'Engineered DOM rendering optimizations and deferred JavaScript loading strategies that reduced page load times by 70%, achieving a consistent Google Lighthouse score of 95+ across the SaaS platform.',
      'Architected a reusable component library of 10+ enterprise-grade UI components in React and Angular, cutting new feature development time by 25% and ensuring design consistency across the product suite.',
      'Diagnosed and resolved 30+ critical production issues reported by enterprise clients, maintaining an 85% client satisfaction rate through root-cause analysis and permanent fixes.',
      'Led third-party library audits and upgrades across 50+ dependencies, reducing OSS security risks by 50% while preserving 100% backward compatibility.',
      'Mentored 4 junior developers and 6 interns through structured code reviews, pair programming sessions, and simplified explanations of React/Angular internals, accelerating their ramp-up to independent contribution.',
      'Collaborated with product and QA teams in an Agile environment to prioritize bug fixes and feature requests, ensuring on-time delivery across 2-week sprint cycles.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Meraai',
    period: 'Jan 2023 — Mar 2023',
    icon: '🤖',
    points: [
      'Delivered a 100% responsive Progressive Web Application from the ground up using Next.js and Material-UI, achieving offline-capability and near-native performance on mobile devices.',
      'Refactored REST API endpoints in Spring Boot with comprehensive unit test coverage using JUnit, reducing regression testing efforts by 75% and catching edge-case bugs pre-deployment.',
      'Implemented CI/CD pipelines using GitHub Actions for automated testing, linting, and deployment — reducing deployment errors by 10% and cutting release cycle time from days to hours.',
      'Integrated frontend state management with React Context and SWR for efficient data fetching, caching, and optimistic UI updates across the application.',
      'Participated in daily stand-ups and sprint retrospectives, collaborating closely with a cross-functional team of designers and backend engineers to ship features on schedule.',
    ],
  },
  {
    title: 'Developer & Code Expert',
    company: 'Tata Consultancy Services',
    period: 'Feb 2020 — Jan 2023',
    icon: '🏢',
    points: [
      'Led the migration of enterprise banking portals from legacy Struts/JSP to modern React.js architecture, applying MVC and container-presenter design patterns to reduce development time by 30%.',
      'Designed and built a shared component ecosystem of 15+ reusable UI elements (data tables, form controls, modals, charts) consumed by 5+ project teams, improving code maintainability by 40%.',
      'Optimized complex banking workflows with virtualized lists, lazy-loaded routes, and memoized selectors, boosting bank officials\' daily task efficiency by 30%.',
      'Partnered with business analysts and stakeholders to translate regulatory requirements into technical specifications, delivering compliant features across multiple release cycles.',
      'Enforced code quality standards through ESLint configuration, peer code reviews, and comprehensive documentation, reducing post-release defects by 20%.',
      'Conducted monthly knowledge-sharing sessions on JavaScript ES6+, React hooks, and performance best practices, upskilling 20+ team members across projects.',
    ],
  },
]

export const skills = {
  technical: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Three.js', level: 60 },
    { name: 'Firebase', level: 80 },
    { name: 'SQL Server', level: 70 },
    { name: 'Spring Boot', level: 65 },
    { name: 'Prisma', level: 70 },
    { name: 'Git', level: 85 },
    { name: 'CI/CD', level: 70 },
  ],
  soft: [
    { title: 'Devotion', content: 'I approach tasks with passion and dedication, consistently delivering exceptional results.' },
    { title: 'Soul Searching', content: 'I introspect and reflect on experiences, which helps me continuously learn and grow.' },
    { title: 'Confidentiality', content: 'I balance trustworthiness with openness to build strong relationships.' },
    { title: 'Affability', content: 'I am friendly and approachable, building positive relationships with others.' },
    { title: 'Communication', content: 'I convey ideas effectively to achieve shared goals.' },
    { title: 'Leadership', content: 'I inspire and guide teams towards achieving ambitious goals.' },
  ],
}

export const projects = [
  {
    name: 'SKKSV Scholar',
    description: 'Production-grade school management platform handling assessments, grading, staff directories, gallery, real-time notifications, and AI assistant for 400+ students.',
    tags: ['React', 'Firebase', 'Groq LLM', 'Cloudinary'],
    live: 'https://skksv.vercel.app',
    source: 'https://github.com/Comaecod/quiz-app',
  },
  /* {
    name: 'Twitch Clone',
    description: 'Live streaming platform clone built with Next.js, Clerk authentication, and Livekit for real-time video.',
    tags: ['Next.js', 'CockroachDB', 'Clerk', 'Livekit'],
    live: 'https://next-twitch-clone-delta.vercel.app/',
    source: 'https://github.com/Comaecod/next-twitch-clone',
  },
  {
    name: 'Netflix Clone',
    description: 'Netflix UI clone with Next.js, MongoDB, NextAuth, and Prisma ORM.',
    tags: ['Next.js', 'MongoDB', 'NextAuth', 'Prisma'],
    live: 'https://netflix-clone-comaecod.vercel.app/',
    source: 'https://github.com/Comaecod/netflix-clone',
  },
  {
    name: 'Quotes',
    description: 'SPA for adding quotes and comments, built with React and Firebase Realtime DB.',
    tags: ['React', 'Firebase'],
    live: 'https://react-http-6e37a.web.app/',
  },
  {
    name: 'Meetups',
    description: 'Next.js app for creating and listing upcoming meetups with MongoDB.',
    tags: ['Next.js', 'MongoDB', 'Vercel'],
    live: 'https://nextjs-meetups-gules.vercel.app/',
    source: 'https://github.com/Comaecod/nextjs-meetups',
  },
  {
    name: 'JogTracker',
    description: 'Backend REST API for jogging data with role-based access, Spring Boot, and MySQL.',
    tags: ['Spring Boot', 'Swagger', 'MySQL'],
    source: 'https://github.com/Comaecod/JogTracker-REST.git',
  }, */
]

export const education = [
  {
    degree: 'Master of Computer Applications',
    grade: '8.88 CGPA',
    institution: 'Sastra University',
    period: '2022 — 2024',
    description: 'Flexible program balancing academics and work, deepening computer knowledge and analytical skills.',
  },
  {
    degree: 'Bachelor of Vocation in Software Development',
    grade: '9.64 CGPA',
    institution: 'Jai Hind College',
    period: '2016 — 2019',
    description: 'Participated in tech and environment initiatives, organized events, achieved top scholarships all three years.',
  },
]

export const hobbies = [
  { name: 'Guitar', icon: '🎸' },
  { name: 'Piano', icon: '🎹' },
  { name: 'English Literature', icon: '📚' },
  { name: 'Gaming', icon: '🎮' },
  { name: 'Cosmology', icon: '🌌' },
  { name: 'Carnatic Classical', icon: '🎵' },
  { name: 'Sleuth Movies', icon: '🔍' },
  { name: 'Marvel Movies', icon: '🦸' },
  { name: 'Chess, Carrom & TT', icon: '♟️' },
]

export const social = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/comaecod/', icon: '💼' },
  { name: 'GitHub', url: 'https://github.com/Comaecod', icon: '🐙' },
  { name: 'Instagram', url: 'https://www.instagram.com/comaecod/', icon: '📸' },
  { name: 'WhatsApp', url: 'https://api.whatsapp.com/send/?phone=919967570182', icon: '💬' },
  { name: 'Medium', url: 'https://medium.com/@comaecod', icon: '✍️' },
]
