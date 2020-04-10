import React from 'react';

const Scroll = (props) => {
  return <div className="overflow-y-scroll vh-75-ns">{props.children}</div>;
};

export default Scroll;
