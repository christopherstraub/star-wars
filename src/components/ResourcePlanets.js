import React from 'react';

const ResourcePlanets = ({ number, resourceData }) => {
  return (
    <div>
      <h1>{resourceData[1][number - 1].name}</h1>
      <h1>
        Rotation period {resourceData[1][number - 1].rotation_period}
        hrs
      </h1>
      <h1>Orbital period {resourceData[1][number - 1].orbital_period} days</h1>
      <h1>Diameter {resourceData[1][number - 1].diameter}m</h1>
      <h1>{resourceData[1][number - 1].climate} climate</h1>
      <h1>Gravity: {resourceData[1][number - 1].gravity}</h1>
      <h1>Terrain: {resourceData[1][number - 1].terrain}</h1>
      <h1>Surface water: {resourceData[1][number - 1].surface_water}%</h1>
      <h1>Population: {resourceData[1][number - 1].population}</h1>
      <h4>{number}</h4>
    </div>
  );
};

export default ResourcePlanets;
