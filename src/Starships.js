import React, { Component } from "react"
import Starship from "./Starship"
import axios from "axios"

export default class Starships extends Component {
  state = {
    starshipList: [],
    next: 'https://swapi.dev/api/starships/'
  }

  async componentDidMount() {
    try {
      await this.addStarships()
    } catch(err) {
      console.warn(err)
    }
  }

  addStarships = async () => {
    try {
      const response = await axios.get(this.state.next)
      this.setState({
        starshipList: [...this.state.starshipList, ...response.data.results],
        next: response.data.next
      })
    } catch(err) {
      console.warn(err)
    }
  }
  
  render() {
    const shipRender = this.state.starshipList.map((ship, i) => { return (
        <Starship 
          key={`ship_${i}`}
          name={ship.name}
          class={ship.starship_class}
        />
      )})

    return (
      <>
        {shipRender}
      </>
    )    
  }
}