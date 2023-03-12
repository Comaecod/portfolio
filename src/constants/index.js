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
  meetups,
  quotes,
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
    title: 'Springboot Developer',
    icon: mobile,
  },
  {
    title: 'JavaScript Developer',
    icon: backend,
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
      'Worked on upgrading front-end screens from Struts and JSP to React.js.',
      'Conducted thorough code reviews, collaborated with the back-end team.',
      'Developed reusable components for improved code quality, fewer errors, and increased development efficiency.',
      'This resulted in improved performance, faster rendering, and better user experience.',
      "Upgrade led to a 30% increase in user productivity, 50% reduction in page load time which significantly improved the app's performance.",
    ],
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
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'realtimeDB',
        color: 'pink-text-gradient',
      },
    ],
    image: quotes,
    source_code_link: 'https://react-http-6e37a.web.app/',
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
    source_code_link: 'https://nextjs-meetups-gules.vercel.app/', //'https://github.com/Comaecod/nextjs-meetups',
  },
];

export { services, technologies, experiences, testimonials, projects };
