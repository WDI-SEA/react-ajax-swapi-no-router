import React from 'react';

const Starship = ({ name, starshipClass }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Class: {starshipClass}</p>
    </div>
  );
};

export default Starship;
