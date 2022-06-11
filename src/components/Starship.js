import React, { Component } from 'react'

export default class Starship extends Component {
    render() {
        return (
            <div>
                <h2>Name: {this.props.state.name}</h2>
                <h3>Class: {this.props.state.class}</h3>
                <h3>Manufacturer: {this.props.state.manufacturer}</h3>
                <h3>Crew: {this.props.state.crew}</h3>
                <h3>Passengers: {this.props.state.passengers}</h3>
                <h3>MaxSpeed: {this.props.state.maxSpeed}</h3>
            </div>
        )
    }
}