import React from 'react';

import './Heading.scss';

const Heading = ({ resourceTitle, resourceCount, handleSearchChange }) => {
  return (
    <div className="heading dib tc mb3 mt5 flex justify-center items-center">
      <div className="resource-info flex flex-column pa3">
        <h1 className="resource-title tc dib ma0 mb2 heading-star-wars-font f1">
          {resourceTitle}
        </h1>
        <h2 className="resource-count tc dib ma0">{resourceCount}</h2>
      </div>
      <input
        className="search-input pa2 f4"
        type="search"
        placeholder={`Find ${resourceTitle}`}
        onChange={handleSearchChange}
        data-id={`${resourceTitle}-search`}
      ></input>
    </div>
  );
};

export default Heading;
