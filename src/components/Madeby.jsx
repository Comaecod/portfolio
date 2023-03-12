import React from 'react';
import { SectionWrapper } from '../hoc';

const Madeby = () => {
    return (
        <footer className='text-center text-secondary text-[12px]'>Made using React, Three.js, Tailwind and Framer.</footer>
    );
};

export default SectionWrapper(Madeby, "");
