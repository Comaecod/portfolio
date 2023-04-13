import React from 'react';
import Tilt from 'react-tilt';

const ShouldTilt = ({ className, children }) => {
  let viewport = <Tilt className={className}>{children}</Tilt>;

  if (/Mobile/i.test(navigator.userAgent)) {
    viewport = <div className={className}>{children}</div>;
  }

  return viewport;
};

export default ShouldTilt;
