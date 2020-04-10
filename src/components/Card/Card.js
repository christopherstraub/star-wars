import React from 'react';
import MainCardWrapper from '../../wrappers/MainCardWrapper/MainCardWrapper';
import ResourcePeople from '../ResourcePeople/ResourcePeople';
import ResourcePlanets from '../ResourcePlanets/ResourcePlanets';
import ResourceSpecies from '../ResourceSpecies/ResourceSpecies';

const Card = ({ number, resourceTitle, resourceData, resourceObject }) => {
  switch (resourceTitle) {
    case 'people':
      return (
        <MainCardWrapper>
          <ResourcePeople
            number={number}
            resourceData={resourceData}
            resourceObject={resourceObject}
          />
        </MainCardWrapper>
      );
    case 'planets':
      return (
        <MainCardWrapper>
          <ResourcePlanets number={number} resourceObject={resourceObject} />
        </MainCardWrapper>
      );
    case 'species':
      return (
        <MainCardWrapper>
          <ResourceSpecies
            number={number}
            resourceData={resourceData}
            resourceObject={resourceObject}
          />
        </MainCardWrapper>
      );
    default:
  }
};

export default Card;
