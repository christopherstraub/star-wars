import React from 'react';

const getGenderImage = (gender) => {
  switch (gender) {
    case 'male':
      return (
        <img
          className="gender-icon male"
          src={require('../../images/people/male.svg')}
          alt="Male"
        />
      );
    case 'female':
      return (
        <img
          className="gender-icon female"
          src={require('../../images/people/female.svg')}
          alt="Female"
        />
      );
    default:
  }
};

const People = ({ index, resourceData, resourceObject }) => {
  return (
    <div className="resource relative">
      <div className="pr4">
        <h1 className="name dib">{resourceObject.name}</h1>
        {resourceObject.gender === 'n/a'
          ? ''
          : getGenderImage(resourceObject.gender)}
      </div>
      <div className="attributes flex">
        <div className="flex flex-column justify-around">
          <h2 className="attribute-name">height</h2>
          <h3 className="attribute-value ttl mb3">{resourceObject.height / 100} m</h3>
          <h2 className="attribute-name">mass</h2>
          <h3 className="attribute-value ttn mb3">
            {resourceObject.mass === 'unknown'
              ? 'Unknown'
              : `${resourceObject.mass} kg`}
          </h3>
          <h2 className="attribute-name">skin</h2>
          <h3 className="attribute-value">{resourceObject.skin_color}</h3>
        </div>
        <div className="divider"></div>
        <div className="flex flex-column justify-around">
          <h2 className="attribute-name">eyes; hair</h2>
          <h3 className="attribute-value mb3">{`${resourceObject.eye_color}; ${resourceObject.hair_color}`}</h3>
          <h2 className="attribute-name">birth year</h2>
          <h3 className="attribute-value mb3">{resourceObject.birth_year}</h3>
          <h2 className="attribute-name">homeworld</h2>
          <h3 className="attribute-value">{resourceData[1][resourceObject.homeworld - 1].name}</h3>
        </div>

        <h3 className="number">{index + 1}</h3>
      </div>
    </div>
  );
};

export default People;
