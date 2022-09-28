import React, { Component } from 'react'
import Starship from './Starship'
import axios from 'axios'

export default class Starships extends Component {

    state = {
        starships: []
    }

    componentDidMount() {
        axios.get('http://swapi.dev/api/starships/')
          .then(response => {
            console.log('The API has responded!')
            this.setState({ starships: response.data.results })
          })
      }

    render() {

        const allStarships = this.state.starships.map((starship, i) => {
            if (starship) {
                return (
                    <Starship
                    starship={starship}
                    key={`starship-${i}`}
                    />
                )

            }
        })

        return (
            <div>
                {allStarships}
            </div>
        )
    }
}