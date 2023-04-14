import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { imagesCarousel, portfolioSectionContent } from '../constants';
import { SectionWrapper } from '../hoc';
import ShouldMotionDiv from './custom/ShouldMotionDiv';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? imagesCarousel.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === imagesCarousel.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <ShouldMotionDiv variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {portfolioSectionContent.gallery.subtitle}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {portfolioSectionContent.gallery.title}
        </h2>
      </ShouldMotionDiv>
      <div className='max-w-[400px] h-[500px] w-full m-auto py-16 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${imagesCarousel[currentIndex]})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft
            onClick={prevSlide}
            size={30}
          />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight
            onClick={nextSlide}
            size={30}
          />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {imagesCarousel.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'>
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(ImageCarousel, 'imageCarousel');
