import React from 'react';

const ResourceSpecies = ({ number, resourceData }) => {
  return (
    <div>
      <h1>{resourceData[2][number - 1].name}</h1>
      <h1>{resourceData[2][number - 1].classification}</h1>
      <h1>
        {resourceData[2][number - 1].average_height / 100}m average_height
      </h1>
      <h1>Skin colors {resourceData[2][number - 1].skin_color}</h1>
      <h1>Hair colors {resourceData[2][number - 1].hair_colors}</h1>
      <h1>Eye colors {resourceData[2][number - 1].eye_colors}</h1>
      <h1>
        Average lifespan {resourceData[2][number - 1].average_lifespan} years
      </h1>
      <h1>Language {resourceData[2][number - 1].language}</h1>
      <h4>{number}</h4>
    </div>
  );
};

export default ResourceSpecies;
