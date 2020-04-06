import React, { Component } from 'react';
import BackgroundAnimation from '../wrappers/BackgroundAnimation';
import Loading from '../components/Loading';
import TitleScreen from '../components/TitleScreen';
import Page from '../components/Page';

class App extends Component {
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
      peopleInstancesIndex: [1, 2, 3],
      planetsInstancesIndex: [1, 2, 3],
      speciesInstancesIndex: [1, 2, 3],
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
      this.state.peopleInstancesIndex.map((num) => {
        return fetch(
          this.state.urlsToFetch[0].concat(num, '/')
        ).then((response) => response.json());
      })
    ).then((data) => {
      this.setState({ peopleInstances: [].concat(data[0], data[1], data[2]) });
    });

    const planetsPromise = Promise.all(
      this.state.planetsInstancesIndex.map((num) => {
        return fetch(
          this.state.urlsToFetch[1].concat(num, '/')
        ).then((response) => response.json());
      })
    ).then((data) => {
      this.setState({ planetsInstances: [].concat(data[0], data[1], data[2]) });
    });

    const speciesPromise = Promise.all(
      this.state.speciesInstancesIndex.map((num) => {
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
    ]).then(() => this.setState({ dataFetched: true }));
  }

  render() {
    // Deconstruct state
    const {
      dataFetched,
      peopleInstances,
      planetsInstances,
      speciesInstances,
      peopleInstancesIndex,
      planetsInstancesIndex,
      speciesInstancesIndex,
    } = this.state;

    // If data has not been fetched, show loading component
    return !dataFetched ? (
      <Loading />
    ) : (
      <BackgroundAnimation>
        <TitleScreen />
        <Page
          resourceTitle="People"
          visibleResourceData={[
            peopleInstances,
            planetsInstances,
            speciesInstances,
          ]}
          instancesIndex={peopleInstancesIndex}
        />
        <Page
          resourceTitle="Planets"
          visibleResourceData={[
            peopleInstances,
            planetsInstances,
            speciesInstances,
          ]}
          instancesIndex={planetsInstancesIndex}
        />
        <Page
          resourceTitle="Species"
          visibleResourceData={[
            peopleInstances,
            planetsInstances,
            speciesInstances,
          ]}
          instancesIndex={speciesInstancesIndex}
        />
      </BackgroundAnimation>
    );
  }
}

export default App;
