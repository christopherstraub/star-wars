import React from 'react';
import Heading from '../Heading/Heading';
import CardList from '../CardList/CardList';

import './ResourcePage.scss';

const ResourcePage = ({
  resourceTitle,
  resourceData,
  instancesIndex,
  handleCardChange,
  handleSearchChange,
}) => {
  return (
    <div className="resource-page">
      <Heading
        resourceTitle={resourceTitle}
        resourceData={resourceData}
        instancesIndex={instancesIndex}
        handleCardChange={handleCardChange}
        handleSearchChange={handleSearchChange}
      />
      <CardList
        resourceTitle={resourceTitle}
        resourceData={resourceData}
        instancesIndex={instancesIndex}
      />
    </div>
  );
};

export default ResourcePage;
