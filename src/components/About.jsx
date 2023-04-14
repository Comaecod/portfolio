import React from 'react';

import { styles } from '../styles';
import { portfolioSectionContent, services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import ShouldMotionDiv from './custom/ShouldMotionDiv';
import ShouldMotionP from './custom/ShouldMotionP';
import ShouldTilt from './custom/ShouldTilt';

const ServiceCard = ({ index, title, icon }) => (
  <ShouldTilt className='xs:w-[250px] w-64'>
    <ShouldMotionDiv
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] xs:py-5 py-3 xs:px-12 px-5 min-h-[280px] flex justify-evenly items-center flex-col'>
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
        <p className={`${styles.sectionSubText} text-center`}>
          {portfolioSectionContent.about.subtitle}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {portfolioSectionContent.about.title}
        </h2>
      </ShouldMotionDiv>

      <ShouldMotionP
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] w-auto leading-[30px] text-center'>
        {portfolioSectionContent.about.content}
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
