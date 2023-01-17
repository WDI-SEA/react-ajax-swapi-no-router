import React,{ Component } from 'react'
import axios from 'axios'
import Pilot from './Pilot'
 
export default class Starships extends Component {

  state = {
    pilots: []
  } 

  async componentDidMount() {
    const urls = this.props.ship.pilots

    let responses = urls.map(url => axios.get(url))

    responses = await Promise.all(responses)
    let responseData = []
    responses.forEach(response => responseData = [...responseData, response.data])
    this.setState({
      pilots: responseData
    })
    console.log(this.state)
  }



  render(){
    const renderPilots = this.state.pilots.map((pilot, index) => {
      return(
        <Pilot 
          key={index}
          pilot={pilot}
        />
      )
    })
    console.log(this.props.ship.pilots)
  
    return (
      <div>
        <h3>{this.props.ship.name}</h3>
  
        <p>Class: {this.props.ship.starship_class}</p>
  
        <p>Hyperdrive Rating: {this.props.ship.hyperdrive_rating}</p>
  
        <p>Manufacturer: {this.props.ship.manufacturer}</p>
  
        <h4>Pilots:</h4>
  
        { renderPilots.length > 0 ? renderPilots : "no pilots found" }
      </div>
  )
}
}