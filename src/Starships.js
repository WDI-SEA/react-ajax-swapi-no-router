import React, {Component} from 'react'


export default class Starships extends Component {
  render(){
    const starships = this.props.starships.map((starship, i) =>{
        return <li>
            <p>Name: {starship.name}</p>
            <p>Model: {starship.model}</p>
            <p>Class: {starship.starship_class}</p>
            <p>Value: {starship.cost_in_credits} Credits</p>
            <p>Manufacturer: {starship.manufacturer}</p>
        </li>
            
        
    })
    console.log('Starships.js is rendering')
    return(
      <div>
        <ol>
            {starships}
        </ol>
      </div>
    )
  }
}