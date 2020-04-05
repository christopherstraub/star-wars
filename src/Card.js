import React from 'react';

const Card = (props) => {
  return (
    <div className="yellow dib br3 pa3 ma2 grow shadow-5 ba">
      <h1>{props.children}</h1>
    </div>
  );
};

export default Card;
