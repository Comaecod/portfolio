import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { education, portfolioSectionContent } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import ShouldMotionDiv from './custom/ShouldMotionDiv';

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={education.icon}
            alt={education.institution_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }>
      <div>
        <h3 className='text-white text-[24px] font-bold'>{education.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}>
          {education.institution_name}
        </p>
      </div>

      <div className='mt-5 list-disc space-y-2 text-gray-300 text-[14px] pl-1 tracking-wider'>
        {education.description}
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <ShouldMotionDiv variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {portfolioSectionContent.education.subtitle}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {portfolioSectionContent.education.title}
        </h2>
      </ShouldMotionDiv>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, 'education');
