import React, { Component } from 'react' 


export default class Starships extends Component {
       
    render() {
        return (
            <div className="starship-container">
                <h2>{this.props.starship.name}</h2> <hr></hr>
                <p>Manufacturer: {this.props.starship.manufacturer}</p>
                <p>Class: {this.props.starship.starship_class}</p>
                <p>Price (credits): {this.props.starship.cost_in_credits}</p>
                <p>Model: {this.props.starship.model}</p>
                <p>Length: {this.props.starship.length}</p>
                <p>Hyperdrive Rating: {this.props.starship.hyperdrive_rating}</p>
                <p>Consumables: {this.props.starship.consumables}</p>
                <p>Max Speed (atmosphere): {this.props.starship.max_atmosphering_speed}</p>
                <p>Crew Capacity: {this.props.starship.crew}</p>
                <p>Passenger Capacity: {this.props.starship.passengers}</p>
            </div>
        )
    }
}