import { Component } from 'react'
import Starships from './Starships'
import axios from 'axios'

export default class App extends Component {
  state= {
    starships: []
  }

  async componentDidMount() {
    const url = 'https://swapi.dev/api/starships'
    try {
        const response = await axios.get(url)
        this.setState({
            starships: response.data.results
        })
    } catch(err){
        console.log(err)
    }
  }


  render() {
    const ships = this.state.starships.map((ship, idx) => {
      return(
        <Starships 
          name = {ship.name}
          class ={ship.starship_class}
          manufacturer = {ship.manufacturer}
          key = {`ship-${idx}`}
        />
      )
    })
    return (
      <div>
        <h1>Starships</h1>
        {ships}
      </div>
    )
  }
}
