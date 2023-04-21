import React, { Component } from "react";
import axios from 'axios'
import Starship from "./Startship";

export default class Starships extends Component {
  state = {
      starships: []
  }
  componentDidMount = async () => {
    try {
      const response = await axios.get ("https://swapi.dev/api/starships")
      this.setState({
        starships: response.data.results
      })
      console.log('ships:', response.data.results)
    } catch(err) {
      console.warn(err)
    }
  }
render () {
const shipsInState = this.state.starships.map((ship, i) => {
  return<Starship 
      key={"ships-"+i}
      name={ship.name}
      cost={ship.cost_in_credits}
      class={ship.starship_class}
      url={ship.url}
      pilots={ship.pilots}
      />
})
  return (
    <>
      <h1>StarShips</h1>
      {shipsInState}
    </>
  )
}


}