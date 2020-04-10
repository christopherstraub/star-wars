import React from 'react';

const getHomeworld = (number, resourceData) => {
  const homeworldIndex = resourceData[0][number - 1].homeworld - 1;
  return resourceData[1][homeworldIndex];
};

const ResourcePeople = ({ number, resourceData, resourceObject }) => {
  return (
    <div>
      <h2>{resourceObject.name}</h2>
      <h2>{resourceObject.height / 100}m tall</h2>
      <h2>{resourceObject.mass}kg</h2>
      <h2>Hair {resourceObject.hair_color}</h2>
      <h2>{resourceObject.skin_color} skin</h2>
      <h2>Born {resourceObject.birth_year}</h2>
      <h2>Gender {resourceObject.gender}</h2>
      <h2>{getHomeworld(number, resourceData).name}</h2>
      <h2>{number}</h2>
    </div>
  );
};

export default ResourcePeople;
