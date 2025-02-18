import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  css,
  reactjs,
  angular,
  ngrx,
  sqlserver,
  netmvc,
  redux,
  tailwind,
  prisma,
  jQuery,
  next,
  springboot,
  meraai,
  tcs,
  jaihind,
  sastra,
  meetups,
  quotes,
  jogtracker,
  netflix,
  twitch,
  whatsapp_social,
  linkedin_social,
  github_social,
  instagram_social,
  medium_social,
  Resume,
  cosmology,
  guitar,
  piano,
  literature,
  pcgaming,
  chess,
  carnaticClassical,
  sleuth,
  marvel,
  anmol,
  anuj,
  shivangi,
  dheeraj,
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  zenoti,
} from '../assets';

export const navLinks = [
  {
    link: '#work',
    text: 'Experience',
    title: 'Work',
  },
  {
    link: '#hardSkills',
    text: 'Skills',
    title: 'Skills',
  },
  {
    link: '#softSkills',
    text: 'Capabilities',
    title: 'Knacks',
  },
  {
    link: '#contact',
    text: 'Contact',
    title: 'Contact',
  },
  {
    link: Resume,
    text: 'Download CV',
    title: 'CV',
  },
];

const portfolioSectionContent = {
  about: {
    title: 'Overview 👨‍💻',
    subtitle: 'Introduction',
    content:
      'My name is Vishnu, and I am a 26-year-old experienced Fullstack Developer with a focus on React, Next & Angular. I have a keen desire to learn modern technologies and am committed to delivering high-quality work. I enjoy collaborating with crossfunctional teams to achieve project goals and am passionate about frontend development. I am eager to explore opportunities in modern front-end technologies. If you are looking for a collaborative and growth-oriented frontend developer, I would be happy to contribute my expertise to your team.',
  },
  experience: {
    title: 'Work Experience 💪',
    subtitle: 'What I have done so far',
  },
  hardSkills: {
    title: 'Technological Experience 💻',
    subtitle: "Technologies I've worked on so far",
  },
  softSkills: {
    title: 'My Capabilities 🦸‍♂️',
    subtitle: 'What Makes Me, Me',
    bottomContent:
      'I aim to embody the virtues of FORTITUDE and TEMPERANCE in any organization I join, as they are crucial for promoting positive relationships and facilitating growth and success.',
  },
  works: {
    title: 'Projects 🎦',
    subtitle: 'My work',
    content:
      'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to live demos and github repos.',
  },
  education: {
    title: 'Alma Mater 🏫',
    subtitle: 'Where I got my education',
  },
  testimonials: {
    title: 'Testimonials 🤝🏻',
    subtitle: 'What Others Say About My Work',
  },
  hobbies: {
    title: 'Hobbies 🚩',
    subtitle: 'Personal Interests',
  },
  gallery: {
    title: 'Gallery 📷',
    subtitle: "Hey, it's me",
  },
  contact: {
    title: 'Contact 🤙',
    subtitle: 'Get in touch',
    submitReplaceText:
      'Pass your name, email, and message as props so I can render your Send button. 😉',
  },
  footer: {
    content: 'This website is made using React, Three, Tailwind and Framer.',
  },
};

const services = [
  {
    title: 'React',
    icon: web,
  },
  {
    title: 'Next',
    icon: mobile,
  },
  {
    title: 'Angular',
    icon: backend,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Zenoti',
    icon: zenoti,
    iconBg: '#fff',
    date: 'August 2023 - February 2025',
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
    company_name: 'Meraai',
    icon: meraai,
    iconBg: '#fff',
    date: 'January 2023 - March 2023',
    points: [
      'Delivered a 100% responsive Progressive Web Application using Next.js and Material-UI.',
      'Improved APIs with unit tests, reducing testing efforts by 75% in Spring Boot.',
      'Learned CI/CD principles, reducing deployment errors by 10%.',
    ],
  },
  {
    title: 'Developer & Code Expert',
    company_name: 'Tata Consultancy Services',
    icon: tcs,
    iconBg: '#fff',
    date: 'February 2020 - January 2023',
    points: [
      'Migrated legacy front-end systems from Struts/JSP to React.js, reducing development time by 30% with effective use of design patterns.',
      'Developed reusable front-end components, improving code maintainability by 40%.',
      "Enhanced user productivity by 30%, optimizing bank officials' workflow efficiency.",
    ],
  },
];

