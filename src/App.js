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
      peopleCount: null,
      planetsCount: null,
      speciesCount: null,
      people: null,
      planets: null,
      species: null,
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
    )
      .then((data) => {
        this.setState({});
        this.setState({ peopleCount: data[0].count });
        this.setState({ planetsCount: data[1].count });
        this.setState({ speciesCount: data[2].count });
        this.setState({ dataFetched: false });
      })
      .catch((error) => {
        console.log('Error, ', error);
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
          resourceData={[people, planets, species]}
          visibleCards={peopleVisible}
        />
        <Page
          resourceTitle="Planets"
          resourceData={[people, planets, species]}
          visibleCards={planetsVisible}
        />
        <Page
          resourceTitle="Species"
          resourceData={[people, planets, species]}
          visibleCards={speciesVisible}
        />
      </BackgroundAnimation>
    );
  }
}

export default App;
