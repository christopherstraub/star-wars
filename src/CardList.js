import React from 'react';
import Card from './Card';
import Arrow from './Arrow';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      people: {},
      planets: {},
      species: {},
    };
  }
  render() {
    return (
      <div>
        <Arrow click={true} />
        <Card>
          <h1>This is a NameESA PERRA TU VEIJA</h1>
          <p>Height 172</p>
          <p>Mass 77</p>
          <p>Hair color blond</p>
          <p className="dim">View more</p>
        </Card>
        <Card>
          <h1>This is a Name</h1>
          <p>Height 172</p>
          <p>Mass 77</p>
          <p>Hair color blond</p>
          <p className="dim">View more</p>
        </Card>
        <Card>
          <h1>This is a Name</h1>
          <p>Height 172</p>
          <p>Mass 77</p>
          <p>Hair color blond</p>
          <p className="dim">View more</p>
        </Card>
        <Card>
          <h1>This is a Name</h1>
          <p>Height 172</p>
          <p>Mass 77</p>
          <p>Hair color blond</p>
          <p className="dim">View more</p>
        </Card>
        <Card>
          <h1>This is a Name</h1>
          <p>Height 172</p>
          <p>Mass 77</p>
          <p>Hair color blond</p>
          <p className="dim">View more</p>
        </Card>
        <Card>
          <h1>This is a Name</h1>
          <p>Height 172</p>
          <p>Mass 77</p>
          <p>Hair color blond</p>
          <p className="dim">View more</p>
        </Card>
        <Card>
          <h1>This is a Name</h1>
          <p>Height 172</p>
          <p>Mass 77</p>
          <p>Hair color blond</p>
          <p className="dim">View more</p>
        </Card>
      </div>
    );
  }
}

export default CardList;
