import React, {Component} from 'react'
import Starship from './Starship'

export default class Starships extends Component {
    
    render(){
        const starshipsComponents = this.props.starships.map((name, i) => {
            return (
                <Starship
                    starship={name}
                    key={`starship-${i}`}
                />

            )
        })
        return(
            <div>
            <h1>Starships:</h1>
                {starshipsComponents}
            </div>
        )
    }
}