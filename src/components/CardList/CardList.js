import React from 'react';
import Card from '../Card/Card';
import Scroll from '../../wrappers/Scroll/Scroll';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const getResourceIndex = (resourceTitle) => {
  if (resourceTitle === 'people') return 0;
  if (resourceTitle === 'planets') return 1;
  if (resourceTitle === 'species') return 2;
};

const CardList = ({
  resourceTitle,
  resourceData,
  filteredResourceData,
  resourceCount,
}) => {
  return resourceCount === 0 ? (
    <div className="no-results tc ma0 f2">{`no ${resourceTitle} found`}</div>
  ) : (
    <Scroll>
      <ErrorBoundary>
        <div className="flex justify-center content-start flex-wrap pl6 pr6">
          {filteredResourceData[getResourceIndex(resourceTitle)].map(
            (object, index) => {
              return (
                <Card
                  key={index + 1}
                  number={index + 1}
                  resourceTitle={resourceTitle}
                  resourceData={resourceData}
                  resourceObject={object}
                />
              );
            }
          )}
        </div>
      </ErrorBoundary>
    </Scroll>
  );
};

export default CardList;
