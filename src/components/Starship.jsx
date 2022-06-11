import React, { Component } from 'react'


export default class Starship extends Component {
    render() {
    return (
      <div>
        <p>Name: {this.props.shipInfo.name}</p>
        <p>Class: {this.props.shipInfo.starship_class}</p>
      </div>
    )
  }
}
