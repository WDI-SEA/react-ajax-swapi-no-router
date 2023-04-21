import React, { Component } from 'react';
import Starship from './Starship';

class Starships extends Component {
  render() {
    const { starships } = this.props;

    return (
      <div>
        {starships.map(starship => (
          <Starship
            key={starship.name}
            name={starship.name}
            starshipClass={starship.starship_class}
            cost={starship.cost_in_credits}
            url={starship.url}
          />
        ))}
      </div>
    );
  }
}

export default Starships;
