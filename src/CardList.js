import React from 'react';
import Card from './Card';

const CardList = ({ visibleResourceData, instancesIndex, resourceTitle }) => {
  return (
    <div className="flex justify-center items-center content-start flex-wrap w-100 h-75">
      <Card
        key={instancesIndex[0]}
        number={instancesIndex[0]}
        visibleIndex={0}
        position="side"
        visibleResourceData={visibleResourceData}
        resourceTitle={resourceTitle}
      />
      <Card
        key={instancesIndex[1]}
        number={instancesIndex[1]}
        visibleIndex={1}
        position="center"
        visibleResourceData={visibleResourceData}
        resourceTitle={resourceTitle}
      />
      <Card
        key={instancesIndex[2]}
        number={instancesIndex[2]}
        visibleIndex={2}
        position="side"
        visibleResourceData={visibleResourceData}
        resourceTitle={resourceTitle}
      />
    </div>
  );
};

export default CardList;
