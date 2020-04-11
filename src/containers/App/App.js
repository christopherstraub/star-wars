import React, { Component } from 'react';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import TitlePage from '../../components/TitlePage/TitlePage';
import ResourcePage from '../../components/ResourcePage/ResourcePage';
import MenuWrapper from '../../wrappers/MenuWrapper/MenuWrapper';
import Footer from '../../components/Footer/Footer';

import { animateScroll as scroll } from 'react-scroll';
import Reveal from 'react-reveal/Reveal';
import Jump from 'react-reveal/Jump';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataFetched: false,
      resourceData: [],
      resourceSearch: ['', '', ''],
      urlsToFetch: [
        'https://christopherstraub.github.io/swapi/resources/fixtures/people.json',
        'https://christopherstraub.github.io/swapi/resources/fixtures/planets.json',
        'https://christopherstraub.github.io/swapi/resources/fixtures/species.json',
      ],
      resourceTitles: ['people', 'planets', 'species'],
    };
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
        let _peopleData = arrayResources[0].map((object) => object.fields);
        let _planetsData = arrayResources[1].map((object) => object.fields);
        let _speciesData = arrayResources[2].map((object) => object.fields);
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
  scrollToBottom() {
    scroll.scrollToBottom();
  }

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
  };

  render() {
    // Deconstruct this.state
    const {
      dataFetched,
      resourceData,
      resourceSearch,
      urlsToFetch,
      resourceTitles,
    } = this.state;

    // Check values in console. REMOVE IN PRODUCTION
    console.log('Data fetched', dataFetched);
    console.log('Resource data array', resourceData);
    console.log('URLs to fetch', urlsToFetch);
    console.log('Resource titles array', resourceTitles);

    console.log(resourceSearch);

    // Filter resource data according to user search
    const arrayResourceNames = resourceData.map((array) =>
      array.map((obj) => obj.name)
    );

    const filteredArrayResourceNames = arrayResourceNames.map(
      (array, index) => {
        return array.filter((name) =>
          name
            .toLocaleLowerCase()
            .includes(resourceSearch[index].toLocaleLowerCase())
        );
      }
    );

    const filteredResourceData = resourceData.map((array, index) => {
      return array.filter((object) => {
        for (const i in filteredArrayResourceNames[index]) {
          if (object.name === filteredArrayResourceNames[index][i]) {
            return object;
          }
        }
      });
    });

    console.log('Filtered resource data array', filteredResourceData);

    // If data has not been fetched, show loading component
    return !dataFetched ? (
      <LoadingPage />
    ) : (
      <MenuWrapper scrollToBottom={this.scrollToBottom}>
        <div id="home">
          <TitlePage />
        </div>

        <Reveal effect="fadeIn">
          <div id="people">
            <ResourcePage
              resourceTitle={resourceTitles[0]}
              resourceData={resourceData}
              filteredResourceData={filteredResourceData}
              resourceCount={filteredResourceData[0].length}
              handleSearchChange={this.handleSearchChange}
              handleOnBlur={this.handleOnBlur}
            />
          </div>
        </Reveal>
        <Reveal effect="fadeIn">
          <div id="planets">
            <ResourcePage
              resourceTitle={resourceTitles[1]}
              resourceData={resourceData}
              filteredResourceData={filteredResourceData}
              resourceCount={filteredResourceData[1].length}
              handleSearchChange={this.handleSearchChange}
              handleOnBlur={this.handleOnBlur}
            />
          </div>
        </Reveal>

        <Reveal effect="fadeIn">
          <div id="species">
            <ResourcePage
              resourceTitle={resourceTitles[2]}
              resourceData={resourceData}
              filteredResourceData={filteredResourceData}
              resourceCount={filteredResourceData[2].length}
              handleSearchChange={this.handleSearchChange}
              handleOnBlur={this.handleOnBlur}
            />
          </div>
        </Reveal>
        <Jump>
          <Footer />
        </Jump>
      </MenuWrapper>
    );
  }
}

export default App;
