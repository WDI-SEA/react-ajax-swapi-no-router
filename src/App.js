import React, { Component } from 'react';
import Starships from './Starships';
import './App.css';

export default class App extends Component {

  render() {
    return(
      <>
        <h1>Star Wars Starships</h1>
        <Starships />
      </>
    )
  }
}