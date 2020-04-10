import React from 'react';

const ResourcePlanets = ({ number, resourceObject }) => {
  return (
    <div>
      <h1>{resourceObject.name}</h1>
      <h1>
        Rotation period {resourceObject.rotation_period}
        hrs
      </h1>
      <h1>Orbital period {resourceObject.orbital_period} days</h1>
      <h1>Diameter {resourceObject.diameter}m</h1>
      <h1>{resourceObject.climate} climate</h1>
      <h1>Gravity: {resourceObject.gravity}</h1>
      <h1>Terrain: {resourceObject.terrain}</h1>
      <h1>Surface water: {resourceObject.surface_water}%</h1>
      <h1>Population: {resourceObject.population}</h1>
      <h4>{number}</h4>
    </div>
  );
};

export default ResourcePlanets;
