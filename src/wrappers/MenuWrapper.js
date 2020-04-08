import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';

import './MenuWrapper.scss';

const MenuWrapper = (props) => {
  return (
    <BackgroundAnimation>
      <span className="home-icon material-icons">home</span>
      <span onClick={props.setPage} className="people-icon material-icons">
        account_circle
      </span>

      <span onClick={props.setPage} className="planets-icon material-icons">
        language
      </span>
      <span onClick={props.setPage} className="species-icon material-icons">
        supervisor_account
      </span>

      {props.children}
    </BackgroundAnimation>
  );
};

export default MenuWrapper;
