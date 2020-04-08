import React from 'react';
import Heading from '../Heading/Heading';
import CardList from '../CardList/CardList';
import MenuWrapper from '../../wrappers/MenuWrapper';

const ResourcePage = ({
  resourceTitle,
  resourceData,
  instancesIndex,
  handleCardChange,
  setPage,
}) => {
  return (
    <MenuWrapper setPage={setPage}>
      <div className="vh-100">
        <Heading
          resourceTitle={resourceTitle}
          resourceData={resourceData}
          instancesIndex={instancesIndex}
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

export default ResourcePage;
