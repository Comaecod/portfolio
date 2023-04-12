import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { strengths_and_weaknesses } from '../constants';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Strength_Weakness = ({ sw }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={sw.type}
      iconStyle={{ background: sw.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={sw.icon}
            alt={sw.subtitle}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }>
      <div>
        <h3 className='text-white text-[24px] font-bold'>{sw.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}>
          {sw.subtitle}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {sw.points.map((point, index) => (
          <li
            key={`s&w-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const StrengthsAndWeaknesses = () => {
  return (
    <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
      <p className={styles.sectionSubText + '  text-center'}>
        Strengths and Weaknesses
      </p>
      <h3 className={styles.sectionHeadText + '  text-center'}>
        💪🏻 The Yin & The Yang 😥
      </h3>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {strengths_and_weaknesses.map((sw, index) => (
            <Strength_Weakness
              key={`s_w-${index}`}
              sw={sw}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(StrengthsAndWeaknesses, 'strengthsAndWeaknesses');
