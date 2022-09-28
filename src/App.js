import React, { Component } from 'react'
import Starships from './Starships'
import axios from 'axios'
import './App.css'


export default class App extends Component {

  // state = {
  //   starships: []
  // }

  // runs only once -- when the component is first being created and mounted on the virtual dom
  // componentDidMount() {
  //   axios.get('http://swapi.dev/api/starships/')
  //     .then(response => {
  //       console.log('The API has responded!')
  //       // console.log(response.data)
  //       this.setState({ starships: response.data.results })
  //     })
  // }

  render() {
    // console.log(this.state.starships)
    return (
      <div>
        <h1>STARSHIPS!</h1>
        <img src='https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024' />
        <Starships
          // starships={this.state.starships}
        />

      </div>
    )
  }
}