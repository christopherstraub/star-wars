import React from 'react';
import BackgroundAnimation from '../../wrappers/BackgroundAnimation/BackgroundAnimation';

import './Loading.scss';

const Loading = () => {
  return (
    <BackgroundAnimation>
      <div className="loading blinking flex justify-end-ns items-end-ns pa3-ns">
        Loading...
      </div>
    </BackgroundAnimation>
  );
};

export default Loading;
