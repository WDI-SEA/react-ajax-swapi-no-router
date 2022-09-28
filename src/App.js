import React, { Component } from 'react'
import Starships from './Starships'
import axios from 'axios'

export default class App extends Component {

  state = {
    starships: []
  }

  // runs only once -- when the component is first being created and mounted on the virtual dom
  componentDidMount() {
    axios.get('http://swapi.dev/api/starships/')
      .then(response => {
        console.log('The API has responded!')
        // console.log(response.data)
        this.setState({ starships: response.data.results })
      })
  }

  render() {
    console.log(this.state.starships)
    return (
      <div>
    
        <Starships
          starships={this.state.starships}
        />
        
      </div>
    )
  }
}