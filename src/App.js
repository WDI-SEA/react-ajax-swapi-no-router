import React, { Component } from 'react'
import axios from 'axios'
import Starships from './Starships'

export default class App extends Component {
  state = {
    allStarships: [],
  }

  async componentDidMount() {
    try {
        const response = await axios.get('https://swapi.dev/api/starships/')
        this.setState({ allStarships: response.data.results })
        console.log(response)
    } catch(err) {
        // good practice inform the user
        // this.setState({ joke: 'oh no! there was an error' })
        console.warn(err)
    }
  }

  render() {
    return(
      <div>
        <Starships 
          starships={this.state.allStarships}
        />
      </div>
    )
  }
}
