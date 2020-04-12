import React from 'react';
import CardWrapper from '../../wrappers/CardWrapper/CardWrapper';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Species from '../Species/Species';

const Card = ({ index, resourceTitle, resourceData, resourceObject }) => {
  switch (resourceTitle) {
    case 'people':
      return (
        <CardWrapper>
          <People
            index={index}
            resourceData={resourceData}
            resourceObject={resourceObject}
          />
        </CardWrapper>
      );
    case 'planets':
      return (
        <CardWrapper>
          <Planets index={index} resourceObject={resourceObject} />
        </CardWrapper>
      );
    case 'species':
      return (
        <CardWrapper>
          <Species
            index={index}
            resourceData={resourceData}
            resourceObject={resourceObject}
          />
        </CardWrapper>
      );
    default:
  }
};

export default Card;
