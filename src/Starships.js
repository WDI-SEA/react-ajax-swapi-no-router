import React, {Component} from 'react'
import axios from 'axios'

export default class Starships extends Component {
    state = {
        starShips: []
    }

    componentDidMount(){
        console.log('componentdidmount')
        axios.get("https://swapi.dev/api/starships/")
        .then((response)=>{
            this.setState({starShips : response.data.results.map((Starship,i)=>{
                return (
                    <div key={`starship${i}`}>
                        <p>Name: {Starship.name}</p>
                        <p>Model: {Starship.model} </p>
                        <p>Manufacturer: {Starship.Manufacturer}</p>
                        <p>Class: {Starship.starship_class}</p>
                    </div>
                )
            }) })
        })
    }
  render(){
    console.log(this.state)
    return (
      <div>
        {this.state.starShips}
      </div>
    )
  }
}
