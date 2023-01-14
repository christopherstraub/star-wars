import React from 'react';

import './Footer.scss';

import LightSpeed from 'react-reveal/LightSpeed';

const Footer = () => {
  return (
    <div className="flex justify-between items-center pa3 pb1">
      <LightSpeed left>
        <a
          className="more-link footer-text-link"
          href="https://chrisstraub.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More by me
        </a>
      </LightSpeed>
      {getRandomImage(getRandomIconUrl, iconUrls)}
      <LightSpeed right>
        <a
          className="api-link footer-text-link"
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

const getRandomImage = (getRandomIconUrl, iconUrls) => {
  return (
    <img
      className="footer-icon"
      src={getRandomIconUrl(iconUrls)}
      alt="Random Star Wars character"
    />
  );
};

const getRandomIconUrl = (urls) => {
  const rand = Math.round(Math.random() * (urls.length - 1));
  switch (rand) {
    case 0:
      return require('../../images/footer/admiral-ackbar.svg');
    case 1:
      return require('../../images/footer/boba-fett.svg');
    case 2:
      return require('../../images/footer/c3p0.svg');
    case 3:
      return require('../../images/footer/chewbacca.svg');
    case 4:
      return require('../../images/footer/clone-trooper.svg');
    case 5:
      return require('../../images/footer/darth-maul.svg');
    case 6:
      return require('../../images/footer/darth-vader.svg');
    case 7:
      return require('../../images/footer/emperor-palpatine.svg');
    case 8:
      return require('../../images/footer/ewok.svg');
    case 9:
      return require('../../images/footer/greedo.svg');
    case 10:
      return require('../../images/footer/han-solo.svg');
    case 11:
      return require('../../images/footer/jabba-the-hutt.svg');
    case 12:
      return require('../../images/footer/jango-fett.svg');
    case 13:
      return require('../../images/footer/jawa.svg');
    case 14:
      return require('../../images/footer/lando-calrissian.svg');
    case 15:
      return require('../../images/footer/luke-skywalker.svg');
    case 16:
      return require('../../images/footer/obiwan-kenobi.svg');
    case 17:
      return require('../../images/footer/princess-leia.svg');
    case 18:
      return require('../../images/footer/qui-gon-jinn.svg');
    case 19:
      return require('../../images/footer/r2d2.svg');
    case 20:
      return require('../../images/footer/red-five.svg');
    case 21:
      return require('../../images/footer/stormtrooper.svg');
    case 22:
      return require('../../images/footer/tusken-raider.svg');
    case 23:
      return require('../../images/footer/yoda.svg');
    default:
      return require('../../images/footer/ewok.svg');
  }
};

const iconUrls = [
  '../../images/footer/admiral-ackbar.svg',
  '../../images/footer/boba-fett.svg',
  '../../images/footer/c3p0.svg',
  '../../images/footer/chewbacca.svg',
  '../../images/footer/clone-trooper.svg',
  '../../images/footer/darth-maul.svg',
  '../../images/footer/darth-vader.svg',
  '../../images/footer/emperor-palpatine.svg',
  '../../images/footer/ewok.svg',
  '../../images/footer/greedo.svg',
  '../../images/footer/han-solo.svg',
  '../../images/footer/jabba-the-hutt.svg',
  '../../images/footer/jango-fett.svg',
  '../../images/footer/jawa.svg',
  '../../images/footer/lando-calrissian.svg',
  '../../images/footer/luke-skywalker.svg',
  '../../images/footer/obiwan-kenobi.svg',
  '../../images/footer/princess-leia.svg',
  '../../images/footer/qui-gon-jinn.svg',
  '../../images/footer/r2d2.svg',
  '../../images/footer/red-five.svg',
  '../../images/footer/stormtrooper.svg',
  '../../images/footer/tusken-raider.svg',
  '../../images/footer/yoda.svg',
];

export default Footer;
