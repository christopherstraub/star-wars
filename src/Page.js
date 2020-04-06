import React from 'react';
import Heading from './Heading';
import CardList from './CardList';

const Page = ({ resourceTitle, resourceData, visibleCards }) => {
  return (
    <div className="vh-100 ba red">
      <Heading resourceTitle={resourceTitle} />
      <CardList resourceData={resourceData} visibleCards={visibleCards} />
    </div>
  );
};

export default Page;
