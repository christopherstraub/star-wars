import React from 'react';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import './MenuWrapper.scss';

import { Link } from 'react-scroll';

const MenuWrapper = (props) => {
  return (
    <BackgroundAnimation>
      <Link
        className="home-icon menu-icon material-icons animated fadeInLeftBig slower"
        to="home"
        smooth={true}
        offset={0}
        duration={500}
      >
        home
      </Link>
      <Link
        className="people-icon menu-icon material-icons animated fadeInDownBig slower"
        to="people"
        smooth={true}
        offset={-50}
        duration={500}
      >
        account_circle
      </Link>

      <Link
        className="planets-icon menu-icon material-icons animated fadeInDownBig slower"
        to="planets"
        smooth={true}
        offset={-50}
        duration={500}
      >
        language
      </Link>
      <Link
        className="species-icon menu-icon material-icons animated fadeInRightBig slower"
        to="species"
        smooth={true}
        offset={-50}
        duration={500}
      >
        supervisor_account
      </Link>

      <ul className="left-nav heading-star-wars-font f6">
        <li className="home-link animated fadeInLeftBig slower">
          <Link
            className="left-nav-link"
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div className="flex items-center mb2 ml2">
              <div className="left-nav-indicator"></div>
              <span className="left-nav-text">Home</span>
            </div>
          </Link>
        </li>
        <li className="people-link animated fadeInLeftBig slower">
          <Link
            className="left-nav-link"
            to="people"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div className="flex items-center mb2 ml2">
              <div className="left-nav-indicator"></div>
              <span className="left-nav-text">people</span>
            </div>
          </Link>
        </li>
        <li className="planets-link animated fadeInLeftBig slower">
          <Link
            className="left-nav-link"
            to="planets"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div className="flex items-center mb2 ml2">
              <div className="left-nav-indicator"></div>
              <span className="left-nav-text">planets</span>
            </div>
          </Link>
        </li>
        <li className="species-link animated fadeInLeftBig slower">
          <Link
            className="left-nav-link"
            to="species"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div className="flex items-center mb2 ml2">
              <div className="left-nav-indicator"></div>
              <span className="left-nav-text">species</span>
            </div>
          </Link>
        </li>
      </ul>

      <a
        className="more-icon menu-text-link animated fadeInUpBig slower"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        More by me
      </a>

      <a
        className="api-icon menu-text-link animated fadeInUpBig slower"
        href="https://github.com/phalt/swapi"
        target="_blank"
        rel="noopener noreferrer"
      >
        API
      </a>

      {props.children}
    </BackgroundAnimation>
  );
};

export default MenuWrapper;
