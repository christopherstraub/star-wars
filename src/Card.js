import React from 'react';

const Card = (props) => {
  return (
    <div className="ba yellow dib br3 pa3 ma2 grow bw1 shadow-5">
      This is card number <h1>TUVIEJ{props.num}</h1>
    </div>
  );
};

export default Card;
