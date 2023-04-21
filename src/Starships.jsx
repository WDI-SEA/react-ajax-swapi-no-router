import React, { Component } from "react";
import Starship from "./Starship"

export default class Starships extends Component {
  state = {
    starships: [],
  };

  async componentDidMount() {
    let page = 1;
    let response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
    let parsedResponse = await response.json();
    let starships = parsedResponse.results;
    while (parsedResponse.next) {
      page++;
      response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
      parsedResponse = await response.json();
      starships = [...starships, ...parsedResponse.results];
      // just doesn't feel safe writing a while without an escape condition
      if (page > 10) {
        break;
      }
    }
    this.setState({
      starships
    });
  }

  render() {
    const starships = this.state.starships.map((starship, i) => {
        return (
            <Starship
            name={starship.name}
            model={starship.model}
            key={`starship ${i}`}
            />
        )
    })
    return <>
    {starships}
    </>;
  }
}
