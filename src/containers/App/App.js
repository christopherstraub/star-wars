import React, { Component } from 'react';
import Loading from '../../components/Loading/Loading';
import TitlePage from '../../components/TitlePage/TitlePage';
import ResourcePage from '../../components/ResourcePage/ResourcePage';
import MenuWrapper from '../../wrappers/MenuWrapper/MenuWrapper';

import { animateScroll as scroll } from 'react-scroll';
import Reveal from 'react-reveal/Reveal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataFetched: false,
      resourceData: [],
      resourceSearch: ['', '', ''],
      visibleInstancesIndex: [[1], [1], [1]],
      urlsToFetch: [
        'https://christopherstraub.github.io/swapi/resources/fixtures/people.json',
        'https://christopherstraub.github.io/swapi/resources/fixtures/planets.json',
        'https://christopherstraub.github.io/swapi/resources/fixtures/species.json',
      ],
      resourceTitles: ['people', 'planets', 'species'],
    };
    this.handleCardChange = this.handleCardChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  // First fetch the resource root urls to get the count of each resource.
  // Make an instance index array for each resource going from 1 to count and resolve the promise with an array of those arrays.
  // Then, for each resource, fetch one url per element in the resource's instance index array.
  // Two layers of error checking. First, only successful responses (status = 200) are returned.
  // Also, only add resource objects to their arrays if they are not undefined.
  // Wait for all resource promises to resolve with Promise.all, and return an array of resource instances. Set dataFetched = true.
  componentDidMount() {
    // Fetch data
    Promise.all(
      this.state.urlsToFetch.map((url) => {
        return fetch(url).then((response) => {
          if (response.status === 200) return response.json();
        });
      })
    )
      .then((arrayResources) => {
        let _peopleData;
        let _planetsData;
        let _speciesData;

        _peopleData = arrayResources[0].map((object) => object.fields);
        _planetsData = arrayResources[1].map((object) => object.fields);
        _speciesData = arrayResources[2].map((object) => object.fields);
        this.setState({
          resourceData: [_peopleData, _planetsData, _speciesData],
        });
        this.setState({ dataFetched: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Smooth scroll
  scrollToTop() {
    scroll.scrollToTop();
  }

  handleCardChange = (event) => {
    if (event.target.dataset.id === 'people-left') {
      if (this.state.visibleInstancesIndex[0][0] > 1) {
        let newVisibleInstancesIndex = [...this.state.visibleInstancesIndex];
        newVisibleInstancesIndex[0] = this.state.visibleInstancesIndex[0].map(
          (value) => value - 1
        );
        this.setState({ visibleInstancesIndex: newVisibleInstancesIndex });
      }
    }
    if (event.target.dataset.id === 'planets-left') {
      if (this.state.visibleInstancesIndex[1][0] > 1) {
        let newVisibleInstancesIndex = [...this.state.visibleInstancesIndex];
        newVisibleInstancesIndex[1] = this.state.visibleInstancesIndex[1].map(
          (value) => value - 1
        );
        this.setState({ visibleInstancesIndex: newVisibleInstancesIndex });
      }
    }
    if (event.target.dataset.id === 'species-left') {
      if (this.state.visibleInstancesIndex[2][0] > 1) {
        let newVisibleInstancesIndex = [...this.state.visibleInstancesIndex];
        newVisibleInstancesIndex[2] = this.state.visibleInstancesIndex[2].map(
          (value) => value - 1
        );
        this.setState({ visibleInstancesIndex: newVisibleInstancesIndex });
      }
    }
    if (event.target.dataset.id === 'people-right') {
      if (
        this.state.visibleInstancesIndex[0][
          this.state.visibleInstancesIndex[0].length - 1
        ] < this.state.resourceCount[0]
      ) {
        let newVisibleInstancesIndex = [...this.state.visibleInstancesIndex];
        newVisibleInstancesIndex[0] = this.state.visibleInstancesIndex[0].map(
          (value) => value + 1
        );
        this.setState({ visibleInstancesIndex: newVisibleInstancesIndex });
      }
    }
    if (event.target.dataset.id === 'planets-right') {
      if (
        this.state.visibleInstancesIndex[1][
          this.state.visibleInstancesIndex[1].length - 1
        ] < this.state.resourceCount[1]
      ) {
        let newVisibleInstancesIndex = [...this.state.visibleInstancesIndex];
        newVisibleInstancesIndex[1] = this.state.visibleInstancesIndex[1].map(
          (value) => value + 1
        );
        this.setState({ visibleInstancesIndex: newVisibleInstancesIndex });
      }
    }
    if (event.target.dataset.id === 'species-right') {
      if (
        this.state.visibleInstancesIndex[2][
          this.state.visibleInstancesIndex[2].length - 1
        ] < this.state.resourceCount[2]
      ) {
        let newVisibleInstancesIndex = [...this.state.visibleInstancesIndex];
        newVisibleInstancesIndex[2] = this.state.visibleInstancesIndex[2].map(
          (value) => value + 1
        );
        this.setState({ visibleInstancesIndex: newVisibleInstancesIndex });
      }
    }
  };

  handleSearchChange = (event) => {
    if (event.target.dataset.id === 'people-search') {
      const newResourceSearch = [...this.state.resourceSearch];
      newResourceSearch[0] = event.target.value;
      this.setState({ resourceSearch: newResourceSearch });
    }
    if (event.target.dataset.id === 'planets-search') {
      const newResourceSearch = [...this.state.resourceSearch];
      newResourceSearch[1] = event.target.value;
      this.setState({ resourceSearch: newResourceSearch });
    }
    if (event.target.dataset.id === 'species-search') {
      const newResourceSearch = [...this.state.resourceSearch];
      newResourceSearch[2] = event.target.value;
      this.setState({ resourceSearch: newResourceSearch });
    }
    console.log(this.state.resourceSearch);
  };

  render() {
    // Deconstruct this.state
    const {
      dataFetched,
      resourceData,
      resourceSearch,
      visibleInstancesIndex,
      urlsToFetch,
      resourceTitles,
    } = this.state;

    // Check values in console. REMOVE IN PRODUCTION
    console.log('Data fetched', dataFetched);
    console.log('Resource data array', resourceData);
    console.log('Visible instances index array', visibleInstancesIndex);
    console.log('URLs to fetch', urlsToFetch);
    console.log('Resource titles array', resourceTitles);

    // Filter resource data according to user search
    const arrayResourceNames = resourceData.map((array) =>
      array.map((obj) => obj.name)
    );

    const filteredArrayResourceNames = arrayResourceNames.map(
      (array, index) => {
        return array.filter((name) =>
          name
            .toLocaleLowerCase()
            .includes(this.state.resourceSearch[index].toLocaleLowerCase())
        );
      }
    );

    const filteredResourceData = this.state.resourceData.map((array, index) => {
      return array.filter((object) => {
        for (const i in filteredArrayResourceNames[index]) {
          if (object.name === filteredArrayResourceNames[index][i]) {
            return object;
          }
        }
      });
    });

    // If user search finds no results,
    // the visibleInstancesIndex array corresponding to that resource should be empty.
    let filteredVisibleInstancesIndex = [...this.state.visibleInstancesIndex];

    for (const index in filteredResourceData) {
      if (filteredResourceData[index].length === 0) {
        filteredVisibleInstancesIndex[index] = [0];
      }
    }

    console.log(filteredVisibleInstancesIndex);

    // If data has not been fetched, show loading component
    return !dataFetched ? (
      <Loading />
    ) : (
      <MenuWrapper scrollToTop={this.scrollToTop}>
        <div id="home">
          <TitlePage />
        </div>

        <Reveal effect="fadeIn">
          <div id="people">
            <ResourcePage
              resourceTitle={resourceTitles[0]}
              resourceData={resourceData}
              filteredResourceData={filteredResourceData}
              instancesIndex={filteredVisibleInstancesIndex[0]}
              handleCardChange={this.handleCardChange}
              handleSearchChange={this.handleSearchChange}
            />
          </div>
        </Reveal>
        <Reveal effect="fadeIn">
          <div id="planets">
            <ResourcePage
              resourceTitle={resourceTitles[1]}
              resourceData={resourceData}
              filteredResourceData={filteredResourceData}
              instancesIndex={filteredVisibleInstancesIndex[1]}
              handleCardChange={this.handleCardChange}
              handleSearchChange={this.handleSearchChange}
            />
          </div>
        </Reveal>

        <Reveal effect="fadeIn">
          <div id="species">
            <ResourcePage
              resourceTitle={resourceTitles[2]}
              resourceData={resourceData}
              filteredResourceData={filteredResourceData}
              instancesIndex={filteredVisibleInstancesIndex[2]}
              handleCardChange={this.handleCardChange}
              handleSearchChange={this.handleSearchChange}
            />
          </div>
        </Reveal>
      </MenuWrapper>
    );
  }
}

export default App;
