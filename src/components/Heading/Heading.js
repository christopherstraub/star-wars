import React from 'react';

import './Heading.scss';

const Heading = ({ resourceTitle, resourceCount, handleSearchChange }) => {
  return (
    <div className="heading dib tc mb4 mt5 flex justify-center items-center">
      <div className="resource-info flex flex-column pa3 br4">
        <h1 className="resource-title tc dib ma0 mb2 heading-star-wars-font">
          {resourceTitle}
        </h1>
        <h2 className="resource-count tc dib ma0">{resourceCount}</h2>
      </div>
      <input
        className="search-input pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search by name"
        onChange={handleSearchChange}
        data-id={`${resourceTitle}-search`}
      ></input>
    </div>
  );
};

export default Heading;
