import React from 'react'

export default function Starship(props) {

    let ships = props.starship.map((results, index) => (
        <div key={index}>
            <h4> StarShip: {results.name} </h4>
            <span> Class: {results.starship_class} </span> 
        </div>
    ))

  return (
    <div className="Starship">
        {ships}
    </div>
  )
}