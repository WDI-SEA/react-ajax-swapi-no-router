import React, { Component } from "react";
import axios from "axios";
import StarshipContainer from "./StarshipContainer";

class App extends Component {
  state = {
    starshipArray: []
  }
  async componentDidMount() {
    try {
      const response = await axios.get("https://swapi.dev/api/starships");
      this.setState({starshipArray: response.data.results});
    }
    catch (err) {
      console.warn(err);
    }
  }
  render() {
    return (
      <div>
        <StarshipContainer starshipArray={this.state.starshipArray}/>
      </div>
    );
  }
}

export default App;
