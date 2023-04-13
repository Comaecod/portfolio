import React from 'react';
import { SectionWrapper } from '../hoc';
import { portfolioSectionContent, social_media } from '../constants';

const Footer = () => {
  return (
    <footer>
      <div className='absolute inset-0 flex justify-center gap-3 card-img_hover'>
        {social_media.map((social) => (
          <div
            key={social.name}
            className='w-10 h-10 flex justify-center items-center cursor-pointer'
            onClick={() => window.open(social.link, '_blank')}>
            <img
              src={social.image}
              alt={social.name}
              title={social.name}
              className='w-4/5 h-4/5 object-contain'
            />
          </div>
        ))}
      </div>
      <p className='text-center text-secondary text-[12px]'>
        {portfolioSectionContent.footer.content}
      </p>
    </footer>
  );
};

export default SectionWrapper(Footer, '');
