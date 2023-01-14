import './App.css'
import { Component } from 'react'
import Starship from './Starship'
import axios from 'axios'

export default class App extends Component {

  state = {
    starships: []
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://swapi.dev/api/starships/')
      this.setState({ starships: response.data.results })
    } catch (error) {
      console.log(error)
    }
  }

  
  render() {

    const starships = this.state.starships.map((starship, idx) => {
      return(
      <Starship
        key={'starship-' + idx}
        name={starship.name}
        model={starship.model}
        pilots={starship.pilots}
      />
      )
    })

    return (
      <div className="App">
      {starships}
      </div>
    )
  }
}
