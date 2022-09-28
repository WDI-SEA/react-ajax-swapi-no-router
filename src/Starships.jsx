import React, { Component } from 'react'
import axios from 'axios'
import Starship from './Starship'
const url = 'https://swapi.dev/api/starships/?page='

export default class Starships extends Component {
    state = {
        starships: []
    }

    componentDidMount() {
        Promise.all([
            axios.get(`${url}1`),
            axios.get(`${url}2`),
            axios.get(`${url}3`),
            axios.get(`${url}4`),
        ])
        .then(response => {
            const fullArray = []
            response.forEach(response => {
                response.data.results.forEach(result => {
                    fullArray.push(result)
                })
            })
            this.setState({ starships: fullArray })
        })
        .catch(error => {
            console.warn(error)
            this.setState({ starship: 'Oh no! It\'s a trap!'})
        })
    }

    render() {
        const starships = this.state.starships.map((starship, i) => {
            return (
                <Starship
                    key={`starship${i}`}
                    name={starship.name}
                    class={starship.starship_class}
                    model={starship.model}
                    manufacturer={starship.manufacturer}
                    cost={starship.cost_in_credits}
                    length={starship.length}
                    pilots={starship.pilots}
                />
            )
        })

        const style = {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto',
        }

        return(
            <div>
                <h1 style={{ textAlign: 'center' }}>Star Wars Starships</h1>

                <ul style={style}>
                    {starships}
                </ul>
            </div>
        )
    }
}