import React from 'react';

import { styles } from '../styles';
import { link, github } from '../assets';
import { SectionWrapper } from '../hoc';
import { portfolioSectionContent, projects } from '../constants';
import { fadeIn, getRandomTailwindColors, textVariant } from '../utils/motion';
import ShouldMotionP from './custom/ShouldMotionP';
import ShouldMotionDiv from './custom/ShouldMotionDiv';
import ShouldTilt from './custom/ShouldTilt';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_app_link,
}) => {
  return (
    <ShouldMotionDiv variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <ShouldTilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-x-2'>
            {source_code_link && (
              <div
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                onClick={() => window.open(source_code_link, '_blank')}>
                <img
                  src={github}
                  alt='github'
                  className='w-4/5 h-4/5 object-contain'
                />
              </div>
            )}
            {live_app_link && (
              <div
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                onClick={() => window.open(live_app_link, '_blank')}>
                <img
                  src={link}
                  alt='link'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag}`}
              className={`text-[12px] rounded-[8px] px-[4px] py-[2px] ${getRandomTailwindColors()}`}>
              #{tag}
            </p>
          ))}
        </div>
      </ShouldTilt>
    </ShouldMotionDiv>
  );
};

const Works = () => {
  return (
    <>
      <ShouldMotionDiv variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {portfolioSectionContent.works.subtitle}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {portfolioSectionContent.works.title}
        </h2>
      </ShouldMotionDiv>

      <div className='w-full flex'>
        <ShouldMotionP
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px] text-center'>
          {portfolioSectionContent.works.content}
        </ShouldMotionP>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
