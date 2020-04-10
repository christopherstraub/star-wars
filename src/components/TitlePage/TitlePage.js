import React from 'react';

import './TitlePage.scss';

const TitlePage = () => {
  return (
    <div className="title-container vh-100 tc">
      <div className="title dib">
        Star Wars
        <br />
        Explorer
      </div>
      <div className="title-mobile dib">
        Star Wars
        <br />
        Explorer
      </div>
      <img src={require('../../images/c-3po.png')} alt="C-3PO" />
    </div>
  );
};

export default TitlePage;
