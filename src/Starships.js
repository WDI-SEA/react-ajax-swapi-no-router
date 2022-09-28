import React, {Component} from 'react'
import Starship from './Starship'

export default class Starships extends Component {
    render() {
        const allStarships = this.props.starships.map((starship, idx) => {
            return (
                    <Starship 
                    key={`starship${idx}`}
                    starship={starship}                    
                    />   
            )
          })
        return (
            <div>
                {allStarships}
            </div>
        )
    }
}