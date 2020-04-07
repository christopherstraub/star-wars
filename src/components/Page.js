import React from 'react';
import Heading from './Heading';
import CardList from './CardList';
import MenuWrapper from '../wrappers/MenuWrapper';

const Page = ({
  resourceTitle,
  resourceData,
  instancesIndex,
  handleCardChange,
}) => {
  return (
    <MenuWrapper>
      <div className="vh-100">
        <Heading
          resourceTitle={resourceTitle}
          handleCardChange={handleCardChange}
        />
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
