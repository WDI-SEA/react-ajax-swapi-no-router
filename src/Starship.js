import React, { Component } from 'react'

export default class Starship extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name} - {this.props.class}</h1>
      </div>
    )
  }
}