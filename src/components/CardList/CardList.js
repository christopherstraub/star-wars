import React from 'react';
import Card from '../Card/Card';

const CardList = ({ resourceTitle, resourceData, instancesIndex }) => {
  return (
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
