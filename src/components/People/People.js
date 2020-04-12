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
      <div className="mb3">
        <h1 className="name di">{resourceObject.name}</h1>
        {resourceObject.gender === 'n/a'
          ? ''
          : getGenderImage(resourceObject.gender)}
      </div>

      <div className="attributes flex">
        <div>
          <h1>height</h1>
          <h2 className="ttl">{resourceObject.height / 100} m</h2>
          <h1>mass</h1>
          <h2 className="ttn">
            {resourceObject.mass === 'unknown'
              ? 'Unknown'
              : `${resourceObject.mass} kg`}
          </h2>
          <h1>skin</h1>
          <h2>{resourceObject.skin_color}</h2>
        </div>
        <div className="divider"></div>
        <div>
          <h1>eyes; hair</h1>
          <h2>{`${resourceObject.eye_color}; ${resourceObject.hair_color}`}</h2>
          <h1>birth year</h1>
          <h2>{resourceObject.birth_year}</h2>
          <h1>homeworld</h1>
          <h2>{resourceData[1][resourceObject.homeworld - 1].name}</h2>
        </div>

        <h3 className="number">{index + 1}</h3>
      </div>
    </div>
  );
};

export default People;
