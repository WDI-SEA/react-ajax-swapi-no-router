import React, {Component} from 'react'
import Starships from './Starships'
import axios from 'axios'

// https://swapi.dev/api/starships

export default class App extends Component {
  state= {
    starships: []
  }

  async componentDidMount(){
    try{
      
      const response = await axios.get('https://swapi.dev/api/starships')
      this.setState({starships: response.data.results})

    } catch(err){
      console.log(err)
    }
  }

  render(){
    console.log('App.js is rendering')
    return(
      <div>
        <Starships  starships={this.state.starships} />
      </div>
    )
  }
}