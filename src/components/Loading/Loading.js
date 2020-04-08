import React from 'react';
import BackgroundAnimation from '../../wrappers/BackgroundAnimation/BackgroundAnimation';

import './Loading.scss';

const Loading = () => {
  return (
    <BackgroundAnimation>
      <div className="vh-100 f-6 yellow tc blinking flex justify-center items-center">
        Loading...
      </div>
    </BackgroundAnimation>
  );
};

export default Loading;
