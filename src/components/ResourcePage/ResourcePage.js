import React from 'react';
import Heading from '../Heading/Heading';
import CardList from '../CardList/CardList';
import MenuWrapper from '../../wrappers/MenuWrapper/MenuWrapper';

import './ResourcePage.scss';

const ResourcePage = ({
  resourceTitle,
  resourceData,
  instancesIndex,
  handleCardChange,
  setPage,
}) => {
  return (
    <MenuWrapper setPage={setPage}>
      <div className="resource-page">
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
