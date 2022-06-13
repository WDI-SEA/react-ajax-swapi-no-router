import React, { Component } from "react";
export default class Starship extends Component {
  render() {
    console.log(this.props.starships.results);
    return (
      <>
        <h1>{this.props.starships[0].name}</h1>
        <h2>Starship model</h2>
      </>
    );
  }
}
