import React, { Component } from "react";
import Starships from "./Starships";

export default class App extends Component {

  render() {
    return(
      <>
        <h1>Star Wars</h1>
        <Starships/>
      </>
    )
  }
}