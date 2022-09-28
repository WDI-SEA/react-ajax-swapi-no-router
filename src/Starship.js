import React, {Component} from 'react'

export default class Starship extends Component {
    render() {
        return (
            <div className='starshipContainer'>
                <h3>Name: {this.props.starship.name}</h3>
                <h3>Class: {this.props.starship.starship_class}</h3>
                <div className='smallFacts'>
                    <p>Cost: {this.props.starship.cost_in_credits}</p>
                    <p>Manufacturer: {this.props.starship.manufacturer}</p>
                    <p>Crew: {this.props.starship.crew} |  Passengers: {this.props.starship.passengers}</p>
                </div>
            </div>
        )
    }
}