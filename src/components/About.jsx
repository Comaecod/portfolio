import React from 'react';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import ShouldMotionDiv from './custom/ShouldMotionDiv';
import ShouldMotionP from './custom/ShouldMotionP';
import ShouldTilt from './custom/ShouldTilt';

const ServiceCard = ({ index, title, icon }) => (
  <ShouldTilt className='xs:w-[250px] w-full'>
    <ShouldMotionDiv
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </ShouldMotionDiv>
  </ShouldTilt>
);

const About = () => {
  return (
    <>
      <ShouldMotionDiv variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview 👨‍💻</h2>
      </ShouldMotionDiv>

      <ShouldMotionP
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] w-auto leading-[30px] text-center'>
        I am an experienced frontend developer with a strong focus on React, and
        a keen desire to learn modern technologies. I am committed to delivering
        high-quality work and collaborating with crossfunctional teams to
        achieve project goals. I am passionate about frontend development and
        keen to explore opportunities in React, Next, Remix, and other modern
        front-end technologies. If you are looking for a collaborative and
        growth-oriented frontend developer, I would be eager to contribute my
        expertise to your team.
      </ShouldMotionP>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
