import React, { Component } from "react";
import Starship from './Starship';
import Starships from './Starships';
import axios from 'axios';

export default class App extends Component {


  state = {
    starships: []
  }




  // runs only once when the component is first created and mounted
  //on the virtual dom
  componentDidMount() {
    // most commonly used lifecycle method
    // used for getting api info to display on page load
    const options = {
      headers: {
        Accept: 'application/json'
      }
    }
    axios.get('https://swapi.dev/api/starships', options)
      .then(response => {
        console.log('the api has responded')
        const starships = response.data;
        this.setState({ starships: response.data });
      })
      .catch(console.warn)
  }

  componentDidUpdate() {
    // setting state here can cause infinite loop
    console.log('Starships.js did update')
    //always will haveaccess to accurate state information
    console.log('Starships.js current state', this.state)
  }
  //runs when the componet is unmounted - before next render but after state changed
  componentWillUnmount() {
    console.info('Starships.js is unmounting')
  }



  render() {
    // render is invoked on component moun

    return (
      <div>
        <Starships
          name={this.state.starships.name}
          class={this.state.starships.class}
        />
      </div>
    )
  }
}
