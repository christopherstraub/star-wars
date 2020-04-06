import React from 'react';
import Card from './Card';

const CardList = ({ resourceData, visibleCards, resourceTitle }) => {
  return (
    <div className="flex justify-center items-center content-start flex-wrap w-100 h-75">
      <Card
        key={visibleCards[0]}
        resourceData={resourceData}
        num={visibleCards[0]}
        position="side"
        resourceTitle={resourceTitle}
      />
      <Card
        key={visibleCards[1]}
        resourceData={resourceData}
        num={visibleCards[1]}
        position="center"
        resourceTitle={resourceTitle}
      />
      <Card
        key={visibleCards[2]}
        resourceData={resourceData}
        num={visibleCards[2]}
        position="side"
        resourceTitle={resourceTitle}
      />
    </div>
  );
};

export default CardList;
