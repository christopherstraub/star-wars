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

  // Update resourceSearch state with user input based on
  // which resource input was changed.
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
      resourceTitles,
    } = this.state;

    // We want to remove whitespace from the resourceSearch Array so that,
    // for example, if the user enters "77 kg", they will still see objects with mass = "77kg".
    // We also want to convert it to lower case.
    // We also want to replace any periods entered by the user with whitespace,
    // so that, for example, the user may enter "2.02" and still find objects with height = "202".
    const lowerNoWhiteSpaceResourceSearch = resourceSearch.map((string) =>
      string.toLocaleLowerCase().replace(/\s/g, '').replace(/\./, '')
    );

    // We want to filter out the date edited, date created, homeworld,
    // and people so that they dont interfere with the user search results.
    // Also, we want to append units where necessary, so that a user search including units
    // will still show an object whose original data does not include the units.
    const filteredResourceValues = resourceData.map((array) => {
      return array.map((object) => {
        const { edited, created, homeworld, people, ...rest } = object;
        // Only modify the rest object if the object has the property we're changing
        // and the property is not "unknown".
        if (rest.height !== undefined && rest.height !== 'unknown')
          rest.height = `${rest.height}m`;
        if (rest.mass !== undefined && rest.mass !== 'unknown')
          rest.mass = `${rest.mass}kg`;
        if (
          rest.surface_water !== undefined &&
          rest.surface_water !== 'unknown'
        )
          rest.surface_water = `${rest.surface_water}%`;
        if (rest.diameter !== undefined && rest.diameter !== 'unknown')
          rest.diameter = `${rest.diameter}m`;
        if (
          rest.rotation_period !== undefined &&
          rest.rotation_period !== 'unknown'
        )
          rest.rotation_period = `${rest.rotation_period}hrs`;
        if (
          rest.orbital_period !== undefined &&
          rest.orbital_period !== 'unknown'
        )
          rest.orbital_period = `${rest.orbital_period}days`;
        if (
          rest.average_lifespan !== undefined &&
          rest.average_lifespan !== 'unknown'
        )
          rest.average_lifespan = `${rest.average_lifespan}years`;
        if (
          rest.average_height !== undefined &&
          rest.average_height !== 'unknown'
        )
          rest.average_height = `${rest.average_height}m`;

        console.log(rest.average_height);
        return Object.values(rest);
      });
    });

    // After converting each values array to a string, similarly to with the user search,
    // we want to convert it to lower case and remove whitespace.
    const filteredResourceData = resourceData.map((array, arrayIndex) => {
      return array.filter((object, objectIndex) => {
        return filteredResourceValues[arrayIndex][objectIndex]
          .toString()
          .toLocaleLowerCase()
          .replace(/\s/g, '')
          .includes(lowerNoWhiteSpaceResourceSearch[arrayIndex]);
      });
    });

    // If data has not been fetched, show loading component
    return !dataFetched ? (
      <LoadingPage />
    ) : (
      <MenuWrapper scrollToBottom={this.scrollToBottom}>
        <div id="home">
          <TitlePage />
        </div>

        {resourceTitles.map((title, index) => {
          return (
            <Reveal effect="fadeIn">
              <div id={title}>
                <ResourcePage
                  resourceTitle={title}
                  resourceData={resourceData}
                  filteredResourceData={filteredResourceData}
                  resourceCount={filteredResourceData[index].length}
                  handleSearchChange={this.handleSearchChange}
                />
              </div>
            </Reveal>
          );
        })}

        <Jump>
          <Footer />
        </Jump>
      </MenuWrapper>
    );
  }
}

export default App;
