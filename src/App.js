import React, { Component } from 'react'
import Starships from './Starships'
import axios from 'axios'

export default class App extends Component {

  state = {
    starships: []
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/starships/')
      .then(response => {
        console.log('this API has responded!')
        console.log(response.data.results)
        this.setState({starships: response.data.results})
      })
  }
  
  render() {
    return (
      <Starships starships={this.state.starships}/>
    )
  }
}