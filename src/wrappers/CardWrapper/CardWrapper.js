import React from 'react';

const CenterCardWrapper = (props) => {
  return (
    <div className="overflow-hidden tc white dib br3 pa3 ma2 bw1 shadow-5 bw2 b--solid b--white bg-blue">
      {props.children}
    </div>
  );
};

export default CenterCardWrapper;
