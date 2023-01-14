import React, { Component } from 'react'
import './App.css'
import Starship from './Starship'
import axios from 'axios'

export default class App extends Component {
  state = {
    starships: []
}
async componentDidMount() {
  try{
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      this.setState({
          starships: response.data.results
      })
      console.log(response.data.results)
  } catch(error){
      console.log(error.message)
  }
}

  render() {
    const ships = this.state.starships.map((starship, i)=> {
      return(
      <>
        <Starship 
          key={`starship ${i}`}
          
        />
      </>
      )
    })

    return (
      <></>
    )
  }

 
  
}
