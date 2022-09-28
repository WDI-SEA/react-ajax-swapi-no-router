import React, { Component } from 'react'

export default class Starship extends Component {

  
  render() {
    return (
        <>
        <div>{this.props.name}</div>
        <div>{this.props.class}</div>
      </>
    )
  }
}