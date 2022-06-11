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
        <h2>{starship_class}</h2>
        <p>Manufacturer: {manufacturer}</p>
        <p>Length: {length}</p>
        {pilots.length !== 0 ? allPilots : <p>No Pilots</p>}
      </div>
    )
  }
}
