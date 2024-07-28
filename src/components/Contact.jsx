import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import ShouldMotionDiv from './custom/ShouldMotionDiv';
import { portfolioSectionContent } from '../constants';
import { groot } from '../assets';

const NAME_REGEX = /^[a-zA-Z ]+$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [formVisibility, setFormVisibility] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          to_name: 'Vishnu',
          from_email: form.email.trim(),
          to_email: 'vishnuthecoder@gmail.com',
          message: form.message.trim(),
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setFormVisibility(false);
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Ahh, something went wrong. Please try again.');
        }
      );

    setIsDisabled(true);
  };

  let submit = <p>{portfolioSectionContent.contact.submitReplaceText}</p>;

  if (
    NAME_REGEX.test(form.name) &&
    EMAIL_REGEX.test(form.email) &&
    form.message.trim().length > 10
  ) {
    submit = (
      <button
        disabled={isDisabled}
        type='submit'
        className='bg-tertiary disabled:hidden py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
        {loading ? 'Sending...' : 'Send'}
      </button>
    );
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      {formVisibility && (
        <ShouldMotionDiv
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>
            {portfolioSectionContent.contact.subtitle}
          </p>
          <h3 className={styles.sectionHeadText}>
            {portfolioSectionContent.contact.title}
          </h3>

          <form
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="The name's Bond."
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={
                  /Mobile/i.test(navigator.userAgent)
                    ? 'The @ thingy'
                    : "I won't share your email with any aliens."
                }
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="Let's connect and build awesome-ness!"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
              />
            </label>
            {submit}
          </form>
        </ShouldMotionDiv>
      )}

      {!formVisibility && (
        <div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-1 bg-black-100 p-8 rounded-2xl flex flex-col items-center'>
          <h3
            className={
              'sm:text-[25px] text-[14px] text-secondary tracking-wider mb-4'
            }>
            Got it! I'll loop back with you shortly. Let's touch base soon. 👩🏻‍🚀🚀
          </h3>
          <img
            src={groot}
            alt='groot saying bye'
          />
        </div>
      )}
      <ShouldMotionDiv
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] sm:block hidden'>
        <EarthCanvas />
      </ShouldMotionDiv>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
