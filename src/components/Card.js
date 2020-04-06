import React from 'react';
import SideCardWrapper from '../wrappers/SideCardWrapper';
import CenterCardWrapper from '../wrappers/CenterCardWrapper';
import ResourcePeople from '../containers/ResourcePeople';
import ResourcePlanets from './ResourcePlanets';
import ResourceSpecies from '../containers/ResourceSpecies';

const isPeople = (resourceTitle) => {
  if (resourceTitle === 'People') return true;
};
const isPlanets = (resourceTitle) => {
  if (resourceTitle === 'Planets') return true;
};
const isSpecies = (resourceTitle) => {
  if (resourceTitle === 'Species') return true;
};

const getCardPosition = (position) => {
  return position;
};

const Card = ({
  number,
  visibleIndex,
  position,
  visibleResourceData,
  resourceTitle,
}) => {
  if (isPeople(resourceTitle) && getCardPosition(position) === 'side') {
    return (
      <SideCardWrapper>
        <h1>{visibleResourceData[0][visibleIndex].name}</h1>
        <h4>{number}</h4>
      </SideCardWrapper>
    );
  }
  if (isPeople(resourceTitle) && getCardPosition(position) === 'center') {
    return (
      <CenterCardWrapper>
        <ResourcePeople
          number={number}
          visibleIndex={visibleIndex}
          visibleResourceData={visibleResourceData}
        />
      </CenterCardWrapper>
    );
  }
  if (isPlanets(resourceTitle) && getCardPosition(position) === 'side') {
    return (
      <SideCardWrapper>
        <h1>{visibleResourceData[1][visibleIndex].name}</h1>
        <h4>{number}</h4>
      </SideCardWrapper>
    );
  }
  if (isPlanets(resourceTitle) && getCardPosition(position) === 'center') {
    return (
      <CenterCardWrapper>
        <ResourcePlanets
          number={number}
          visibleIndex={visibleIndex}
          visibleResourceData={visibleResourceData}
        />
      </CenterCardWrapper>
    );
  }
  if (isSpecies(resourceTitle) && getCardPosition(position) === 'side') {
    return (
      <SideCardWrapper>
        <h1>{visibleResourceData[2][visibleIndex].name}</h1>
        <h4>{number}</h4>
      </SideCardWrapper>
    );
  }
  if (isSpecies(resourceTitle) && getCardPosition(position) === 'center') {
    return (
      <CenterCardWrapper>
        <ResourceSpecies
          number={number}
          visibleIndex={visibleIndex}
          visibleResourceData={visibleResourceData}
        />
      </CenterCardWrapper>
    );
  }
};
export default Card;
