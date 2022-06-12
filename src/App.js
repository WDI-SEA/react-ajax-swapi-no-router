import React, {Component} from 'react'
import Starships from './components/Starships'

export default class App extends Component {
  render () {
    return (
      <>
        <h1>Swapi Starwars</h1>

        <Starships />
      </>
    )
  }
}