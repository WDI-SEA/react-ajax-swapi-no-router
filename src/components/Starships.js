import React, { Component } from "react"
import Starship from "./Starship"
import axios from "axios"

export default class Starships extends Component {
    state = {
        starships: []
    }
    
    componentDidMount = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/starships/')
			console.log("SHIPS:", response.data.results)
            this.setState({
                starships: response.data.results
            })
        } catch(err) {
            console.log(err)
        }
    }
  
    render () {
        const shipInState = this.state.starships.map((ship, i) => {
            console.log('One Ship', ship)
            return (
                <Starship
                key={`ship-${i}`}
                name={ship.name}
                class={ship.starship_class}
                cost={ship.cost_in_credits}
                pilots={ship.pilots}
                />
            )
        })
    return (
      <>
        <h1>Starships</h1>
        {shipInState}
      </>
    )
  }
}
