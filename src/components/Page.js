import React from 'react';
import Heading from './Heading';
import CardList from './CardList';

const Page = ({
  resourceTitle,
  visibleResourceData,
  instancesIndex,
  supplementaryResourceData,
}) => {
  return (
    <div className="vh-100 ba red">
      <Heading resourceTitle={resourceTitle} />
      <CardList
        visibleResourceData={visibleResourceData}
        instancesIndex={instancesIndex}
        supplementaryResourceData={supplementaryResourceData}
        resourceTitle={resourceTitle}
      />
    </div>
  );
};

export default Page;
