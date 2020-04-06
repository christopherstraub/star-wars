import React from 'react';
import Arrow from './Arrow';

const Heading = ({ resourceTitle }) => {
  return (
    <div>
      <Arrow direction="left" />
      <h1 className="yellow tc dib">{resourceTitle}</h1>
      <Arrow direction="right" />
    </div>
  );
};

export default Heading;
