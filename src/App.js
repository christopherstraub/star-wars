import React from 'react';
import Card from './Card';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: {},
    };
  }

  // componentDidMount() {
  //   const getData = (resource, id) => {
  //     fetch(`https://swapi.co/api/${resource}/${id}/`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.setState({ people: data });
  //       });
  //   };
  //   getData('people', 16);
  // }

  render() {
    return !Object.keys(this.state.people).length ? (
      <h1 className="green">loading</h1>
    ) : (
      <Card>This is a Name</Card>
    );
  }
}

export default App;
