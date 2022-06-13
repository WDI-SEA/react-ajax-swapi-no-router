import React, { Component } from 'react' 
import Starship from './Starship'

export default class Starships extends Component {
    render() {
        const starships = this.props.starships.map((starship, i) => {
            return (
            <Starship key={`starship-${i}`}starship={starship}/>
            )
        })
        return (
            <div className="starships-container">
                <h1>Starships</h1>
                {starships}
            </div>
        )
    }
}