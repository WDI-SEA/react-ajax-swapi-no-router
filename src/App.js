import React, { Component } from 'react'
import Starships from './Starships'
import axios from 'axios'
import './App.css'


export default class App extends Component {

  render() {
    return (
      <div>
        <h1>STARSHIPS!</h1>
        <img src='https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024' />
        <Starships />
      </div>
    )
  }
}