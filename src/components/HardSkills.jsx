import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

import { technologies } from '../constants';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const SkillCard = ({ name, icon, index }) => {
  return (
    <Tilt className='xs:w-[150px] w-full'>
      <motion.div
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
            className='w-28 h-28 rounded-md object-contain'
          />
          <h3 className='text-white text-[15px] font-bold text-center'>
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const HardSkills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technical Stuff
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Hard Skills 💻
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-12 justify-center'>
        {technologies.map((technology, index) => (
          <SkillCard
            key={technology.title}
            index={index}
            {...technology}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(HardSkills, 'hardSkills');
