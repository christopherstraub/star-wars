import React from 'react';
import BackgroundAnimation from '../wrappers/BackgroundAnimation';
import MenuWrapper from '../wrappers/MenuWrapper';

const TitleScreen = () => {
  return (
    <MenuWrapper>
      <BackgroundAnimation>
        <div className="vh-100 f-6 yellow tc flex justify-center items-center">
          Star Wars Visual Explorer
        </div>
      </BackgroundAnimation>
    </MenuWrapper>
  );
};

export default TitleScreen;
