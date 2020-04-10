import React from 'react';

const getHomeworld = (number, resourceData) => {
  const homeworldIndex = resourceData[0][number - 1].homeworld - 1;
  return resourceData[1][homeworldIndex];
};

const ResourcePeople = ({ number, resourceData, resourceObject }) => {
  return (
    <div>
      <h1>{resourceObject.name}</h1>
      <h1>{resourceObject.height / 100}m tall</h1>
      <h1>{resourceObject.mass}kg</h1>
      <h1>Hair {resourceObject.hair_color}</h1>
      <h1>{resourceObject.skin_color} skin</h1>
      <h1>Born {resourceObject.birth_year}</h1>
      <h1>Gender {resourceObject.gender}</h1>
      {/* <h1>{getHomeworld(number, resourceData).name}</h1> */}
      <h4>{number}</h4>
    </div>
  );
};

export default ResourcePeople;
