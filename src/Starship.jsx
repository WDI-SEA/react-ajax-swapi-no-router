import React, { Component } from 'react'
import axios from 'axios'

export default class Starship extends Component {

    state = {
        pilots: []
    }

    // componentDidMount() {
    //     axios.get('http://swapi.dev/api/starships/')
    //         .then(response => {
    //             this.setState({ pilots:  })
    //         })
    // }

    render() {
        console.log(this.props.starship)
        return (
            <div>
                <h2>{this.props.starship.name}</h2>
                <p>Class: {this.props.starship.starship_class}</p>
                <p>Cost: {this.props.starship.cost_in_credits}</p>
                <p>Manufacturer: {this.props.starship.manufacturer}</p>
                <p>Crew: {this.props.starship.crew}</p>
                <p>Passengers: {this.props.starship.passengers}</p>
                <p>Hyperdrive Rating: {this.props.starship.hyperdrive_rating}</p>
                <br></br>
            </div>
        )
    }
}