import React, {Component} from 'react'


class Starship extends Component {
    render() {
      const allStarships = this.props.starships.map((starship, idx) => {
        return (
            <ul key={`starship${idx}`}>
                <li>Name: {starship.name}</li>
                <li>Model: {starship.model}</li>
                <li>Manufacturer: {starship.manufacturer}</li>
                <li>Class: {starship.starship_class}</li>    
            </ul>
        )
      })
      return (
        <div>
          {allStarships}
        </div>
      )
    }
  }
  
  export default Starship