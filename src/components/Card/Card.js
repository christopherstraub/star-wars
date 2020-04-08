import React from 'react';
import CenterCardWrapper from '../wrappers/CardWrapper';
import ResourcePeople from './ResourcePeople';
import ResourcePlanets from './ResourcePlanets';
import ResourceSpecies from './ResourceSpecies';

const Card = ({ number, resourceTitle, resourceData }) => {
  switch (resourceTitle) {
    case 'people':
      return (
        <CenterCardWrapper>
          <ResourcePeople number={number} resourceData={resourceData} />
        </CenterCardWrapper>
      );
    case 'planets':
      return (
        <CenterCardWrapper>
          <ResourcePlanets number={number} resourceData={resourceData} />
        </CenterCardWrapper>
      );
    case 'species':
      return (
        <CenterCardWrapper>
          <ResourceSpecies number={number} resourceData={resourceData} />
        </CenterCardWrapper>
      );
    default:
  }
};
// if (isPeople(resourceTitle) && getCardPosition(position) === 'side') {
//   return (
//     <SideCardWrapper>
//       <h1>{visibleResourceData[0][visibleIndex].name}</h1>
//       <h4>{number}</h4>
//     </SideCardWrapper>
//   );
// }
// if (isPeople(resourceTitle) && getCardPosition(position) === 'center') {
//   return (
//     <CenterCardWrapper>
//       <ResourcePeople
//         number={number}
//         visibleIndex={visibleIndex}
//         visibleResourceData={visibleResourceData}
//       />
//     </CenterCardWrapper>
//   );
// }
// if (isPlanets(resourceTitle) && getCardPosition(position) === 'side') {
//   return (
//     <SideCardWrapper>
//       <h1>{visibleResourceData[1][visibleIndex].name}</h1>
//       <h4>{number}</h4>
//     </SideCardWrapper>
//   );
// }
// if (isPlanets(resourceTitle) && getCardPosition(position) === 'center') {
//   return (
//     <CenterCardWrapper>
//       <ResourcePlanets
//         number={number}
//         visibleIndex={visibleIndex}
//         visibleResourceData={visibleResourceData}
//       />
//     </CenterCardWrapper>
//   );
// }
// if (isSpecies(resourceTitle) && getCardPosition(position) === 'side') {
//   return (
//     <SideCardWrapper>
//       <h1>{visibleResourceData[2][visibleIndex].name}</h1>
//       <h4>{number}</h4>
//     </SideCardWrapper>
//   );
// }
// if (isSpecies(resourceTitle) && getCardPosition(position) === 'center') {
//   return (
//     <CenterCardWrapper>
//       <ResourceSpecies
//         number={number}
//         visibleIndex={visibleIndex}
//         visibleResourceData={visibleResourceData}
//       />
//     </CenterCardWrapper>
//   );
// }

export default Card;
