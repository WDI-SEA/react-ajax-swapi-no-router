import { Component } from 'react';
import './App.css';
import Starships from './components/Starships';
export default class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>SWAPI</h1>
        <Starships />
      </div>
    );
  }
}
  

