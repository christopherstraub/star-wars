import React from 'react';

const Species = ({ index, resourceData, resourceObject }) => {
  return (
    <div className="reosurce relative">
      <h1 className="name dib">{resourceObject.name}</h1>
      <div className="attributes flex">
        <div className="flex flex-column justify-around">
          <h2 className="attribute-name">classification</h2>
          <h3 className="attribute-value mb3">{resourceObject.classification}</h3>
          <h2 className="attribute-name">average height</h2>
          <h3 className="attribute-value ttn mb3">
            {resourceObject.average_height === 'n/a'
              ? 'N/A'
              : `${resourceObject.average_height / 100} m`}
          </h3>
          <h2 className="attribute-name">hair</h2>
          <h3 className="attribute-value mb3">{resourceObject.hair_colors}</h3>
          <h2 className="attribute-name">skin</h2>
          <h3 className="attribute-value">{resourceObject.skin_colors}</h3>
        </div>
        <div className="divider"></div>
        <div className="flex flex-column justify-around">
          <h2 className="attribute-name">eyes</h2>
          <h3 className="attribute-value mb3">{resourceObject.eye_colors}</h3>
          <h2 className="attribute-name">Average lifespan</h2>
          <h3 className="attribute-value ttn mb3">
            {resourceObject.average_lifespan === 'unknown'
              ? 'Unknown'
              : resourceObject.average_lifespan === 'indefinite'
              ? 'Indefinite'
              : `${resourceObject.average_lifespan} years`}
          </h3>
          <h2 className="attribute-name">Language</h2>
          <h3 className="attribute-value mb3">{resourceObject.language}</h3>
          <h2 className="attribute-name">Homeworld</h2>
          <h3 className="attribute-value">
            {typeof resourceObject.homeworld === 'number'
              ? resourceData[1][resourceObject.homeworld - 1].name
              : resourceObject.homeworld}
          </h3>
        </div>
      </div>
      <h3 className="number">{index + 1}</h3>
    </div>
  );
};

export default Species;
