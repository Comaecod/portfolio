import React from 'react';
import { fadeIn, textVariant } from '../utils/motion';

import { hobbies } from '../constants';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import ShouldTilt from './custom/ShouldTilt';
import ShouldMotionDiv from './custom/ShouldMotionDiv';

const Hobby = ({ name, icon, index }) => {
  return (
    <ShouldTilt className='xs:w-60 w-full'>
      <ShouldMotionDiv
        variants={fadeIn('right', 'spring', index * 0.05, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[30px] min-h-[200px] py-5 px-5 flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt='web-development'
            className='w-60 h-60 rounded-md object-contain'
          />
          <h3 className='text-white text-[15px] font-bold text-center'>
            {name}
          </h3>
        </div>
      </ShouldMotionDiv>
    </ShouldTilt>
  );
};

const Hobbies = () => {
  return (
    <>
      <ShouldMotionDiv variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Personal Interests
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Hobbies 🚀</h2>
      </ShouldMotionDiv>
      <div className='mt-20 flex flex-wrap gap-12 justify-center'>
        {hobbies.map((hobby, index) => (
          <Hobby
            key={hobby.name}
            index={index}
            {...hobby}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hobbies, 'hobbies');