const technologies = [
  {
    progress: 50,
    name: 'JavaScript',
    icon: javascript,
  },
  {
    progress: 30,
    name: 'jQuery',
    icon: jQuery,
  },
  {
    progress: 35,
    name: 'TypeScript',
    icon: typescript,
  },
  {
    progress: 40,
    name: 'Next.js',
    icon: next,
  },
  {
    progress: 50,
    name: 'React.js',
    icon: reactjs,
  },
  {
    progress: 50,
    name: 'Angular',
    icon: angular,
  },
  {
    progress: 30,
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    progress: 30,
    name: 'NGRX',
    icon: ngrx,
  },
  {
    progress: 30,
    name: 'Redux',
    icon: redux,
  },
  {
    progress: 30,
    name: 'CSS',
    icon: css,
  },
  {
    progress: 50,
    name: '.NET MVC',
    icon: netmvc,
  },
  {
    progress: 45,
    name: 'Springboot',
    icon: springboot,
  },
  {
    progress: 50,
    name: 'SQL Server',
    icon: sqlserver,
  },
  {
    progress: 30,
    name: 'Prisma',
    icon: prisma,
  },
];

const projects = [
  {
    name: 'Twitch Clone',
    description: 'This is a clone built using Next.js, Clerk and Livekit.',
    tags: ['nextjs', 'cockroachdb', 'clerk', 'livekit'],
    image: twitch,
    live_app_link: 'https://next-twitch-clone-delta.vercel.app/',
    source_code_link: 'https://github.com/Comaecod/next-twitch-clone',
  },
  {
    name: 'Netflix Clone',
    description: 'This is a clone built using Next.js and NextAuth.',
    tags: ['nextjs', 'mongoDB', 'nextauth', 'prisma'],
    image: netflix,
    live_app_link: 'https://netflix-clone-comaecod.vercel.app/',
    source_code_link: 'https://github.com/Comaecod/netflix-clone',
  },
  {
    name: 'Quotes',
    description:
      'This is an SPA that allows users to add quotes and also comment on every quote.',
    tags: ['reactjs', 'firebase', 'realtimeDB'],
    image: quotes,
    live_app_link: 'https://react-http-6e37a.web.app/',
  },
  {
    name: 'Meetups',
    description:
      'This is an SPA that allows users to create and list all upcoming meetups.',
    tags: ['nextjs', 'vercel', 'mongoDB'],
    image: meetups,
    source_code_link: 'https://github.com/Comaecod/nextjs-meetups',
    live_app_link: 'https://nextjs-meetups-gules.vercel.app/',
  },
  {
    name: 'JogTracker',
    description:
      'A backend app for jogging data, with roles, storing data, and managing users.',
    tags: ['springboot', 'swagger', 'MySQL'],
    image: jogtracker,
    source_code_link: 'https://github.com/Comaecod/JogTracker-REST.git',
  },
];

const testimonials = [
  {
    testimonial:
      "Vishnu is an exceptional Full Stack Developer with a thirst for learning and growth. His enthusiasm for trying out new things and integrating best practices into his code is truly remarkable. He is a valuable team player and his speedy grasp of new concepts and technologies make him an asset to any firm he's part of.",
    name: 'Anmol Vijaywargiya',
    designation: 'CTO',
    company: 'Meraai',
    image: anmol,
  },
  {
    testimonial:
      "It's been three years since I know Vishnu. He is outgoing, smart, funny and a person who knows what is important at the right moment. He is supportive and a non-judgemental person. He is hardworking and likes challenging tasks. He is funny and a team player, knows how to make connections and is trustworthy. He is helpful, social and likes to connect with people and know them. He doesn't mix his personal and private life and knows how to set boundaries. He is a really great friend and a good team member.",
    name: 'Shivangi Shrivastava',
    designation: 'System Engineer',
    company: 'TCS',
    image: shivangi,
  },
  {
    testimonial:
      'I had the pleasure of working with Vishnu on a software project and was thoroughly impressed by his skills and professionalism. He is an exceptional developer who consistently delivers high-quality work.',
    name: 'Anuj Singh',
    designation: 'Frontend Developer',
    company: 'Meraai',
    image: anuj,
  },
  {
    testimonial:
      'Vishnu is extremely inquisitive and quick to catch on to things which I think are a must have qualities in a good resource. He is forthcoming which makes him a good team player as well.',
    name: 'Dheeraj Mishra',
    designation: 'Software Engineer',
    company: 'Wissen Technology',
    image: dheeraj,
  },
];

