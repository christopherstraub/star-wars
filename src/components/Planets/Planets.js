import React from 'react';

const Planets = ({ index, resourceObject }) => {
  return (
    <div className="resource relative">
      <h1 className="name dib">{resourceObject.name}</h1>
      <div className="attributes flex">
        <div className="flex flex-column justify-around">
          <h2 className="attribute-name">rotation period</h2>
          <h3 className="attribute-value ttl mb3">{resourceObject.rotation_period} hrs</h3>
          <h2 className="attribute-name">orbital period</h2>
          <h3 className="attribute-value ttl mb3">{resourceObject.orbital_period} days</h3>
          <h2 className="attribute-name">diameter</h2>
          <h3 className="attribute-value ttl mb3">{resourceObject.diameter} m</h3>
          <h2 className="attribute-name">climate</h2>
          <h3 className="attribute-value">{resourceObject.climate}</h3>
        </div>
        <div className="divider"></div>
        <div className="flex flex-column justify-around">
          <h2 className="attribute-name">gravity</h2>
          <h3 className="attribute-value ttl mb3">{resourceObject.gravity}</h3>
          <h2 className="attribute-name">terrain</h2>
          <h3 className="attribute-value mb3">{resourceObject.terrain}</h3>
          <h2 className="attribute-name">surface water</h2>
          <h3 className="attribute-value mb3">{resourceObject.surface_water}%</h3>
          <h2 className="attribute-name">population</h2>
          <h3 className="attribute-value">{resourceObject.population}</h3>
        </div>
      </div>

      <h3 className="number">{index + 1}</h3>
    </div>
  );
};

export default Planets;
