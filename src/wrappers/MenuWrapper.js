import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';

import './MenuWrapper.scss';

const MenuWrapper = (props) => {
  return (
    <BackgroundAnimation>
      <span className="home-icon material-icons">home</span>
      <span className="people-icon material-icons">account_circle</span>

      <span className="planets-icon material-icons">language</span>
      <span className="species-icon material-icons">supervisor_account</span>

      {props.children}
    </BackgroundAnimation>
  );
};

export default MenuWrapper;
