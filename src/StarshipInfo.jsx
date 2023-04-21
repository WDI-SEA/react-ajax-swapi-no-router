import React, { Component } from 'react'

const Starship = ({starship}) => {
    return (
        <div>
            <h2>{starship.name}</h2>
            <p>Class: {starship.starship_class}</p>
            <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
            <p>Megalight Per Hour: {starship.mglt}</p>
            <p>Cost in Imperial Credits: {starship.cost_in_credits}</p>
        </div>
    )
}

export default Starship;