import React from 'react';
import Heading from '../Heading/Heading';
import CardList from '../CardList/CardList';

const ResourcePage = ({
  resourceTitle,
  resourceData,
  filteredResourceData,
  resourceCount,
  handleSearchChange,
  handleOnBlur,
}) => {
  return (
    <div className="resource-page vh-100">
      <Heading
        resourceTitle={resourceTitle}
        filteredResourceData={filteredResourceData}
        resourceCount={resourceCount}
        handleSearchChange={handleSearchChange}
        handleOnBlur={handleOnBlur}
      />
      <CardList
        resourceTitle={resourceTitle}
        resourceData={resourceData}
        filteredResourceData={filteredResourceData}
        resourceCount={resourceCount}
      />
    </div>
  );
};

export default ResourcePage;
