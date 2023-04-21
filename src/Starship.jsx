import React, { Component } from 'react';

class Starship extends Component {
  render() {
    const { name, starshipClass, cost, url } = this.props;

    return (
      <div className="starship-card">
        <h2>{name}</h2>
        <div className="starship-details">
          <p>
            <strong>Class:</strong> {starshipClass}
          </p>
          <p>
            <strong>Cost:</strong> ${cost}
          </p>
          <p>
            <a href={url}>Documentation</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Starship;
