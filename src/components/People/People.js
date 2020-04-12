import React from 'react';

const getHomeworld = (index, resourceData) => {
  const homeworldIndex = resourceData[0][index].homeworld - 1;
  return resourceData[1][homeworldIndex];
};

const getGenderImage = (gender) => {
  switch (gender) {
    case 'male':
      return (
        <img
          className="gender-icon male"
          src={require('../../images/people/male.svg')}
          width="30"
          alt="Male"
        />
      );
    case 'female':
      return (
        <img
          className="gender-icon female"
          src={require('../../images/people/female.svg')}
          width="30"
          alt="Female"
        />
      );
    default:
  }
};

const People = ({ index, resourceData, resourceObject }) => {
  return (
    <div className="resource relative">
      <h1 className="name">
        {resourceObject.name}
        {resourceObject.gender === 'n/a'
          ? ''
          : getGenderImage(resourceObject.gender)}
      </h1>
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
          <h1>Hair</h1>
          <h2>{resourceObject.hair_color}</h2>
        </div>
        <div className="divider"></div>
        <div>
          <h1>skin</h1>
          <h2>{resourceObject.skin_color}</h2>
          <h1>birth year</h1>
          <h2>{resourceObject.birth_year}</h2>
          <h1>homeworld</h1>
          <h2>{getHomeworld(index, resourceData).name}</h2>
        </div>

        <h3 className="number">{index + 1}</h3>
      </div>
    </div>
  );
};

export default People;
