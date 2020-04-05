import React from 'react';
import CardList from './CardList';

import './App.css';
import './star-animation.css';

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
    return Object.keys(this.state.people).length ? (
      <h1 className="green">loading</h1>
    ) : (
      <div>
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
          <h1 className="yellow">People</h1>
          <CardList people={true} />
        </div>
      </div>
    );
  }
}

export default App;
