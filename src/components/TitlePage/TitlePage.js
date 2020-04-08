import React from 'react';
import MenuWrapper from '../wrappers/MenuWrapper';

const TitleScreen = (props) => {
  return (
    <MenuWrapper setPage={props.setPage}>
      <div className="vh-100 f-6 yellow tc flex justify-center items-center">
        Star Wars Interactive
      </div>
    </MenuWrapper>
  );
};

export default TitleScreen;
