import React, { Component, Fragment } from 'react';
import Loading from '../../components/Loading/Loading';
import TitlePage from '../../components/TitlePage/TitlePage';
import ResourcePage from '../../components/ResourcePage/ResourcePage';
import MenuWrapper from '../../wrappers/MenuWrapper/MenuWrapper';

import { Link, animateScroll as scroll, Events, scrollSpy } from 'react-scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataFetched: false,
      resourceCount: null,
      resourceData: null,
      visibleInstancesIndex: [[1], [1], [1]],
      urlsToFetch: [
        'https://christopherstraub.github.io/swapi/resources/fixtures/people.json',
        'https://christopherstraub.github.io/swapi/resources/fixtures/planets.json',
        'https://christopherstraub.github.io/swapi/resources/fixtures/species.json',
      ],
      resourceTitles: ['people', 'planets', 'species'],
    };
    this.handleCardChange = this.handleCardChange.bind(this);
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
        let _peopleCount = arrayResources[0].length;
        let _planetsCount = arrayResources[1].length;
        let _speciesCount = arrayResources[2].length;
        this.setState({
          resourceCount: [_peopleCount, _planetsCount, _speciesCount],
        });
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

    // Smooth scroll
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    // Smooth scroll
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  handleCardChange(event) {
    console.log(event.target.dataset.id);

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

    // switch (event.target.dataset.id) {
    //   case 'people-left':

    //   case 'planets-left':
    //     if (this.state.visibleInstancesIndex[1][0] > 1) {
    //       let newVisibleInstancesIndex = [...this.state.visibleInstancesIndex];
    //       newVisibleInstancesIndex[1] = this.state.visibleInstancesIndex[1].map(
    //         (value) => value - 1
    //       );
    //       this.setState({ visibleInstancesIndex: newVisibleInstancesIndex });
    //     }
    //   case 'species-left':
    //     if (this.state.visibleInstancesIndex[2][0] > 1) {
    //       let newVisibleInstancesIndex = [...this.state.visibleInstancesIndex];
    //       newVisibleInstancesIndex[2] = this.state.visibleInstancesIndex[2].map(
    //         (value) => value - 1
    //       );
    //       this.setState({ visibleInstancesIndex: newVisibleInstancesIndex });
    //     }
    //   case 'people-right':
    //     if (
    //       this.state.visibleInstancesIndex[0][
    //         this.state.visibleInstancesIndex[0].length - 1
    //       ] < this.state.resourceCount[0]
    //     ) {
    //       let newVisibleInstancesIndex = [...this.state.visibleInstancesIndex];
    //       newVisibleInstancesIndex[0] = this.state.visibleInstancesIndex[0].map(
    //         (value) => value + 1
    //       );
    //       this.setState({ visibleInstancesIndex: newVisibleInstancesIndex });
    //     }
    // }
  }

  render() {
    // Deconstruct this.state
    const {
      dataFetched,
      resourceCount,
      resourceData,
      visibleInstancesIndex,
      urlsToFetch,
      resourceTitles,
    } = this.state;

    // Check values in console. REMOVE IN PRODUCTION
    // console.log('Data fetched', dataFetched);
    // console.log('Resource count array', resourceCount);
    // console.log('Resource data array', resourceData);
    // console.log('Visible instances index array', visibleInstancesIndex);
    // console.log('URLs to fetch', urlsToFetch);
    // console.log('Resource titles array', resourceTitles);

    // If data has not been fetched, show loading component
    return !dataFetched ? (
      <Loading />
    ) : (
      <MenuWrapper scrollToTop={this.scrollToTop}>
        <TitlePage />

        <div id="people">
          <ResourcePage
            resourceTitle={resourceTitles[0]}
            resourceData={resourceData}
            instancesIndex={visibleInstancesIndex[0]}
            handleCardChange={this.handleCardChange}
          />
        </div>
        <div id="planets">
          <ResourcePage
            resourceTitle={resourceTitles[1]}
            resourceData={resourceData}
            instancesIndex={visibleInstancesIndex[1]}
            handleCardChange={this.handleCardChange}
          />
        </div>

        <div id="species">
          <ResourcePage
            resourceTitle={resourceTitles[2]}
            resourceData={resourceData}
            instancesIndex={visibleInstancesIndex[2]}
            handleCardChange={this.handleCardChange}
          />
        </div>
      </MenuWrapper>
    );
  }
}

export default App;
