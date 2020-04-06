import React from 'react';

const Species = ({ resource, num }) => {
  return (
    <div>
      <h1>{resource.results[num - 1].name}</h1>
      <h1>{resource.results[num - 1].height / 100}m tall</h1>
      <h1>{resource.results[num - 1].mass}kg</h1>
      <h1>Hair {resource.results[num - 1].hair_color}</h1>
      <h1>{resource.results[num - 1].skin_color} skin</h1>
      <h1>Born {resource.results[num - 1].birth_year}</h1>
      <h1>Gender {resource.results[num - 1].gender}</h1>
      <h4>{num}</h4>
    </div>
  );
};

export default Species;
