import React, { Component } from 'react'
import Starships from './Starships'
import axios from 'axios'

export default class App extends Component {

  state = {
    starships: []
  }

  // runs only once -- when the component is first being created and mounted on the virtual dom
  commponentDidMount() {

  }

  render() {
    return (
      <div>
        App
        <Starships />
      </div>
    )
  }
}