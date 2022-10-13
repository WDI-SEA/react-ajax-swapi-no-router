import React, { Component } from 'react';
import axios from 'axios';
import Starships from './Starships';

export default class App extends Component {
  state= {
    starships: []
  };

  async componentDidMount(){
    try{

      const response = await axios.get('https://swapi.dev/api/starships')
      this.setState({starships: response.data.results})

    } catch(err){
      console.log(err)
    };
  };

  render(){
    console.log('App.js rendering')
    return(
      <div>
        <Starships  starships={this.state.starships} />
      </div>
    )
  };
};