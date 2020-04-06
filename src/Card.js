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

const Card = ({ resource, num, position, resourceTitle }) => {
  if (isPeople(resourceTitle) && getCardPosition(position) === 'side') {
    return (
      <SideCardWrapper>
        <h1>{resource.results[num - 1].name}</h1>
        <h4>{num}</h4>
      </SideCardWrapper>
    );
  }
  if (isPeople(resourceTitle) && getCardPosition(position) === 'center') {
    return (
      <CenterCardWrapper>
        <People resource={resource} num={num} />
      </CenterCardWrapper>
    );
  }
  if (isPlanets(resourceTitle) && getCardPosition(position) === 'side') {
    return (
      <SideCardWrapper>
        <h1>{resource.results[num - 1].name}</h1>
        <h4>{num}</h4>
      </SideCardWrapper>
    );
  }
  if (isPlanets(resourceTitle) && getCardPosition(position) === 'center') {
    return (
      <CenterCardWrapper>
        <Planets resource={resource} num={num} />
      </CenterCardWrapper>
    );
  }
  if (isSpecies(resourceTitle) && getCardPosition(position) === 'side') {
    return (
      <SideCardWrapper>
        <h1>{resource.results[num - 1].name}</h1>
        <h4>{num}</h4>
      </SideCardWrapper>
    );
  }
  if (isSpecies(resourceTitle) && getCardPosition(position) === 'center') {
    return (
      <CenterCardWrapper>
        <Species resource={resource} num={num} />
      </CenterCardWrapper>
    );
  }
};
export default Card;
