import React, { Component } from 'react'

export default class Starship extends Component {
    render() {
        console.log(this.props.starship)
        return (
            <div>
                <h2>Name: {this.props.starship.name}</h2>
                <p>Class: {this.props.starship.starship_class}</p>
                <p>Manufacturer: {this.props.starship.manufacturer}</p>
                <p>Crew: {this.props.starship.crew}</p>
                <p>Passengers: {this.props.starship.passengers}</p>
                <p>Hyperdrive Rating: {this.props.starship.hyperdrive_rating}</p>

            </div>
        )
    }
}