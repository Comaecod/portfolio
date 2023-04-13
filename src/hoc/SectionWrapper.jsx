import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const StarWrapper = (Component, idName) =>
  function HOC() {
    let viewport = (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span
          className='hash-span'
          id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );

    if (/Mobile/i.test(navigator.userAgent)) {
      <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span
          className='hash-span'
          id={idName}>
          &nbsp;
        </span>

        <Component />
      </section>;
    }
    return viewport;
  };

export default StarWrapper;
