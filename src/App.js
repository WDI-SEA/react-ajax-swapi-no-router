//import React from 'react';  
import React, { Component } from 'react';
import  Starships  from './Starships';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Star Ships</h1>
        <Starships />
      </div>
    );
  }
}