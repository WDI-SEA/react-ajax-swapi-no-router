import React, { Component } from "react";
import axios from "axios";
import StarshipContainer from "./StarshipContainer";

class App extends Component {
  state = {
    starshipArray: [],
    page: 1
  }
  async componentDidMount() {
    try {
      const response = await axios.get("https://swapi.dev/api/starships?page=1");
      this.setState({starshipArray: response.data.results});
    }
    catch (err) {
      console.warn(err);
    }
  }
  handlePaginationClick = async (button) => {
    try {
      let response = {};
      switch (button) {
        case "prev":
          response = await axios.get(`https://swapi.dev/api/starships?page=${this.state.page - 1}`);
          this.setState(prevState => {
            return {
              starshipArray: response.data.results,
              page: prevState.page - 1
            }
          });
          break;
        case "next":
          response = await axios.get(`https://swapi.dev/api/starships?page=${this.state.page + 1}`);
          this.setState(prevState => {
            return {
              starshipArray: response.data.results,
              page: prevState.page + 1
            }
          });
          break;
        default:
          console.log("No matching pagination button");
          break;
      }
    }
    catch (err) {
      console.warn(err);
    }
  }
  render() {
    return (
      <div className="m-5">
        <StarshipContainer 
          starshipArray={this.state.starshipArray}
          page={this.state.page}
          handlePaginationClick={this.handlePaginationClick}
        />
      </div>
    );
  }
}

export default App;
