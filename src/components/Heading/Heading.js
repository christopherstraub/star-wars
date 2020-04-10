import React from 'react';
import Arrow from '../Arrow/Arrow';

import './Heading.scss';

// If user search finds no results, we want to display 0/total resources, not 0/0
const getCurrentCardOutOfTotal = (
  resourceTitle,
  filteredResourceData,
  resourceData,
  instancesIndex
) => {
  switch (resourceTitle) {
    case 'people':
      return filteredResourceData[0].length === 0
        ? `${instancesIndex[0]}/${resourceData[0].length}`
        : `${instancesIndex[0]}/${filteredResourceData[0].length}`;

    case 'planets':
      return filteredResourceData[1].length === 0
        ? `${instancesIndex[0]}/${resourceData[1].length}`
        : `${instancesIndex[0]}/${filteredResourceData[1].length}`;
    case 'species':
      return filteredResourceData[2].length === 0
        ? `${instancesIndex[0]}/${resourceData[2].length}`
        : `${instancesIndex[0]}/${filteredResourceData[2].length}`;
    default:
  }
};

const Heading = ({
  resourceTitle,
  resourceData,
  filteredResourceData,
  instancesIndex,
  handleCardChange,
  handleSearchChange,
}) => {
  return (
    <div className="heading tc mb4 mt5 flex justify-center items-center">
      <Arrow
        resourceTitle={resourceTitle}
        direction="left"
        handleCardChange={handleCardChange}
      />
      <div className="flex flex-column">
        <h1 className="resource-title tc dib ma0">{resourceTitle}</h1>
        <h2 className="card-count tc dib ma0">
          {getCurrentCardOutOfTotal(
            resourceTitle,
            filteredResourceData,
            resourceData,
            instancesIndex
          )}
        </h2>
      </div>

      <Arrow
        resourceTitle={resourceTitle}
        direction="right"
        handleCardChange={handleCardChange}
      />
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placholder="Search by name"
        onChange={handleSearchChange}
        data-id={`${resourceTitle}-search`}
      ></input>
    </div>
  );
};

export default Heading;
