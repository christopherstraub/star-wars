import React, { Component } from 'react';

const getHomeworldUrl = (visibleResourceData, visibleIndex) => {
  const homeworldUrl = visibleResourceData[0][visibleIndex].homeworld;
  return homeworldUrl;
};

const fetchHomeworldData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

const getSpeciesUrl = (visibleResourceData, visibleIndex) => {
  const speciesUrl = visibleResourceData[0][visibleIndex].species[0];
  return speciesUrl;
};

const fetchSpeciesData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

class ResourcePeople extends Component {
  constructor() {
    super();
    this.state = {
      homeworld: null,
      species: null,
    };
  }

  componentDidMount() {
    fetchHomeworldData(
      getHomeworldUrl(this.props.visibleResourceData, this.props.visibleIndex)
    ).then((data) => {
      this.setState({ homeworld: data.name });
    });

    fetchSpeciesData(
      getSpeciesUrl(this.props.visibleResourceData, this.props.visibleIndex)
    ).then((data) => {
      this.setState({ species: data.name });
    });
  }

  render() {
    const { number, visibleIndex, visibleResourceData } = this.props;
    const { homeworld, species } = this.state;
    return (
      <div>
        <h1>{visibleResourceData[0][visibleIndex].name}</h1>
        <h1>{visibleResourceData[0][visibleIndex].height / 100}m tall</h1>
        <h1>{visibleResourceData[0][visibleIndex].mass}kg</h1>
        <h1>Hair {visibleResourceData[0][visibleIndex].hair_color}</h1>
        <h1>{visibleResourceData[0][visibleIndex].skin_color} skin</h1>
        <h1>Born {visibleResourceData[0][visibleIndex].birth_year}</h1>
        <h1>Gender {visibleResourceData[0][visibleIndex].gender}</h1>
        <h4>{number}</h4>
        <h4>homeworld {homeworld}</h4>
        <h4>{species}</h4>
      </div>
    );
  }
}
export default ResourcePeople;
