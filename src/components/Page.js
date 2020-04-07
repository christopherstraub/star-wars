import React from 'react';
import Heading from './Heading';
import CardList from './CardList';
import MenuWrapper from '../wrappers/MenuWrapper';

const Page = ({
  resourceTitle,
  visibleResourceData,
  instancesIndex,
  supplementaryResourceData,
}) => {
  return (
    <MenuWrapper>
      <div className="vh-100">
        <Heading resourceTitle={resourceTitle} />
        <CardList
          visibleResourceData={visibleResourceData}
          instancesIndex={instancesIndex}
          supplementaryResourceData={supplementaryResourceData}
          resourceTitle={resourceTitle}
        />
      </div>
    </MenuWrapper>
  );
};

export default Page;
