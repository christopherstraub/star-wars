import React from 'react';

const Planets = ({ number, resourceObject }) => {
  return (
    <div className="resource relative">
      <h1 className="name heading-star-wars-font">{resourceObject.name}</h1>
      <h2>
        Rotation period {resourceObject.rotation_period}
        hrs
      </h2>
      <h2>Orbital period {resourceObject.orbital_period} days</h2>
      <h2>Diameter {resourceObject.diameter}m</h2>
      <h2>{resourceObject.climate} climate</h2>
      <h2>Gravity: {resourceObject.gravity}</h2>
      <h2>Terrain: {resourceObject.terrain}</h2>
      <h2>Surface water: {resourceObject.surface_water}%</h2>
      <h2>Population: {resourceObject.population}</h2>
      <h4>{number}</h4>
    </div>
  );
};

export default Planets;
