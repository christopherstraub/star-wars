import React from 'react';

import './TitlePage.scss';

const TitlePage = () => {
  return (
    <div className="title-container vh-100 tc title-star-wars-font-italic-outline yellow">
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
      <img src={require('../../images/darth-vader.png')} alt="Darth Vader" />
    </div>
  );
};

export default TitlePage;
