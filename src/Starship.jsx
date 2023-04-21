import React, { Component } from 'react'
import axios from 'axios'

export default class Starship extends Component{

    state = {
        starships: []
    }

    componentDidMount = async () => {
        axios.get('https://swapi.dev/api/starships')
            .then( response => {
                // console.log(response.data.results)
                this.setState({
                    starships: response.data.results
                })
            }).catch(console.log)
    }



  render() {

    const starship = this.state.starships.map((ship, i) => {
        return(
            <div>
                <h2>{ship.name}</h2>
                <p>price= ${ship.cost_in_credits}</p>
                <a href={ship.url}>more info</a>          
            </div>
        )
    })

    return(
      <div>
        <h1>List of SWAPI Starships</h1>
        {starship}
      </div>
    )
  }
}
