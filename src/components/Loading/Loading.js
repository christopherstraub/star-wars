import React from 'react';
import BackgroundAnimation from '../../wrappers/BackgroundAnimation/BackgroundAnimation';

import './Loading.scss';

const Loading = () => {
  return (
    <BackgroundAnimation>
      <div className="loading heading-star-wars-font blinking flex justify-end items-end pa4">
        Loading...
      </div>
    </BackgroundAnimation>
  );
};

export default Loading;
