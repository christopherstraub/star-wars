import React from 'react';
import Card from '../Card/Card';

const sumFlattenedArray = (array) => {
  return array.flat(Infinity).reduce((total, value) => total + value);
};

const CardList = ({ resourceTitle, resourceData, instancesIndex }) => {
  return sumFlattenedArray(instancesIndex) === 0 ? (
    <div>no results</div>
  ) : (
    <div className="flex justify-center items-center content-start flex-wrap w-100 h-75">
      {instancesIndex.map((instance) => {
        return (
          <Card
            key={instance}
            number={instance}
            resourceTitle={resourceTitle}
            resourceData={resourceData}
          />
        );
      })}
    </div>
  );
};

export default CardList;
