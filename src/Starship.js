import React from 'react';
import './Starship.css'

export default function Starship(props) {

    let items = props.starship.map((item, index) => (
        <div key={index}>
            <h4>StarShip: {item.name}</h4>
            <span>Class: {item.starship_class}</span> 
        </div>
    ))

  return (
    <div className="Starship">
     {items}
    </div>
  );
}
