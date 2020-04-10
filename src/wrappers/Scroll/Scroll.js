import React from 'react';

const Scroll = (props) => {
  return <div className="overflow-y-scroll vh-75">{props.children}</div>;
};

export default Scroll;
