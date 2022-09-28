import React, { Component } from "react";
import Starships from "./Starships";
import axios from 'axios'
export default class App extends Component {
  state = {
    starships: []
  }
  async componentDidMount() {
    try {
      let response = await axios.get("https://swapi.dev/api/starships")
      let info = response.data.results
      while (response.data.next !== null) {
        response = await axios.get(response.data.next)
        info = info.concat(response.data.results)
      }
      this.setState({starships: info})
    } catch(err) {
      console.warn(err)
    }
  }
  render() {
    return (
      <Starships 
      starships={this.state.starships}/>
    )
  }
}
