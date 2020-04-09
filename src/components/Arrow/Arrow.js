import React from 'react';
import './Arrow.scss';

const Arrow = ({ resourceTitle, direction, handleCardChange }) => {
  if (direction === 'left') {
    return (
      <div
        onClick={handleCardChange}
        className="arrow dib f2 black dib br3 pa3 ma2 ba mr4"
        data-id={`${resourceTitle}-${direction}`}
      >
        ←
      </div>
    );
  } else if (direction === 'right') {
    return (
      <div
        onClick={handleCardChange}
        className="arrow dib f2 black dib br3 pa3 ma2 ba ml4"
        data-id={`${resourceTitle}-${direction}`}
      >
        →
      </div>
    );
  }
};

export default Arrow;
