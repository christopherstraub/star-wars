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
      peopleInstances: null,
      planetsInstances: null,
      speciesInstances: null,
      peopleInstancesIndexes: [1, 2, 3],
      planetsInstancesIndexes: [1, 2, 3],
      speciesInstancesIndexes: [1, 2, 3],
      urlsToFetch: [
        'https://swapi.co/api/people/',
        'https://swapi.co/api/planets/',
        'https://swapi.co/api/species/',
      ],
    };
  }

  componentDidMount() {
    // These promises resolve with the resource count values.
    const countPromise = Promise.all(
      this.state.urlsToFetch.map((url) => {
        return fetch(url).then((response) => response.json());
      })
    )
      .then((data) => {
        this.setState({});
        this.setState({ peopleCount: data[0].count });
        this.setState({ planetsCount: data[1].count });
        this.setState({ speciesCount: data[2].count });
      })
      .catch((error) => {
        console.log('Error, ', error);
      });

    // These promises resolve with the data of the current resource instances
    const peoplePromise = Promise.all(
      this.state.peopleInstancesIndexes.map((num) => {
        return fetch(
          this.state.urlsToFetch[0].concat(num, '/')
        ).then((response) => response.json());
      })
    ).then((data) => {
      this.setState({ peopleInstances: [].concat(data[0], data[1], data[2]) });
    });

    const planetsPromise = Promise.all(
      this.state.planetsInstancesIndexes.map((num) => {
        return fetch(
          this.state.urlsToFetch[1].concat(num, '/')
        ).then((response) => response.json());
      })
    ).then((data) => {
      this.setState({ planetsInstances: [].concat(data[0], data[1], data[2]) });
    });

    const speciesPromise = Promise.all(
      this.state.speciesInstancesIndexes.map((num) => {
        return fetch(
          this.state.urlsToFetch[2].concat(num, '/')
        ).then((response) => response.json());
      })
    ).then((data) => {
      this.setState({ speciesInstances: [].concat(data[0], data[1], data[2]) });
    });

    Promise.all([
      countPromise,
      peoplePromise,
      planetsPromise,
      speciesPromise,
    ]).then(() => this.setState({ dataFetched: false }));

    // }
  }

  render() {
    // Deconstruct state
    const {
      dataFetched,
      peopleInstances,
      planetsInstances,
      speciesInstances,
      peopleInstancesIndexes,
      planetsInstancesIndexes,
      speciesInstancesIndexes,
    } = this.state;

    // If data has not been fetched, show loading component
    return !dataFetched ? (
      <Loading />
    ) : (
      <BackgroundAnimation>
        <TitleScreen />
        <Page
          resourceTitle="People"
          resourceData={(peopleInstances, planetsInstances)}
          InstancesIndexesCards={peopleInstancesIndexes}
        />
        <Page
          resourceTitle="Planets"
          resourceData={[peopleInstances, planetsInstances, speciesInstances]}
          InstancesIndexesCards={planetsInstancesIndexes}
        />
        <Page
          resourceTitle="Species"
          resourceData={[peopleInstances, planetsInstances, speciesInstances]}
          InstancesIndexesCards={speciesInstancesIndexes}
        />
      </BackgroundAnimation>
    );
  }
}

export default App;
