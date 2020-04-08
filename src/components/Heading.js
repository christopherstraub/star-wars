import React from 'react';
import Arrow from './Arrow';

const Heading = ({ resourceTitle, handleCardChange }) => {
  return (
    <div className="tc mb4 mt5">
      <Arrow direction="left" handleCardChange={handleCardChange} />
      <h1 className="yellow tc dib">{resourceTitle}</h1>
      <Arrow direction="right" handleCardChange={handleCardChange} />
    </div>
  );
};

export default Heading;
