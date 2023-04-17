import React from 'react';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { portfolioSectionContent, testimonials } from '../constants';
import ShouldMotionDiv from './custom/ShouldMotionDiv';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <ShouldMotionDiv
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-3/5 w-full flex flex-col items-start justify-start'>
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1 w-full'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[17px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} at {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-14 h-14 rounded-full object-cover'
        />
      </div>
    </div>
  </ShouldMotionDiv>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <ShouldMotionDiv variants={textVariant()}>
          <p className={styles.sectionSubText}>
            {portfolioSectionContent.testimonials.subtitle}
          </p>
          <h2 className={styles.sectionHeadText}>
            {portfolioSectionContent.testimonials.title}
          </h2>
        </ShouldMotionDiv>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
