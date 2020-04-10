import React from 'react';

import './CardWrapper.scss';

const CardWrapper = (props) => {
  return (
    <div className="card-wrapper tc dib br3 pa3 ma2 bg-gray">
      {props.children}
    </div>
  );
};

export default CardWrapper;
