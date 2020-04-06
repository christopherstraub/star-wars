import React from 'react';
import './Arrow.scss';

const Arrow = ({ direction }) => {
  if (direction === 'left') {
    return (
      <div className="dib hover f2 black bg-yellow dib br3 pa3 ma2 ba mr4">
        ←
      </div>
    );
  } else if (direction === 'right') {
    return (
      <div className="dib hover f2 black bg-yellow dib br3 pa3 ma2 ba ml4">
        →
      </div>
    );
  }
};

export default Arrow;
