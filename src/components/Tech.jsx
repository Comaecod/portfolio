import React from 'react';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex-wrap justify-center gap-10 sm:flex sm:flex-row hidden'>
      {technologies.slice(0, 6).map((technology) => (
        <div
          className='w-20 h-20'
          key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
