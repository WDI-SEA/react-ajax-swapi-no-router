import React, { Component } from 'react'
import Starship from './Starship'

export default class Starships extends Component {

  
  render() {
    // console.log(this.props.starships)
    const starshipComponents = this.props.starships && this.props.starships.map((starship, i) => {
        return (
            <Starship 
                name={starship.name}
                class={starship.class}
                key={`starship-${i}`}
            
            />
        )
        
    })

    return (
        <h2>
            {starshipComponents}
        </h2>
    )
  }
}