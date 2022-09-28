import React, { Component } from 'react'
import Starship from './Starship'
import axios from 'axios'

export default class App extends Component {

  state={
    starships: []
  }

 async componentDidMount() {
    try {

      const ApiResponse = await axios.get('https://swapi.dev/api/starships')
      this.setState({starships: ApiResponse.data.results})

    } catch(err) {
      console.log(err)
    }
  }

  render(){
    console.log('app.js is rendering')
    return(
      <div>
        <Starship starships={this.state.starships} />
      </div>
    )
  }
}