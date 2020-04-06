import React from 'react';
import Card from './Card';

const CardList = ({ visibleResourceData, instancesIndex, resourceTitle }) => {
  return (
    <div className="flex justify-center items-center content-start flex-wrap w-100 h-75">
      <Card
        key={instancesIndex[0]}
        num={0}
        position="side"
        visibleResourceData={visibleResourceData}
        resourceTitle={resourceTitle}
      />
      <Card
        key={instancesIndex[1]}
        num={1}
        position="center"
        visibleResourceData={visibleResourceData}
        resourceTitle={resourceTitle}
      />
      <Card
        key={instancesIndex[2]}
        num={2}
        position="side"
        visibleResourceData={visibleResourceData}
        resourceTitle={resourceTitle}
      />
    </div>
  );
};

export default CardList;
