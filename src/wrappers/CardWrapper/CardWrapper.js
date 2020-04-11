import React from 'react';

import './CardWrapper.scss';

const CardWrapper = (props) => {
  return (
    <div className="card-wrapper dib br3 pa3 ma2 ttc">{props.children}</div>
  );
};

export default CardWrapper;
