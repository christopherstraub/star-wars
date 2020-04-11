import React from 'react';

import './ResourcePeople.scss';

const getHomeworld = (number, resourceData) => {
  const homeworldIndex = resourceData[0][number - 1].homeworld - 1;
  return resourceData[1][homeworldIndex];
};

const getGenderImage = (gender) => {
  switch (gender) {
    case 'male':
      return (
        <img
          className="gender-icon male"
          src={require('../../images/people/male.svg')}
          width="30"
          alt="Male"
        />
      );
    case 'female':
      return (
        <img
          className="gender-icon female"
          src={require('../../images/people/female.svg')}
          width="30"
          alt="Female"
        />
      );
  }
};

const ResourcePeople = ({ number, resourceData, resourceObject }) => {
  return (
    <div className="resource relative">
      <h1 className="name heading-star-wars-font">
        {resourceObject.name}
        {resourceObject.gender === 'n/a'
          ? ''
          : getGenderImage(resourceObject.gender)}
      </h1>
      <div class="attributes flex">
        <div>
          <h1>Height</h1>
          <h2 className="unit">{resourceObject.height / 100} m</h2>
          <h1>Mass</h1>
          <h2 className="unit">{resourceObject.mass} kg</h2>
          <h1>Hair</h1>
          <h2>{resourceObject.hair_color}</h2>
        </div>
        <div className="divider"></div>
        <div>
          <h1>Skin</h1>
          <h2>{resourceObject.skin_color}</h2>
          <h1>Birth Year</h1>
          <h2>{resourceObject.birth_year}</h2>
          <h1>Homeworld</h1>
          <h2>{getHomeworld(number, resourceData).name}</h2>
        </div>

        <h3 className="number">{number}</h3>
      </div>
    </div>
  );
};

export default ResourcePeople;
