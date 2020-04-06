import React from 'react';

const getHomeWorldUrl = (visibleResourceData, visibleIndex) => {
  const homeWorldUrl = visibleResourceData[0][visibleIndex].homeworld;
  console.log(homeWorldUrl);
  return homeWorldUrl;
};

const fetchHomeWorldData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.name);
};

const People = ({ number, visibleIndex, visibleResourceData }) => {
  return (
    <div>
      <h1>{visibleResourceData[0][visibleIndex].name}</h1>
      <h1>{visibleResourceData[0][visibleIndex].height / 100}m tall</h1>
      <h1>{visibleResourceData[0][visibleIndex].mass}kg</h1>
      <h1>Hair {visibleResourceData[0][visibleIndex].hair_color}</h1>
      <h1>{visibleResourceData[0][visibleIndex].skin_color} skin</h1>
      <h1>Born {visibleResourceData[0][visibleIndex].birth_year}</h1>
      <h1>Gender {visibleResourceData[0][visibleIndex].gender}</h1>
      <h4>{number}</h4>
      {console.log(
        fetchHomeWorldData(
          getHomeWorldUrl(visibleResourceData, visibleIndex)
        ).then(console.log)
      )}
    </div>
  );
};

export default People;
