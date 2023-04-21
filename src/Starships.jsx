import React from 'react';
import Starship from './Starship';

const Starships = ({ starships }) => {
  return (
    <div>
      {starships.map(starship => (
        <Starship key={starship.name} name={starship.name} starshipClass={starship.starship_class} />
      ))}
    </div>
  );
};

export default Starships;
