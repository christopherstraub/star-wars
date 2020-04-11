import React from 'react';
import CardWrapper from '../../wrappers/CardWrapper/CardWrapper';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Species from '../Species/Species';

const Card = ({ number, resourceTitle, resourceData, resourceObject }) => {
  switch (resourceTitle) {
    case 'people':
      return (
        <CardWrapper>
          <People
            number={number}
            resourceData={resourceData}
            resourceObject={resourceObject}
          />
        </CardWrapper>
      );
    case 'planets':
      return (
        <CardWrapper>
          <Planets number={number} resourceObject={resourceObject} />
        </CardWrapper>
      );
    case 'species':
      return (
        <CardWrapper>
          <Species
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
