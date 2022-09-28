import React, { Component } from 'react'
export default class Starship extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.aShipName} - Class: {this.props.aShipClass}</p>
            </div>
        )
    }
}