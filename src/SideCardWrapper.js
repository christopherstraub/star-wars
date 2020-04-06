import React from 'react';

const SideCard = (props) => {
  return (
    <div className="w-10 tc yellow dib br3 pa3 ma2 grow shadow-5 bw1 b--solid b--white></div>">
      {props.children}
    </div>
  );
};

export default SideCard;
