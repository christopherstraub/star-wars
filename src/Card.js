import React from 'react';
import SideCardWrapper from './SideCardWrapper';
import CenterCardWrapper from './CenterCardWrapper';
import People from './People';
import Planets from './Planets';
import Species from './Species';

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

const Card = ({ num, position, visibleResourceData, resourceTitle }) => {
  if (isPeople(resourceTitle) && getCardPosition(position) === 'side') {
    return (
      <SideCardWrapper>
        <h1>{visibleResourceData[0][num].name}</h1>
        <h4>{num}</h4>
      </SideCardWrapper>
    );
  }
  if (isPeople(resourceTitle) && getCardPosition(position) === 'center') {
    return (
      <CenterCardWrapper>
        <People visibleResourceData={visibleResourceData} num={num} />
      </CenterCardWrapper>
    );
  }
  if (isPlanets(resourceTitle) && getCardPosition(position) === 'side') {
    return (
      <SideCardWrapper>
        <h1>{visibleResourceData[1][num].name}</h1>
        <h4>{num}</h4>
      </SideCardWrapper>
    );
  }
  if (isPlanets(resourceTitle) && getCardPosition(position) === 'center') {
    return (
      <CenterCardWrapper>
        <Planets visibleResourceData={visibleResourceData} num={num} />
      </CenterCardWrapper>
    );
  }
  if (isSpecies(resourceTitle) && getCardPosition(position) === 'side') {
    return (
      <SideCardWrapper>
        <h1>{visibleResourceData[2][num].name}</h1>
        <h4>{num}</h4>
      </SideCardWrapper>
    );
  }
  if (isSpecies(resourceTitle) && getCardPosition(position) === 'center') {
    return (
      <CenterCardWrapper>
        <Species visibleResourceData={visibleResourceData} num={num} />
      </CenterCardWrapper>
    );
  }
};
export default Card;
