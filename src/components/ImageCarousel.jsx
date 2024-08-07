import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { imagesCarousel, portfolioSectionContent } from '../constants';
import { SectionWrapper } from '../hoc';
import ShouldMotionDiv from './custom/ShouldMotionDiv';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import Slider from 'react-slick';

function ImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    swipeToSlide: false,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    autoplaySpeed: 1000,
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
      <Slider
        {...settings}
        className='max-w-[500px] xs:w-full m-auto py-16 px-4 group'>
        {imagesCarousel.map((img) => (
          <img
            src={img}
            alt={img}
            key={img}
            className='rounded-full'
          />
        ))}
      </Slider>
    </>
  );
}

export default SectionWrapper(ImageCarousel, 'imageCarousel');
