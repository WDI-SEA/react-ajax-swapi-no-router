import React, { Component } from 'react'
export default class Starships extends Component {
   

    render() {
        const shipName = this.props.shipInfo.map((ship, i) => {
            return (
                <div key={`key${i}`}>
                    <p>Ship: {ship.name}</p>
                    <p>Class: {ship.starship_class}</p>
                </div>
            )
        })
        return (
            <div>
                <h1>Ship Name and Class</h1>
                {shipName}
            </div>
        )
    }
}