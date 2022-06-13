import React , { Component } from 'react'

import axios from 'axios'
export default class Ships extends Component {


    state = {
        name: '',
        ships: []
    }
       async componentDidMount() {
        try {
            const response = await axios.get( 'https://swapi.dev/api/starships/')
            console.log(response.data.results[0].name)
            console.log(response.data.results)
            this.setState({name: response.data.results[0].name})

            const ships = response.data.results.map((s, i) => {
                return <li key={`s${i}`}>The {s.name} is a {s.starship_class}</li>
            })
            this.setState({ships: ships})
        } catch (err) {

        }
        {/* could be <ship
        <Starship
        key={`starships ${i}
        name={ship.name}
        `}
    */}
    }
  render() {

    return(
      <div>
       <h1>Ships</h1>
       {/* <h3>{this.state.name}</h3> */}
       <ul>{this.state.ships}</ul>



      </div>

    )
  }
}
