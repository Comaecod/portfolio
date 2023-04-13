import React from 'react';
import { motion } from 'framer-motion';
const ShouldMotionDiv = ({ className, variants, children }) => {
  let viewport = (
    <motion.div
      className={className}
      variants={variants}>
      {children}
    </motion.div>
  );

  if (/Mobile/i.test(navigator.userAgent)) {
    viewport = <div className={className}>{children}</div>;
  }

  return viewport;
};

export default ShouldMotionDiv;
