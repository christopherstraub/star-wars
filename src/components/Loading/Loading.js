import React from 'react';
import BackgroundAnimation from '../../wrappers/BackgroundAnimation/BackgroundAnimation';

import './Loading.scss';

const Loading = () => {
  return (
    <BackgroundAnimation>
      <div className="loading vh-100 yellow tc blinking flex justify-center items-center">
        Loading...
      </div>
    </BackgroundAnimation>
  );
};

export default Loading;
