import React from 'react';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { portfolioSectionContent, strong_points } from '../constants';
import ShouldMotionDiv from './custom/ShouldMotionDiv';

const SkillCard = ({ index, content, title }) => (
  <ShouldMotionDiv
    variants={fadeIn('', 'spring', index * 0.05, 0.75)}
    className='bg-black-200 border-2 border-indigo-200 border-x-indigo-500 p-10 rounded-3xl xs:w-[320px] w-full'>
    <div className='mt-1'>
      <p className='text-white font-extrabold xs:text-[25px] text-[18px] mb-3'>
        {title}
      </p>
      <p className='text-white tracking-wider xs:text-[18px] text-[15px]'>
        {content}
      </p>
    </div>
  </ShouldMotionDiv>
);

const SoftSkills = () => {
  return (
    <div className={`mt-12 bg-tertiary rounded-[20px]`}>
      <div
        className={`bg-black-100 rounded-2xl ${styles.padding} min-h-[300px]`}>
        <ShouldMotionDiv variants={textVariant()}>
          <p className={styles.sectionSubText + ' text-center'}>
            {portfolioSectionContent.softSkills.subtitle}
          </p>
          <h2 className={styles.sectionHeadText + ' text-center'}>
            {portfolioSectionContent.softSkills.title}
          </h2>
        </ShouldMotionDiv>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {strong_points.map((point, index) => (
          <SkillCard
            key={point.title}
            index={index}
            {...point}
          />
        ))}
      </div>
      <p className='sm:text-[20px] text-[18px] text-white sm:px-20 px-5 pb-10 text-center'>
        {portfolioSectionContent.softSkills.bottomContent}
      </p>
    </div>
  );
};

export default SectionWrapper(SoftSkills, 'softSkills');
