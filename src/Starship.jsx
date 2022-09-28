import React, { Component } from 'react'

export default class Starship extends Component {
    render(){
        const starships = this.props.starships.map((starship, i) => {

            return <li>
            <p>Name: {starship.name}</p>
            <p>Model: {starship.model}</p>
            <p>Class: {starship.starship_class}</p>
            <p>Max speed: {starship.max_atmosphering_speed} MAS</p>
            </li>

        })
        console.log('Starship.jsx is rendering')
        return(
            <ol>
                {starships}
            </ol>
        )
    }
}