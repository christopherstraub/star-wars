import React from 'react';

const Species = ({ index, resourceData, resourceObject }) => {
  return (
    <div className="reosurce relative">
      <h1 className="name species-name">{resourceObject.name}</h1>
      <div className="attributes flex">
        <div className="flex flex-column justify-around">
          <h1>classification</h1>
          <h2>{resourceObject.classification}</h2>
          <h1>average height</h1>
          <h2 className="ttn">
            {resourceObject.average_height === 'n/a'
              ? 'N/A'
              : `${resourceObject.average_height / 100} m`}
          </h2>
          <h1>hair</h1>
          <h2>{resourceObject.hair_colors}</h2>
          <h1>skin</h1>
          <h2>{resourceObject.skin_colors}</h2>
        </div>
        <div className="divider"></div>
        <div className="flex flex-column justify-around">
          <h1>eyes</h1>
          <h2>{resourceObject.eye_colors}</h2>
          <h1>Average lifespan</h1>
          <h2 className="ttn">
            {resourceObject.average_lifespan === 'unknown'
              ? 'Unknown'
              : resourceObject.average_lifespan === 'indefinite'
              ? 'Indefinite'
              : `${resourceObject.average_lifespan} years`}
          </h2>
          <h1>Language</h1>
          <h2>{resourceObject.language}</h2>
          <h1>Homeworld</h1>
          <h2>
            {typeof resourceObject.homeworld === 'number'
              ? resourceData[1][resourceObject.homeworld - 1].name
              : resourceObject.homeworld}
          </h2>
        </div>
      </div>
      <h3 className="number">{index + 1}</h3>
    </div>
  );
};

export default Species;
