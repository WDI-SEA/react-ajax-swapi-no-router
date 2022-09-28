import React, {Component} from 'react'



class Starship extends Component {
    render() {

      return (
        <ul>
            <li>Name: {this.props.starship.name}</li>
            <li>Model: {this.props.starship.model}</li>
            <li>Manufacturer: {this.props.starship.manufacturer}</li>
            <li>Class: {this.props.starship.starship_class}</li>   
        </ul>
      )
    }
  }
  
  export default Starship