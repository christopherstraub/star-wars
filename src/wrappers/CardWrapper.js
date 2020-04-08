import React from 'react';

const CenterCardWrapper = (props) => {
  return (
    <div className="overflow-hidden w-30 tc yellow dib br3 pa3 ma2 bw2 shadow-5 bw2 b--solid b--white">
      {props.children}
    </div>
  );
};

export default CenterCardWrapper;
