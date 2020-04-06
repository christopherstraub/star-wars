import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import Loading from './Loading';
import TitleScreen from './TitleScreen';
import Page from './Page';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataFetched: false,
      people: {},
      planets: {},
      species: {},
      peopleVisible: [1, 2, 3],
      planetsVisible: [1, 2, 3],
      speciesVisible: [1, 2, 3],
      urlsToFetch: [
        'https://swapi.co/api/people/',
        'https://swapi.co/api/planets/',
        'https://swapi.co/api/species/',
      ],
    };
  }

  componentDidMount() {
    Promise.all(
      this.state.urlsToFetch.map((url) => {
        return fetch(url).then((response) => response.json());
      })
    ).then((data) => {
      this.setState({ people: data[0] });
      this.setState({ planets: data[1] });
      this.setState({ species: data[2] });
      this.setState({ dataFetched: true });
    });
  }

  handleVisibleChange(event) {}

  render() {
    // Deconstruct state
    const {
      dataFetched,
      people,
      planets,
      species,
      peopleVisible,
      planetsVisible,
      speciesVisible,
    } = this.state;

    // If data has not been fetched, show loading component
    return !dataFetched ? (
      <Loading />
    ) : (
      <BackgroundAnimation>
        <TitleScreen />
        <Page
          resourceTitle="People"
          resourceData={people}
          visibleCards={peopleVisible}
        />
        <Page
          resourceTitle="Planets"
          resourceData={planets}
          visibleCards={planetsVisible}
        />
        <Page
          resourceTitle="Species"
          resourceData={species}
          visibleCards={speciesVisible}
        />
      </BackgroundAnimation>
    );
  }
}

export default App;
