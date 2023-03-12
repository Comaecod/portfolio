import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Madeby, Education } from "./components";

// For redeploying -> npm run deploy

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0'>
          <About />
          <Experience />
          {!/Mobile/i.test(navigator.userAgent) && <Tech />}
          <Works />
          <Education />
          {/* <Feedbacks /> */}
          <Contact />
          {!/Mobile/i.test(navigator.userAgent) && <StarsCanvas />}
          <Madeby />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

/* 
TODO

Testimonials -> Get them from your mates(Anmol, Dheeraj, Shivangi, Anuj).
Download CV button.
Hard Skills
Soft Skills
Social Media Links(Medium, Instagram, LinkedIn, Github)
Hobbies Section
Certifications Section
Gallery Section
Legacy Codebase projects -> GDrive (optional)
Check LinkedIn, Old Portfolio, CV for any other relevant sections.
*/

