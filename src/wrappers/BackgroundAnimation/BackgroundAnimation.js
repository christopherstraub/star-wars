import React from 'react';
import './star-animation.css';

const BackgroundAnimation = (props) => {
  return (
    <div className="relative">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
      {props.children}
    </div>
  );
};

export default BackgroundAnimation;
