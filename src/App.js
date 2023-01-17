import React, { Component } from 'react';
import Starships from './components/Starships'
import axios from 'axios';

export default class App extends Component {
    state = {
        ships: []
    }

    // SWAPI call
  async componentDidMount() {
    try {
    // all the urls we want to use
    const urls = [
      'https://swapi.dev/api/starships/',
      'https://swapi.dev/api/starships/?page=2',
      'https://swapi.dev/api/starships/?page=3',
      'https://swapi.dev/api/starships/?page=4'
    ]

    // map axios get reqs to each url
    let responses = urls.map(url => axios.get(url))

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    // await for every response to resolve
    responses = await Promise.all(responses)

    // change the respnse data into a nice array for state
    let responseData = []
    responses.forEach(response => responseData = [...responseData, ...response.data.results])
    this.setState({
      ships: responseData
    })
    }catch(err) {
        console.log(err)
    }
}

render(){
    if(this.state.ships.name) {
        console.log(this.state.ships)
    }
    const starships = this.state.ships.map((ship, index) => <Starships key={index} ship={ship} />)
        return(
            <div>
            <p>ships</p>
                {starships}
            </div>
        )
    }
}