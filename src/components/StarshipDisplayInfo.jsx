import React, { Component } from 'react'

export default class StarshipDisplayInfo extends Component {
  render() {
    return (
      <div>
          <h2>Ships Information:</h2>
           
          <h3>Name:{this.props.starships.name}</h3>
           
          <h3>Manufacturer: {this.props.starships.manufacturer}</h3>
            
          <h3>Class: {this.props.starships.starship_class}</h3>
          
          
          </div>
    )
  }
}
