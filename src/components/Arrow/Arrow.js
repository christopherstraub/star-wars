import React from 'react';
import './Arrow.scss';

const getResourceIndex = (resourceTitle) => {
  if (resourceTitle === 'people') return 0;
  if (resourceTitle === 'planets') return 1;
  if (resourceTitle === 'species') return 2;
};

const Arrow = ({
  resourceTitle,
  direction,
  handleCardChange,
  filteredResourceData,
}) => {
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
        data-resource-count={
          filteredResourceData[getResourceIndex(resourceTitle)].length
        }
      >
        →
      </div>
    );
  }
};

export default Arrow;
