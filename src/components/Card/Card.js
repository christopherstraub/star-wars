import React from 'react';
import CardWrapper from '../../wrappers/CardWrapper/CardWrapper';
import ResourcePeople from '../ResourcePeople/ResourcePeople';
import ResourcePlanets from '../ResourcePlanets/ResourcePlanets';
import ResourceSpecies from '../ResourceSpecies/ResourceSpecies';

const Card = ({ number, resourceTitle, resourceData, resourceObject }) => {
  switch (resourceTitle) {
    case 'people':
      return (
        <CardWrapper>
          <ResourcePeople
            number={number}
            resourceData={resourceData}
            resourceObject={resourceObject}
          />
        </CardWrapper>
      );
    case 'planets':
      return (
        <CardWrapper>
          <ResourcePlanets number={number} resourceObject={resourceObject} />
        </CardWrapper>
      );
    case 'species':
      return (
        <CardWrapper>
          <ResourceSpecies
            number={number}
            resourceData={resourceData}
            resourceObject={resourceObject}
          />
        </CardWrapper>
      );
    default:
  }
};

export default Card;
