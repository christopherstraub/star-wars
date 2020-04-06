import React from 'react';
import Card from './Card';

const CardList = ({ resourceData, visibleCards }) => {
  return (
    <div className="flex justify-between flex-wrap">
      {visibleCards.map((card, index) => {
        return (
          <Card key={index} resource={resourceData} num={visibleCards[index]} />
        );
      })}
    </div>
  );
};

export default CardList;
