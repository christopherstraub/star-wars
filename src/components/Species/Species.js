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

const Species = ({ number, resourceData, resourceObject }) => {
  return (
    <div>
      <h2>{resourceObject.name}</h2>
      <h2>{resourceObject.classification}</h2>

      <h2>{resourceObject.average_height / 100}m average_height</h2>
      <h2>Skin colors {resourceObject.skin_color}</h2>
      <h2>Hair colors {resourceObject.hair_colors}</h2>
      <h2>Eye colors {resourceObject.eye_colors}</h2>
      <h2>Average lifespan {resourceObject.average_lifespan} years</h2>
      <h2>Language {resourceObject.language}</h2>
      <h2>{getHomeworld(number, resourceData).name}</h2>
      <h4>{number}</h4>
    </div>
  );
};

export default Species;
