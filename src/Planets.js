import React from 'react';

const Planets = ({ visibleResourceData, num }) => {
  return (
    <div>
      <h1>{visibleResourceData[1][num].name}</h1>
      <h1>Rotation period {visibleResourceData[1][num].rotation_period}hrs</h1>
      <h1>Orbital period {visibleResourceData[1][num].orbital_period} days</h1>
      <h1>Diameter {visibleResourceData[1][num].diameter}m</h1>
      <h1>{visibleResourceData[1][num].climate} climate</h1>
      <h1>Gravity: {visibleResourceData[1][num].gravity}</h1>
      <h1>Terrain: {visibleResourceData[1][num].terrain}</h1>
      <h1>Surface water: {visibleResourceData[1][num].surface_water}%</h1>
      <h1>Population: {visibleResourceData[1][num].population}</h1>
      <h4>{num}</h4>
    </div>
  );
};

export default Planets;
