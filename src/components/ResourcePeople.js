import React from 'react';

const ResourcePeople = ({ number, resourceData }) => {
  return (
    <div>
      <h1>{resourceData[0][number - 1].name}</h1>
      <h1>{resourceData[0][number - 1].height / 100}m tall</h1>
      <h1>{resourceData[0][number - 1].mass}kg</h1>
      <h1>Hair {resourceData[0][number - 1].hair_color}</h1>
      <h1>{resourceData[0][number - 1].skin_color} skin</h1>
      <h1>Born {resourceData[0][number - 1].birth_year}</h1>
      <h1>Gender {resourceData[0][number - 1].gender}</h1>
      <h4>{number}</h4>
      {/* <h4>homeworld {homeworld}</h4>
      <h4>{species}</h4> */}
    </div>
  );
};

export default ResourcePeople;
