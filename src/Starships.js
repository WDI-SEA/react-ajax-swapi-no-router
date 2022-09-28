
import React, {Component} from 'react'
import Starship from './Starship'

export default class Starships extends Component {

    render() {
        const starships = this.props.starshipsCall.map((ship, i) => {
            return ( <Starship key={`starshipKey${i}`} 
            name={ship.name}
            model={ship.model}
            sClass={ship.starship_class}
            pilots={'placeholder'}
            
            
            /> )
        })

        // map data into starship
        return (
            <div className='starshipList'>
                the starship goes here.
                {starships}
                
            </div>
        )
    }
}