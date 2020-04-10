import React from 'react';

const getHomeworld = (number, resourceData) => {
  if (
    resourceData[2][number - 1].homeworld === null ||
    resourceData[2][number - 1].homeworld === 'unknown'
  )
    return { name: 'Homeworld unknown' };
  else {
    const homeworldIndex = resourceData[2][number - 1].homeworld - 1;
    return resourceData[1][homeworldIndex];
  }
};

const ResourceSpecies = ({ number, resourceData, resourceObject }) => {
  return (
    <div>
      <h1>{resourceObject.name}</h1>
      <h1>{resourceObject.classification}</h1>
      <h1>{resourceObject.average_height / 100}m average_height</h1>
      <h1>Skin colors {resourceObject.skin_color}</h1>
      <h1>Hair colors {resourceObject.hair_colors}</h1>
      <h1>Eye colors {resourceObject.eye_colors}</h1>
      <h1>Average lifespan {resourceObject.average_lifespan} years</h1>
      <h1>Language {resourceObject.language}</h1>
      {/* <h1>{getHomeworld(number, resourceData).name}</h1> */}
      <h4>{number}</h4>
    </div>
  );
};

export default ResourceSpecies;
