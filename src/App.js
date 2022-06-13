import React, { Component } from "react"
import Starships from "./components/Starships"

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>STARWARS</h1>
        <Starships />
      </div>
    )
  }
}