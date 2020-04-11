import React from 'react';
import BackgroundAnimation from '../../wrappers/BackgroundAnimation/BackgroundAnimation';

import './LoadingPage.scss';

const LoadingPage = () => {
  return (
    <BackgroundAnimation>
      <div className="loading heading-star-wars-font blinking flex justify-end items-end pa4">
        LoadingPage...
      </div>
    </BackgroundAnimation>
  );
};

export default LoadingPage;
