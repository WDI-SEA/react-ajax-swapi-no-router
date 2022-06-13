import React, { Component } from 'react'
import Pilot from './Pilot'

export default class Starship extends Component {
  render() {
    const { ship } = this.props
    const { name, manufacturer, length, starship_class, pilots } = ship

    const allPilots = pilots.map((pilot, i) => {
      return <Pilot key={i} pilot={pilot} />
    })

    return (
      <div>
        <h1>{name}</h1>
        <p>
          <strong>Starship Class: </strong>
          {starship_class}
        </p>
        <p>
          <strong>Manufacturer:</strong> {manufacturer}
        </p>
        <p>Length: {length}</p>
        {pilots.length !== 0 ? allPilots : <p>No Pilots</p>}
      </div>
    )
  }
}
