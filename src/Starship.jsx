import React, { Component } from 'react'

export default class Starship extends Component {
    render() {
        return(
            <li>
                <h2>{this.props.name}</h2>

                <p>Class: {this.props.class}</p>

                <p>Model: {this.props.model}</p>

                <p>Manufacturer: {this.props.manufacturer}</p>

                <p>Length: {this.props.length}</p>

                <p>Cost in credits: {this.props.cost}</p>
            </li>
        )
    }
}