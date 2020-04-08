import React, { Component } from 'react';
import Loading from '../components/Loading';
import TitleScreen from '../components/TitleScreen';
import Page from '../components/Page';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'loading',
      dataFetched: false,
      resourceCount: null,
      resourceData: null,
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
      resourceTitles: ['people', 'planets', 'species'],
    };
    this.handleGoLeft = this.handleGoLeft.bind(this);
    this.handleGoRight = this.handleGoRight.bind(this);
    this.setPage = this.setPage.bind(this);
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
          .then((arrayresourceData) => {
            this.setState({ resourceData: arrayresourceData });
            this.setState({ currentPage: 'title' });
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

  // Now we just need error checking
  handleGoLeft(event) {
    this.state.resourceTitles.forEach((title, index) => {
      if (
        this.state.currentPage === title &&
        this.state.visibleInstancesIndex[index][0] > 1
      ) {
        let newVisibleInstancesIndex = [...this.state.visibleInstancesIndex];
        newVisibleInstancesIndex[index] = this.state.visibleInstancesIndex[
          index
        ].map((value) => value - 1);
        this.setState({ visibleInstancesIndex: newVisibleInstancesIndex });
      }
    });
  }

  handleGoRight(event) {
    this.state.resourceTitles.forEach((title, index) => {
      if (
        this.state.currentPage === title &&
        this.state.visibleInstancesIndex[index][
          this.state.visibleInstancesIndex[index].length - 1
        ] < this.state.resourceData[index].length
      ) {
        let newVisibleInstancesIndex = [...this.state.visibleInstancesIndex];
        newVisibleInstancesIndex[index] = this.state.visibleInstancesIndex[
          index
        ].map((value) => value + 1);
        this.setState({ visibleInstancesIndex: newVisibleInstancesIndex });
      }
    });
  }

  setPage(event) {
    if (event.target.className.includes('home-icon')) {
      console.log(event);
      this.setState({ currentPage: 'title' });
    }
    if (event.target.className.includes('people-icon'))
      this.setState({ currentPage: this.state.resourceTitles[0] });
    if (event.target.className.includes('planets-icon'))
      this.setState({ currentPage: this.state.resourceTitles[1] });
    if (event.target.className.includes('species-icon'))
      this.setState({ currentPage: this.state.resourceTitles[2] });
  }

  render() {
    // Deconstruct this.state
    const {
      currentPage,
      dataFetched,
      resourceCount,
      resourceData,
      visibleInstancesIndex,
      urlsToFetch,
      resourceTitles,
    } = this.state;

    // Check values in console. REMOVE IN PRODUCTION
    console.log('Current page', currentPage);
    console.log('Data fetched', dataFetched);
    console.log('Resource count array', resourceCount);
    console.log('Resource data array', resourceData);
    console.log('Visible instances index array', visibleInstancesIndex);
    console.log('URLs to fetch', urlsToFetch);
    console.log('Resource titles array', resourceTitles);

    // If data has not been fetched, show loading component

    if (!dataFetched) return <Loading />;
    else {
      switch (currentPage) {
        case 'title':
          return <TitleScreen setPage={this.setPage} />;
        case resourceTitles[0]:
          return (
            <Page
              resourceTitle={resourceTitles[0]}
              resourceData={resourceData}
              instancesIndex={visibleInstancesIndex[0]}
              handleCardChange={[this.handleGoLeft, this.handleGoRight]}
              setPage={this.setPage}
            />
          );
        case resourceTitles[1]:
          return (
            <Page
              resourceTitle={resourceTitles[1]}
              resourceData={resourceData}
              instancesIndex={visibleInstancesIndex[1]}
              handleCardChange={[this.handleGoLeft, this.handleGoRight]}
              setPage={this.setPage}
            />
          );
        case resourceTitles[2]:
          return (
            <Page
              resourceTitle={resourceTitles[2]}
              resourceData={resourceData}
              instancesIndex={visibleInstancesIndex[2]}
              handleCardChange={[this.handleGoLeft, this.handleGoRight]}
              setPage={this.setPage}
            />
          );
        default:
      }
    }
  }
}

export default App;