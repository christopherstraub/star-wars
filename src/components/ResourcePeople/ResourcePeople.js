import React from 'react';

import './ResourcePeople.scss';

const getHomeworld = (number, resourceData) => {
  const homeworldIndex = resourceData[0][number - 1].homeworld - 1;
  return resourceData[1][homeworldIndex];
};

const ResourcePeople = ({ number, resourceData, resourceObject }) => {
  return (
    <div>
      <h1 className="gotu-regular f2 yellow ma0">{resourceObject.name}</h1>
      <div class="attributes flex">
        <div className="col-1">
          <h1>Height</h1>
          <h2>{resourceObject.height / 100} m</h2>
          <h1>Mass</h1>
          <h2>{resourceObject.mass} kg</h2>
          <h1>Hair</h1>
          <h2>{resourceObject.hair_color}</h2>
        </div>
        <div className="divider"></div>
        <div className="col-2">
          <h1>Skin</h1>
          <h2>{resourceObject.skin_color}</h2>
          <h1>Birth Year</h1>
          <h2>{resourceObject.birth_year}</h2>
          <h2>{resourceObject.gender}</h2>
          <h2>{getHomeworld(number, resourceData).name}</h2>

          <h2>{number}</h2>
        </div>
      </div>
    </div>
  );
};

export default ResourcePeople;
