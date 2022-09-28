import React, { Component } from 'react'
import Starships from './Starships'
import axios from 'axios'

export default class App extends Component {
  state = {
    shipInfo: []
  }
  async componentDidMount() {
    try {
      const response = await axios.get('https://swapi.dev/api/starships')
      this.setState({
        shipInfo: response.data.results
        })
    } catch (err) {
      this.setState({ shipInfo: "Uh oh" })
      console.warn(err)
    }
  }
  render() {

    return (
      <div>
        <Starships 
          shipInfo={this.state.shipInfo}
        />
      </div>
    )
  }
}
