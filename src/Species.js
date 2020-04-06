import React from 'react';

const Species = ({ number, visibleIndex, visibleResourceData }) => {
  return (
    <div>
      <h1>{visibleResourceData[2][visibleIndex].name}</h1>
      <h1>{visibleResourceData[2][visibleIndex].classification}</h1>
      <h1>
        {visibleResourceData[2][visibleIndex].average_height / 100}m
        average_height
      </h1>
      <h1>Skin colors {visibleResourceData[2][visibleIndex].skin_color}</h1>
      <h1>Hair colors {visibleResourceData[2][visibleIndex].hair_colors}</h1>
      <h1>Eye colors {visibleResourceData[2][visibleIndex].eye_colors}</h1>
      <h1>
        Average lifespan {visibleResourceData[2][visibleIndex].average_lifespan}{' '}
        years
      </h1>
      <h1>Language {visibleResourceData[2][visibleIndex].language}</h1>
      <h4>{number}</h4>
    </div>
  );
};

export default Species;
