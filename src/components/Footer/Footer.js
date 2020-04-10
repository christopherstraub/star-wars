import React from 'react';

import './Footer.scss';

import LightSpeed from 'react-reveal/LightSpeed';

const Footer = () => {
  return (
    <div className="flex justify-between">
      <LightSpeed left>
        <a
          className="more-link menu-text-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          More by me
        </a>
      </LightSpeed>

      <LightSpeed right>
        <a
          className="api-link menu-text-link"
          href="https://github.com/phalt/swapi"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
      </LightSpeed>
    </div>
  );
};

export default Footer;
