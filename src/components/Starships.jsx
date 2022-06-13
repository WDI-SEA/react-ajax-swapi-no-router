import React, { Component } from "react";
import axios from "axios";
import Starship from "./Starship";

export default class StarShips extends Component {
  state = {
    starships: [],
  };
  async componentDidMount() {
    try {
      const res = await fetch("https://swapi.dev/api/starships/?format=json");
      const jsonData = await res.json();
      const ships = jsonData;
      this.setState({
        starships: ships,
      });
      console.log(jsonData.results);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    // const stateShips = this.state.starships;
    // const allShips = stateShips.map((ship, i) => {
    //   return (
    //     <Starship ship={ship} key={i} name={ship.name} model={ship.model} />
    //   );
    // });
    return (
      <>
        <Starship starships={this.state.starships} />
      </>
    );
  }
}
