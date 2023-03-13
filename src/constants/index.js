import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meraai,
  tcs,
  jaihind,
  sastra,
  meetups,
  quotes,
  jogtracker,
  whatsapp_social,
  linkedin_social,
  github_social,
  instagram_social,
  medium_social,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'React Developer',
    icon: web,
  },
  {
    title: 'JavaScript Developer',
    icon: backend,
  },
  {
    title: 'Springboot Developer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Meraai',
    icon: meraai,
    iconBg: '#fff',
    date: 'January 2023 - February 2023',
    points: [
      'Worked on developing a PWA using React Vite, Framer, and MUI.',
      'Worked on Spring Boot and gained an understanding of the CI/CD pipeline.',
      'Improved development skills and gained modern software insights.',
    ],
  },
  {
    title: 'Developer & Code Expert',
    company_name: 'Tata Consultancy Services',
    icon: tcs,
    iconBg: '#fff',
    date: 'February 2020 - January 2023',
    points: [
      'Upgraded front-end from Struts and JSP to React.js.',
      'Conducted code reviews, collaborated with back-end team.',
      'Developed reusable components for improved code quality, efficiency.',
      'Resulted in faster rendering, better user experience.',
      'Upgrade led to 30% increase in user productivity, 50% reduction in page load time.',
    ],
  },
];

const education = [
  {
    title: 'Master of Computer Applications',
    institution_name: 'Sastra University',
    icon: sastra,
    iconBg: '#fff',
    date: 'Ongoing',
    description:
      'This program provides the flexibility to balance academics and work, deepen computer knowledge, refine analytical skills, and explore new interests. Eager to continue learning and expanding skill set.',
  },
  {
    title: 'Bachelor Of Vocation In Software Development',
    institution_name: 'Jai Hind College',
    icon: jaihind,
    iconBg: '#fff',
    date: 'July 2016 - March 2019',
    description:
      'In college, I participated in tech and environment initiatives, organizing events and honing my leadership skills. I also achieved academic excellence with top scholarships all three years. These experiences allowed for personal and professional growth.',
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Quotes',
    description:
      'This is an SPA that allows users to add quotes and also comment on every quote.',
    tags: [
      {
        name: 'reactjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'firebase',
        color: 'blue-text-gradient',
      },
      {
        name: 'realtimeDB',
        color: 'green-text-gradient',
      },
    ],
    image: quotes,
    live_app_link: 'https://react-http-6e37a.web.app/',
  },
  {
    name: 'Meetups',
    description:
      'This is an SPA that allows users to create and list all upcoming meetups.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'vercel',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: meetups,
    source_code_link: 'https://github.com/Comaecod/nextjs-meetups',
    live_app_link: 'https://nextjs-meetups-gules.vercel.app/',
  },
  {
    name: 'JogTracker',
    description:
      'A backend app for jogging data, with roles, storing data, and managing users.',
    tags: [
      {
        name: 'springboot',
        color: 'green-text-gradient',
      },
      {
        name: 'swagger',
        color: 'pink-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'blue-text-gradient',
      },
    ],
    image: jogtracker,
    source_code_link: 'https://github.com/Comaecod/JogTracker-REST.git',
  },
];

const social_media = [
  {
    link: 'https://www.linkedin.com/in/vishnu-parasuramuni-b19427190',
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
  services,
  technologies,
  experiences,
  education,
  testimonials,
  projects,
  social_media,
};