import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  Education,
  HardSkills,
  Hobbies,
} from './components';

// For redeploying -> npm run deploy

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <HardSkills />
        {/* {!/Mobile/i.test(navigator.userAgent) && <Tech />} */}
        <Works />
        <Education />
        {/* <Feedbacks /> */}
        <Hobbies />
        <div className='relative z-0'>
          <Contact />
          {!/Mobile/i.test(navigator.userAgent) && <StarsCanvas />}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

/* 
TODO

Testimonials -> Get them from your mates(Anmol, Dheeraj, Shivangi, Anuj).
Soft Skills
Certifications Section
Gallery Section
Legacy Codebase projects -> GDrive (optional)
Check LinkedIn, Old Portfolio, CV for any other relevant sections.
*/
