import React, { Component } from 'react'
import Starship from './Starship'

export default class Starships extends Component {
    render() {
        const aShip = this.props.shipInfo.map((aShip, i) => {
            return (
                <div key={`key${i}`}>
                    <Starship 
                        aShipName={aShip.name}
                        aShipClass={aShip.starship_class}
                        pilots={aShip.pilots}
                    />
                </div>
            )
        })
        
        return (
            <div>
                <h1>Ship Name and Class</h1>
                {aShip}
            </div>
        )
    }
}