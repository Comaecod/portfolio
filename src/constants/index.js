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
  prisma,
  mongodb,
  git,
  java,
  jQuery,
  next,
  python,
  springboot,
  sql,
  dataStructures,
  aws,
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
  chess,
  carnaticClassical,
  sleuth,
  strengths,
  weaknesses,
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
  zenoti,
} from '../assets';

export const navLinks = [
  // {
  //   link: '#about',
  //   text: 'About',
  //   title: 'About',
  // },
  {
    link: '#work',
    text: 'Experience',
    title: 'Work',
  },
  // {
  //   link: '#education',
  //   text: 'Education',
  //   title: 'Education',
  // },
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
    title: 'Contact', //'☎',
  },
  {
    link: Resume,
    text: 'Download CV',
    title: 'CV', //'⬇',
  },
];

const portfolioSectionContent = {
  about: {
    title: 'Overview 👨‍💻',
    subtitle: 'Introduction',
    content:
      'My name is Vishnu, and I am a 24-year-old experienced Fullstack Developer with a strong focus on React and Next. I have a keen desire to learn modern technologies and am committed to delivering high-quality work. I enjoy collaborating with crossfunctional teams to achieve project goals and am passionate about frontend development. I am eager to explore opportunities in React, Next, and other modern front-end technologies. If you are looking for a collaborative and growth-oriented frontend developer, I would be happy to contribute my expertise to your team.',
  },
  experience: {
    title: 'Work Experience 💪',
    subtitle: 'What I have done so far',
  },
  hardSkills: {
    title: 'Technical Skills 💻',
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
    content: 'Made using React, Three.js, Tailwind and Framer.',
  },
};

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
    title: 'Fullstack Developer',
    icon: backend,
  },
];

const technologies = [
  {
    progress: 50,
    name: 'React.js',
    icon: reactjs,
  },
  {
    progress: 40,
    name: 'Next.js',
    icon: next,
  },
  {
    progress: 50,
    name: 'JavaScript',
    icon: javascript,
  },
  {
    progress: 35,
    name: 'TypeScript',
    icon: typescript,
  },
  {
    progress: 30,
    name: 'Redux',
    icon: redux,
  },
  {
    progress: 90,
    name: 'HTML',
    icon: html,
  },
  {
    progress: 60,
    name: 'Git',
    icon: git,
  },
  {
    progress: 30,
    name: 'Prisma',
    icon: prisma,
  },
  {
    progress: 40,
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    progress: 30,
    name: 'CSS',
    icon: css,
  },
  {
    progress: 30,
    name: 'Tailwind',
    icon: tailwind,
  },
  /* {
    progress: 30,
    name: 'Algorithms',
    icon: dataStructures,
  }, */
  {
    progress: 40,
    name: 'Java',
    icon: java,
  },
  {
    progress: 45,
    name: 'Springboot',
    icon: springboot,
  },
  {
    progress: 50,
    name: 'SQL',
    icon: sql,
  },
  {
    progress: 40,
    name: 'Python',
    icon: python,
  },
  {
    progress: 30,
    name: 'jQuery',
    icon: jQuery,
  },
  /* {
    progress: 20,
    name: 'Node.js',
    icon: nodejs,
  },
  {
    progress: 5,
    name: 'Docker',
    icon: docker,
  }, */
  {
    progress: 5,
    name: 'AWS',
    icon: aws,
  },
];

const hobbies = [
  {
    name: 'Cosmology',
    icon: cosmology,
  },
  {
    name: 'Carnatic Classical',
    icon: carnaticClassical,
  },
  {
    name: 'Guitar',
    icon: guitar,
  },
  {
    name: 'Chess',
    icon: chess,
  },
  {
    name: 'Sleuth Movies',
    icon: sleuth,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Zenoti',
    icon: zenoti,
    iconBg: '#fff',
    date: 'Currently Working',
    points: [
      'Actively involved in developing and maintaining our cloud-based SaaS platform, using a technology stack that includes .NET, Angular, and JavaScript/jQuery, to ensure efficient operations.',
      'Currently responsible for ongoing development and optimization of our cloud-based SaaS solution, enhancing performance and delivering valuable features for our clients.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Meraai',
    icon: meraai,
    iconBg: '#fff',
    date: 'January 2023 - March 2023',
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
    title: 'Bachelor Of Vocation In Software Development(9.64 CGPA)',
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

const projects = [
  {
    name: 'Twitch Clone',
    description: 'This is a clone built using Next.js, Clerk and Livekit.',
    tags: [
      {
        name: 'nextjs',
        color: 'green-text-gradient',
      },
      {
        name: 'cockroachdb',
        color: 'blue-text-gradient',
      },
      {
        name: 'clerk',
        color: 'green-text-gradient',
      },
      {
        name: 'livekit',
        color: 'blue-text-gradient',
      },
    ],
    image: twitch,
    live_app_link: 'https://next-twitch-clone-delta.vercel.app/',
    source_code_link: 'https://github.com/Comaecod/next-twitch-clone',
  },
  {
    name: 'Netflix Clone',
    description: 'This is a clone built using Next.js and NextAuth.',
    tags: [
      {
        name: 'nextjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextauth',
        color: 'pink-text-gradient',
      },
      {
        name: 'prisma',
        color: 'blue-text-gradient',
      },
    ],
    image: netflix,
    live_app_link: 'https://netflix-clone-comaecod.vercel.app/',
    source_code_link: 'https://github.com/Comaecod/netflix-clone',
  },
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
    title: 'TRANSPARENCY',
    content:
      'I am committed to being honest and open, which allows me to build trust and establish strong relationships with others.',
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

const imagesCarousel = [a, b, c, d, e, f, g, h];

const strengths_and_weaknesses = [
  {
    title: 'Assets',
    subtitle: 'Not to brag, but these are my superhero powers!',
    icon: strengths,
    iconBg: '#fff',
    type: 'Strengths',
    points: [
      'DEVOTION: A Pillar of Strength in Upholding Tradition',
      'TRANSPARENCY: Being to the point, clear expressions, transparent, unequivocal.',
      'SOUL SEARCHING: Embracing Flaws and Striving for Perfection',
    ],
  },
  {
    title: 'Limitations',
    subtitle: "My Kryptonite List: Things I'm Working On!",
    icon: weaknesses,
    iconBg: '#fff',
    type: 'Weaknesses',
    points: [
      'PEEVISH: I get peevish responding to people who are domineering or boorish.',
      'GULLIBLE: At times I could be naive and gullible.',
      "LENIENT: I consider myself 'too kind'. Many a time I am unable to say NO even when required.",
    ],
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
  strengths_and_weaknesses,
  strong_points,
  imagesCarousel,
};
