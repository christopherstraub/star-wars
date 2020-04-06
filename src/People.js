import React from 'react';

const getHomeWorld = (resourceData, num) => {
  const homeWorldUrl = resourceData[0].results[num - 1].homeworld;
  console.log(homeWorldUrl);
  const homeWorldNumber = homeWorldUrl.charAt(homeWorldUrl.length - 2);
  console.log(homeWorldNumber);
  return resourceData[1].results[homeWorldNumber - 2].name;
};

const People = ({ resourceData, num }) => {
  return (
    <div>
      <h1>{resourceData[0].results[num - 1].name}</h1>
      <h1>{resourceData[0].results[num - 1].height / 100}m tall</h1>
      <h1>{resourceData[0].results[num - 1].mass}kg</h1>
      <h1>Hair {resourceData[0].results[num - 1].hair_color}</h1>
      <h1>{resourceData[0].results[num - 1].skin_color} skin</h1>
      <h1>Born {resourceData[0].results[num - 1].birth_year}</h1>
      <h1>Gender {resourceData[0].results[num - 1].gender}</h1>
      {/* <h4>Homeworld {homeworld.name}</h4> */
      getHomeWorld(resourceData, num)}
      <h4>{num}</h4>
    </div>
  );
};

export default People;
