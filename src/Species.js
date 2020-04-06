import React from 'react';

const Species = ({ visibleResourceData, num }) => {
  return (
    <div>
      <h1>{visibleResourceData[2][num].name}</h1>
      <h1>{visibleResourceData[2][num].classification}</h1>
      <h1>
        {visibleResourceData[2][num].average_height / 100}m average_height
      </h1>
      <h1>Skin colors {visibleResourceData[2][num].skin_color}</h1>
      <h1>Hair colors {visibleResourceData[2][num].hair_colors}</h1>
      <h1>Eye colors {visibleResourceData[2][num].eye_colors}</h1>
      <h1>
        Average lifespan {visibleResourceData[2][num].average_lifespan} years
      </h1>
      <h1>Language {visibleResourceData[2][num].language}</h1>
      <h4>{num}</h4>
    </div>
  );
};

export default Species;
