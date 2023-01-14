import { Component } from 'react';

export default class Starship extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.model}</p>
      </div>
    )
  }
}