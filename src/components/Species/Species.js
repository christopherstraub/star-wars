import React from 'react';

const getHomeworld = (number, resourceData) => {
  if (
    resourceData[2][number - 1].homeworld === null ||
    resourceData[2][number - 1].homeworld === 'unknown'
  )
    return { name: 'unknown' };
  else {
    const homeworldIndex = resourceData[2][number - 1].homeworld - 1;
    return resourceData[1][homeworldIndex];
  }
};

const Species = ({ number, resourceData, resourceObject }) => {
  return (
    <div className="reosurce relative">
      <h1 className="name">{resourceObject.name}</h1>
      <div className="attributes flex">
        <div>
          <h1>classification</h1>
          <h2>{resourceObject.classification}</h2>
          <h1>average height</h1>
          <h2 className="ttn">
            {resourceObject.average_height === 'n/a'
              ? 'N/A'
              : `${resourceObject.average_height / 100} m`}
          </h2>
          <h1>skin colors</h1>
          <h2>{resourceObject.skin_colors}</h2>
          <h1>hair colors</h1>
          <h2>{resourceObject.hair_colors}</h2>
        </div>
        <div className="divider"></div>
        <div>
          <h1>eye colors</h1>
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
          <h2>{getHomeworld(number, resourceData).name}</h2>
        </div>
      </div>
      <h3 className="number">{number}</h3>
    </div>
  );
};

export default Species;