const education = [
  {
    title: 'Master of Computer Applications(8.88 CGPA)',
    institution_name: 'Sastra University',
    icon: sastra,
    iconBg: '#fff',
    date: 'February 2022 - February 2024',
    description:
      'This program provided the flexibility to balance academics and work, deepened computer knowledge, refined analytical skills, and allowed the exploration of new interests, ready to apply my advanced knowledge and skills to new challenges and opportunities.',
  },
  {
    title: 'Bachelor Of Vocation In Software Development(9.64 CGPA)',
    institution_name: 'Jai Hind College',
    icon: jaihind,
    iconBg: '#fff',
    date: 'July 2016 - March 2019',
    description:
      'In college, I participated in tech and environment initiatives, organizing events and honing my leadership skills. I also achieved academic excellence with top scholarships all three years. These experiences allowed for personal and professional growth.',
  },
];

const strong_points = [
  {
    title: 'DEVOTION',
    content:
      'My top priority is God, Guru and my parents. I approach tasks with passion and dedication, consistently delivering exceptional results.',
  },
  {
    title: 'SOUL SEARCHING',
    content:
      'I am willing to introspect and reflect on my experiences, which helps me to continuously learn and grow as a person.',
  },
  {
    title: 'CONFIDENTIALITY',
    content:
      'I am committed to being trustworthy, balancing confidentiality and openness to build strong relationships with others.',
  },
  {
    title: 'AFFABILITY',
    content:
      'I am friendly and approachable, which allows me to build positive relationships with others.',
  },
  {
    title: 'COMMUNICATION',
    content:
      'I have the ability to convey ideas and information effectively, which allows me to achieve shared goals.',
  },
  {
    title: 'LEADERSHIP',
    content:
      'I inspire and motivate others with clear direction and guidance, leading teams towards achieving ambitious goals.',
  },
];

const hobbies = [
  {
    name: 'Guitar',
    icon: guitar,
  },
  {
    name: 'Casio',
    icon: piano,
  },
  {
    name: 'English Literature',
    icon: literature,
  },
  {
    name: 'Gaming',
    icon: pcgaming,
  },
  {
    name: 'Cosmology',
    icon: cosmology,
  },
  {
    name: 'Carnatic Classical',
    icon: carnaticClassical,
  },
  {
    name: 'Sleuth Movies',
    icon: sleuth,
  },
  {
    name: 'Marvel Movies',
    icon: marvel,
  },
  {
    name: 'Chess, Carrom, and TT',
    icon: chess,
  },
];

const imagesCarousel = [
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
];

const social_media = [
  {
    link: 'https://www.linkedin.com/in/comaecod/',
    image: linkedin_social,
    name: 'linkedin',
  },
  {
    link: 'https://github.com/Comaecod',
    image: github_social,
    name: 'github',
  },
  {
    link: 'https://www.instagram.com/comaecod/',
    image: instagram_social,
    name: 'instagram',
  },
  {
    link: 'https://api.whatsapp.com/send/?phone=919967570182&text&type=phone_number&app_absent=0',
    image: whatsapp_social,
    name: 'whatsapp',
  },
  {
    link: 'https://medium.com/@comaecod',
    image: medium_social,
    name: 'medium',
  },
];

export {
  portfolioSectionContent,
  services,
  technologies,
  experiences,
  education,
  testimonials,
  projects,
  hobbies,
  social_media,
  strong_points,
  imagesCarousel,
};
