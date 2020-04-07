import React, { Component } from 'react';
import Loading from '../components/Loading';
import TitleScreen from '../components/TitleScreen';
import Page from '../components/Page';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataFetched: false,
      resourceCount: null,
      resourceInstances: null,
      visibleInstancesIndex: [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
      ],
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
        let _peopleCount = arrayResources[0].count;
        let _planetsCount = arrayResources[1].count;
        let _speciesCount = arrayResources[2].count;

        return Promise.all([_peopleCount, _planetsCount, _speciesCount]);
      })
      .then((arrayResourceCount) => {
        this.setState({ resourceCount: arrayResourceCount });
        let _peopleInstancesIndex = [];
        let _planetsInstancesIndex = [];
        let _speciesInstancesIndex = [];

        for (let i = 1; i <= arrayResourceCount[0]; i++)
          _peopleInstancesIndex.push(i);
        for (let i = 1; i <= arrayResourceCount[1]; i++)
          _planetsInstancesIndex.push(i);
        for (let i = 1; i <= arrayResourceCount[2]; i++)
          _speciesInstancesIndex.push(i);
        return Promise.all([
          _peopleInstancesIndex,
          _planetsInstancesIndex,
          _speciesInstancesIndex,
        ]);
      })

      .then((arrayInstancesIndex) => {
        let _peopleInstances = [];
        let _planetsInstances = [];
        let _speciesInstances = [];

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
                _peopleInstances.push(person);
              }
            }
            return _peopleInstances;
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
                _planetsInstances.push(planet);
              }
            }
            return _planetsInstances;
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
                _speciesInstances.push(specie);
              }
            }
            return _speciesInstances;
          })
          .catch((error) => {
            console.log('Error in speciesPromise.', error);
          });

        Promise.all([peoplePromise, planetsPromise, speciesPromise])
          .then((arrayResourceInstances) => {
            this.setState({ resourceInstances: arrayResourceInstances });
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
      resourceCount,
      resourceInstances,
      visibleInstancesIndex,
    } = this.state;

    // If data has not been fetched, show loading component
    return !dataFetched ? <Loading /> : <TitleScreen />;
    {
      /* <Page
          resourceTitle="People"
          visibleResourceData={resourceInstances}
          instancesIndex={visibleInstancesIndex[0]}
        />
        <Page
          resourceTitle="Planets"
          visibleResourceData={resourceInstances}
          instancesIndex={visibleInstancesIndex[1]}
        />
        <Page
          resourceTitle="Species"
          visibleResourceData={resourceInstances}
          instancesIndex={visibleInstancesIndex[2]}
        /> */
    }
  }
}

export default App;
