import React from 'react';

const getSpeciesUrl = (visibleResourceData, visibleIndex) => {
  const speciesUrl = visibleResourceData[0][visibleIndex].species[0];
  return speciesUrl;
};

const fetchSpeciesData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

class Planets extends React.Component {
  constructor() {
    super();
    this.state = {
      species: null,
    };
  }

  componentDidMount() {
    fetchSpeciesData(
      getSpeciesUrl(this.props.visibleResourceData, this.props.visibleIndex)
    ).then((data) => {
      this.setState({ species: data.name });
    });
  }

  render() {
    const { number, visibleIndex, visibleResourceData } = this.props;
    return (
      <div>
        <h1>{visibleResourceData[1][visibleIndex].name}</h1>
        <h1>
          Rotation period {visibleResourceData[1][visibleIndex].rotation_period}
          hrs
        </h1>
        <h1>
          Orbital period {visibleResourceData[1][visibleIndex].orbital_period}{' '}
          days
        </h1>
        <h1>Diameter {visibleResourceData[1][visibleIndex].diameter}m</h1>
        <h1>{visibleResourceData[1][visibleIndex].climate} climate</h1>
        <h1>Gravity: {visibleResourceData[1][visibleIndex].gravity}</h1>
        <h1>Terrain: {visibleResourceData[1][visibleIndex].terrain}</h1>
        <h1>
          Surface water: {visibleResourceData[1][visibleIndex].surface_water}%
        </h1>
        <h1>Population: {visibleResourceData[1][visibleIndex].population}</h1>
        <h4>{number}</h4>
      </div>
    );
  }
}

export default Planets;
