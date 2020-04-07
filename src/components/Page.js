import React from 'react';
import Heading from './Heading';
import CardList from './CardList';
import MenuWrapper from '../wrappers/MenuWrapper';

const Page = ({ resourceTitle, resourceData, instancesIndex }) => {
  return (
    <MenuWrapper>
      <div className="vh-100">
        <Heading resourceTitle={resourceTitle} />
        <CardList
          resourceTitle={resourceTitle}
          resourceData={resourceData}
          instancesIndex={instancesIndex}
        />
      </div>
    </MenuWrapper>
  );
};

export default Page;
