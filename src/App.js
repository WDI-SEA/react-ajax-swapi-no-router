import React, {Component} from 'react';
import Starships from './Starships';


export default class App extends Component {
  render(){
    return(
      <div>
        <h1 style={{color:'#4666FF'}}>Starwars Starship Log</h1>
        <Starships />
      </div>
    )
  }
}