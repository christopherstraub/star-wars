import React from 'react';

import './CardWrapper.scss';

const CardWrapper = (props) => {
  return (
    <div className="card-wrapper dib br3 bw2 pa3 ma2 ttn ba">
      {props.children}
    </div>
  );
};

export default CardWrapper;
