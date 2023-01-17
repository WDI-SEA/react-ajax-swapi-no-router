import React, { Component } from 'react';
import Starships from './Starships';
import Starship from './Starship';
// define app component
export default class App extends Component {
  render() {
    // return jsx
    return (
      // render Starships component
      <div>
        <Starships />
      </div>
    );
  }
}

