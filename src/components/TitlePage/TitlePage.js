import React from 'react';
import MenuWrapper from '../../wrappers/MenuWrapper/MenuWrapper';

const TitlePage = (props) => {
  return (
    <MenuWrapper setPage={props.setPage}>
      <div className="title vh-100 yellow tc flex justify-center items-center">
        Star Wars
        <br />
        Interactive
      </div>
    </MenuWrapper>
  );
};

export default TitlePage;
