import React, { Component } from "react"
import axios from "axios"
import Starship from "./Starship"

export default class Starships extends Component {
  state = {
    starships: "",
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://swapi.dev/api/starships/')
      this.setState({ starships: response.data.results})
    } catch (error) {
      console.warn(error)
    }
  }


  render() {
      const starships = this.state.starships.map((starship, i) => {
           return (
               <Starship key={`starships${i}`} name={starship.name} class={starship.starship_class}/>
           )

      })
    return (
      <div>
        <h1>{starships}</h1>
      </div>
    )
  }
}