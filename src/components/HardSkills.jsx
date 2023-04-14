import React from 'react';
import { fadeIn, textVariant } from '../utils/motion';

import { portfolioSectionContent, technologies } from '../constants';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import ShouldTilt from './custom/ShouldTilt';
import ShouldMotionDiv from './custom/ShouldMotionDiv';

const SkillCard = ({ name, icon, progress, index }) => {
  return (
    <ShouldTilt className='w-[150px]'>
      <ShouldMotionDiv
        className='w-full p-[1px] rounded-[30px] shadow-card'
        variants={fadeIn('right', 'spring', index * 0.05, 0.75)}>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[30px] min-h-[200px] py-4 px-4 flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt='web-development'
            className='w-28 h-28 rounded-md object-contain'
          />
          <div className='flex justify-center items-center space-x-2 mt-5'>
            <h3 className='text-white text-[15px] font-bold text-center'>
              {name}
            </h3>
            {!/Mobile/i.test(navigator.userAgent) && (
              <h2 className='text-green-600 text-[11px] font-bold text-center'>
                {progress + '%'}
              </h2>
            )}
          </div>
          <div className='w-full h-4 bg-gray-300 rounded-full mt-4'>
            <div
              className={`h-full bg-violet-800 rounded-full transition-all duration-500`}
              style={{ width: progress + '%' }}></div>
          </div>
        </div>
      </ShouldMotionDiv>
    </ShouldTilt>
  );
};

const HardSkills = () => {
  return (
    <>
      <ShouldMotionDiv variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {portfolioSectionContent.hardSkills.subtitle}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {portfolioSectionContent.hardSkills.title}
        </h2>
      </ShouldMotionDiv>
      <div className='mt-20 flex flex-wrap xs:gap-12 gap-3 justify-center'>
        {technologies.map((technology, index) => (
          <SkillCard
            key={technology.name}
            index={index}
            {...technology}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(HardSkills, 'hardSkills');
