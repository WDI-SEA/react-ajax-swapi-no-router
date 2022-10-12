import React, { Component } from 'react'
import axios from 'axios'
import Starship from './Starship'

// https://swapi.dev/

export default class Starships extends Component {
    state = {
        starships: []
    }

    async componentDidMount() {
        try {
            // const options = {
            //     headers: {
            //         Accept: 'application/json'
            //     }
            // }
            const response = await axios.get('https://swapi.dev/api/starships')
            this.setState({ starships: response.data.results })
            console.log( 'RESPONSE',response.data.results)
        } catch(err) {
            // this.setState({ starships: 'err' })
            console.warn(err)
        }
    }

    // handleStarshipDisplay = () => {
    //     const options = {
    //         headers: {
    //             Accept: 'application/json'
    //         }
    //     }
    //     axios.get('https://swapi.dev/starships/', options)
    //         .then(response => {
    //             console.log('the API has responded!')
    //             this.setState({ results: response.data.results })
    //         })
    //         .catch(console.warn)
    // }

  render () {
    const shipsInState = this.state.starships.map((ship, i) => {
        console.log('ONE SHIP', ship)

        return (
            <div>
                < Starship 
                    key={`ship-${i}`}
                    name={ship.name}
                    class={ship.starship_class}
                    cost={ship.cost_in_credits}
                    pilots={ship.pilots} />
            </div>
        )
    })
    return (
      <div>
        <h1>Starships</h1>
        {shipsInState}
        {/* <p>{this.state.results}</p>

        <button onClick={this.handleStarshipDisplay}></button> */}
      </div>
    )
  }
}