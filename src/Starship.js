import React, {Component} from 'react'
import axios from 'axios';
import Pilots from './Pilots';

export default class Starship extends Component {
    
    state = {
        pilotsUrl: []
    }

    async componentDidMount() {
        try {
            this.getPilots()
        } catch(err) {
            console.log(err)
        }
    }

    getPilots= () => {
        if (this.props.starship.pilots.length > 0) {
            this.setState({pilotsUrl: this.props.starship.pilots})
        }

}
    

    render() {
        
        return (
            <div className='starshipContainer'>
                <h3>Name: {this.props.starship.name}</h3>
                <h3>Class: {this.props.starship.starship_class}</h3>
                <Pilots pilotUrl={this.state.pilotsUrl} />
                <div className='smallFacts'>
                    <p>Cost: {this.props.starship.cost_in_credits}</p>
                    <p>Manufacturer: {this.props.starship.manufacturer}</p>
                    <p>Crew: {this.props.starship.crew} |  Passengers: {this.props.starship.passengers}</p>
                </div>
            </div>
        )
    }
}