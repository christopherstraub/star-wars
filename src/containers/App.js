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
      peopleInstances: [],
      planetsInstances: [],
      speciesInstances: [],
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

  // First fetch the resource root urls to get the count of each resource.
  // Make an instance index array for each resource going from 1 to count and resolve the promise with an array of those arrays.
  // Then, for each resource, fetch one url per element in the resource's instance index array.
  // Two layers of error checking. First, only successful responses (status = 200) are returned.
  // Also, only add resource objects to their arrays if they are not undefined.
  // Wait for all resource promises to resolve with Promise.all, and return an array of resource instances. Set dataFetched = true.
  componentDidMount() {
    Promise.all(
      this.state.urlsToFetch.map((url) => {
        return fetch(url).then((response) => response.json());
      })
    )
      .then((arrayResources) => {
        this.setState({});
        this.setState({ peopleCount: arrayResources[0].count });
        this.setState({ planetsCount: arrayResources[1].count });
        this.setState({ speciesCount: arrayResources[2].count });
        let _peopleInstancesIndex = [];
        let _planetsInstancesIndex = [];
        let _speciesInstancesIndex = [];
        for (let i = 1; i <= this.state.peopleCount; i++)
          _peopleInstancesIndex.push(i);
        for (let i = 1; i <= this.state.planetsCount; i++)
          _planetsInstancesIndex.push(i);
        for (let i = 1; i <= this.state.speciesCount; i++)
          _speciesInstancesIndex.push(i);
        return Promise.resolve([
          _peopleInstancesIndex,
          _planetsInstancesIndex,
          _speciesInstancesIndex,
        ]);
      })
      .then((arrayInstancesIndex) => {
        const peoplePromise = Promise.all(
          arrayInstancesIndex[0].map((num) => {
            return fetch(this.state.urlsToFetch[0].concat(num, '/')).then(
              (response) => {
                if (response.status === 200) return response.json();
              }
            );
          })
        )
          .then((arrayPeople) => {
            for (const person of arrayPeople) {
              if (person !== undefined) {
                this.setState({
                  peopleInstances: this.state.peopleInstances.concat(person),
                });
              }
            }
            return this.state.peopleInstances;
          })
          .catch((error) => {
            console.log('Error in peoplePromise.', error);
          });

        const planetsPromise = Promise.all(
          arrayInstancesIndex[1].map((num) => {
            return fetch(this.state.urlsToFetch[1].concat(num, '/')).then(
              (response) => {
                if (response.status === 200) return response.json();
              }
            );
          })
        )
          .then((arrayPlanets) => {
            for (const planet of arrayPlanets) {
              if (planet !== undefined) {
                this.setState({
                  planetsInstances: this.state.planetsInstances.concat(planet),
                });
              }
            }
            return this.state.planetsInstances;
          })
          .catch((error) => {
            console.log('Error in planetsPromise.', error);
          });

        const speciesPromise = Promise.all(
          arrayInstancesIndex[2].map((num) => {
            return fetch(this.state.urlsToFetch[2].concat(num, '/')).then(
              (response) => {
                if (response.status === 200) return response.json();
              }
            );
          })
        )
          .then((arraySpecies) => {
            for (const specie of arraySpecies) {
              if (specie !== undefined) {
                this.setState({
                  speciesInstances: this.state.speciesInstances.concat(specie),
                });
              }
            }
            return this.state.planetsInstances;
          })
          .catch((error) => {
            console.log('Error in speciesPromise.', error);
          });

        Promise.all([peoplePromise, planetsPromise, speciesPromise])
          .then((arrayResourceInstances) => {
            this.setState({ dataFetched: true });
          })
          .catch((error) => {
            console.log('Error in Promise.all.', error);
          });
      })
      .catch((error) => {
        console.log('Error in countPromise.', error);
      });
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

    console.log(peopleInstances);
    console.log(planetsInstances);
    console.log(speciesInstances);
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
