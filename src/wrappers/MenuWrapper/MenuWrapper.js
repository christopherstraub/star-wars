import React from 'react';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import './MenuWrapper.scss';

const MenuWrapper = (props) => {
  return (
    <BackgroundAnimation>
      <span
        onClick={props.setPage}
        className="home-icon menu-icon material-icons animated fadeInLeftBig slower"
      >
        home
      </span>
      <span
        onClick={props.setPage}
        className="people-icon menu-icon material-icons animated fadeInDownBig slower"
      >
        account_circle
      </span>

      <span
        onClick={props.setPage}
        className="planets-icon menu-icon material-icons animated fadeInDownBig slower"
      >
        language
      </span>
      <span
        onClick={props.setPage}
        className="species-icon menu-icon material-icons animated fadeInRightBig slower"
      >
        supervisor_account
      </span>
      <span>
        <a
          className="api-icon menu-text-link animated fadeInUpBig slower"
          href="https://github.com/phalt/swapi"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
      </span>

      {props.children}
    </BackgroundAnimation>
  );
};

export default MenuWrapper;
