import React from 'react';

// const getHomeWorld = (resourceData, num) => {
//   const homeWorldUrl = visibleResourceData[0][num].homeworld;
//   console.log(homeWorldUrl);
//   const homeWorldNumber = homeWorldUrl.charAt(homeWorldUrl.length - 2);
//   console.log(homeWorldNumber);
//   return resourceData[1].results[homeWorldNumber - 2].name;
// };

const People = ({ visibleResourceData, num }) => {
  return (
    <div>
      <h1>{visibleResourceData[0][num].name}</h1>
      <h1>{visibleResourceData[0][num].height / 100}m tall</h1>
      <h1>{visibleResourceData[0][num].mass}kg</h1>
      <h1>Hair {visibleResourceData[0][num].hair_color}</h1>
      <h1>{visibleResourceData[0][num].skin_color} skin</h1>
      <h1>Born {visibleResourceData[0][num].birth_year}</h1>
      <h1>Gender {visibleResourceData[0][num].gender}</h1>
      <h4>{num}</h4>
    </div>
  );
};

export default People;
