export const navCategories = [
  {
    label: 'About',
    children: [
      { href: '/about', text: 'About Me' },
      { href: '/experience', text: 'Experience' },
    ],
  },
  {
    label: 'Skills',
    children: [
      { href: '/skills', text: 'Technical' },
      { href: '/soft-skills', text: 'Soft Skills' },
    ],
  },
  {
    label: 'Work',
    children: [
      { href: '/projects', text: 'Projects' },
      { href: '/education', text: 'Education' },
      { href: '/testimonials', text: 'Testimonials' },
    ],
  },
  {
    label: 'More',
    children: [
      { href: '/hobbies', text: 'Hobbies' },
      { href: '/contact', text: 'Contact' },
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
      'Boosted page load times by 70%, achieving a Google Lighthouse score of 95+ through optimized DOM rendering and deferred JavaScript calls.',
      'Built a library of 5+ reusable JavaScript components, cutting development time by 25%.',
      'Resolved 30+ critical client-reported issues, ensuring an 85% client satisfaction rate.',
      'Reduced OSS risks by 50% while maintaining 100% compatibility by updating third-party libraries.',
      'Mentored junior developers and interns, fostering confidence and simplifying key concepts in JavaScript, React, Angular, and product knowledge.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Meraai',
    period: 'Jan 2023 — Mar 2023',
    icon: '🤖',
    points: [
      'Delivered a 100% responsive Progressive Web Application using Next.js and Material-UI.',
      'Improved APIs with unit tests, reducing testing efforts by 75% in Spring Boot.',
      'Learned CI/CD principles, reducing deployment errors by 10%.',
    ],
  },
  {
    title: 'Developer & Code Expert',
    company: 'Tata Consultancy Services',
    period: 'Feb 2020 — Jan 2023',
    icon: '🏢',
    points: [
      'Migrated legacy front-end systems from Struts/JSP to React.js, reducing development time by 30% with effective use of design patterns.',
      'Developed reusable front-end components, improving code maintainability by 40%.',
      "Enhanced user productivity by 30%, optimizing bank officials' workflow efficiency.",
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
  {
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
  },
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
