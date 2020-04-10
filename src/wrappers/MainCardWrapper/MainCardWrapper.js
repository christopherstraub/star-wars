import React from 'react';

const MainCardWrapper = (props) => {
  return (
    <div className="tc white dib br3 pa3 ma2 bg-gray grow">
      {props.children}
    </div>
  );
};

export default MainCardWrapper;
