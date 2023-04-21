import React, { Component } from 'react'
import axios from "axios"

export default class Starships extends Component {

    state = {
        starships: []
    }

    componentDidMount() {
        console.log('the starships component has mounted')
        this.handleFetchStarships()
    }

    handleFetchStarships = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/starships/')
            this.setState({
                starships: response.data.results
            })

        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
                <div>
                    {this.state.starships.map((starship, i) => {
                        return(
                            <div key={`starship-${i}`} className='Ship-info' >
                                <h2 className='Starship-name'>{starship.name}</h2>
                                <ul className='Ship-bullets'>
                                    <li>Class: {starship.starship_class}</li>
                                    <li>Manufacturer: {starship.manufacturer}</li>
                                    <li>Cost: {starship.cost_in_credits} credits</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
        )
    }
}