import React, { Component } from 'react'
import Starship from './Starship'

export default class Starships extends Component {
    render() {

        const allStarships = this.props.starships.map((starship, i) => {
            if (starship) {
                return (
                    <Starship
                    starship={starship}
                    key={`starship-${i}`}
                    />
                )

            }
        })

        return (
            <div>
                {allStarships}
                

            </div>
        )
    }
}