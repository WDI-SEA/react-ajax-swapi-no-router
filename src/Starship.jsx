import React, { Component } from 'react'
import Pilot from './Pilot'

export default class Starship extends Component {
    render() {
        const pilots = this.props.pilots.map((pilot, i) => {
            return(
                <Pilot
                    key={`pilot${i}`}
                    pilot={pilot}
                />
            )
        })

        const style = {
            gap: '1rem'
        }

        return(
            <li style={style}>
                <h2>{this.props.name}</h2>

                <p>Class: {this.props.class}</p>

                <p>Model: {this.props.model}</p>

                <p>Manufacturer: {this.props.manufacturer}</p>

                <p>Length: {this.props.length}</p>

                <p>Cost in credits: {this.props.cost}</p>

                <p>Pilots:</p>
                <ul>
                    {pilots.length > 0 ? pilots : 'No pilots to display'}
                </ul>
            </li>
        )
    }
}