import React, { Component } from 'react'

export default class Starship extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.starships.name}</h2>
                <h3>Class: {this.props.starships.starship_class}</h3>
                <p>Manufacturer: {this.props.starships.manufacturer}</p>
                <p>Max Atmospheric Speed: {this.props.starships.max_atmosphering_speed}</p>
            </div>
        )
    }
}
