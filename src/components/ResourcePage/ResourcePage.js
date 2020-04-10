import React from 'react';
import Heading from '../Heading/Heading';
import CardList from '../CardList/CardList';

import './ResourcePage.scss';

const ResourcePage = ({
  resourceTitle,
  resourceData,
  filteredResourceData,
  instancesIndex,
  handleCardChange,
  handleSearchChange,
}) => {
  return (
    <div className="resource-page">
      <Heading
        resourceTitle={resourceTitle}
        resourceData={resourceData}
        filteredResourceData={filteredResourceData}
        instancesIndex={instancesIndex}
        handleCardChange={handleCardChange}
        handleSearchChange={handleSearchChange}
      />
      <CardList
        resourceTitle={resourceTitle}
        resourceData={resourceData}
        filteredResourceData={filteredResourceData}
        instancesIndex={instancesIndex}
      />
    </div>
  );
};

export default ResourcePage;
