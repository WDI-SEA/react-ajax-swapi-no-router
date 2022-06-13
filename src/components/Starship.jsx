import React, { Component } from "react"

export default class Starship extends Component {
  render() {
    return (
      <div>
        <h2> {this.props.name} </h2>

        <h3> {this.props.class} </h3>
      </div>
    )
  }
}
