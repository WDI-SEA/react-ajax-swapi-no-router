import React, { Component } from 'react'
import Starship from './Starship'
import axios from 'axios'

export default class Starships extends Component {
    state = {
        starships: []
    }
    async componentDidMount() {
        try {
            const response = await axios.get('https://swapi.dev/api/starships/')
            this.setState({ starships: response.data.results })
        } catch (err) {
            console.log(err, 'api error')
        }
    }
    render() {
        const showShips = this.state.starships.map((ship, i) => {
            return <Starship key={`starship#${i}`} starships={ship} />
        })
        return (
            < div >
                <h1>StarShips, were meant to flyyyyyyyyy</h1>
                {showShips}
            </div >
        )
    }
}
