import React from 'react';
import MenuWrapper from '../../wrappers/MenuWrapper/MenuWrapper';

import './TitlePage.scss';

const TitlePage = (props) => {
  return (
    <MenuWrapper setPage={props.setPage}>
      <div className="title-container vh-100">
        <div className="title mt6 tc">
          Star Wars
          <br />
          Explorer
        </div>
        <div className="title-mobile">
          Star Wars
          <br />
          Explorer
        </div>
        <img src={require('../../images/c-3po.png')} alt="C-3PO" />
      </div>
    </MenuWrapper>
  );
};

export default TitlePage;
