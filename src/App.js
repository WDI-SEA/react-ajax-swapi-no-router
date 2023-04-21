import React, { Component } from 'react';
import axios from 'axios';
import Starships from './Starships'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starships: [],
    };
  }

  componentDidMount() {
    this.getStarships();
  }

  async getStarships() {
    const response = await axios.get('https://swapi.dev/api/starships/');
    this.setState({ starships: response.data.results });
  }

  render() {
    return (
      <div className="App">
        <h1>Star Wars Starships</h1>
        <Starships starships={this.state.starships} />
      </div>
    );
  }
}

export default App;
