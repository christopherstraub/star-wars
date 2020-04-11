import React from 'react';

const Planets = ({ number, resourceObject }) => {
  return (
    <div className="resource relative">
      <h1 className="name heading-star-wars-font">{resourceObject.name}</h1>
      <div class="attributes flex">
        <div>
          <h1>Rotation period</h1>
          <h2 className="ttl">{resourceObject.rotation_period} hrs</h2>
          <h1>Orbital period</h1>
          <h2 className="ttl">{resourceObject.orbital_period} days</h2>
          <h1>Diameter</h1>
          <h2 className="ttl">{resourceObject.diameter} m</h2>
          <h1>climate</h1>
          <h2>{resourceObject.climate}</h2>
        </div>
        <div className="divider"></div>
        <div>
          <h1>Gravity</h1>
          <h2 className="ttl">{resourceObject.gravity}</h2>
          <h1>Terrain</h1>
          <h2>{resourceObject.terrain}</h2>
          <h1>Surface water</h1>
          <h2>{resourceObject.surface_water}%</h2>
          <h1>Population</h1>
          <h2>{resourceObject.population}</h2>
        </div>
      </div>

      <h3 className="number">{number}</h3>
    </div>
  );
};

export default Planets;
