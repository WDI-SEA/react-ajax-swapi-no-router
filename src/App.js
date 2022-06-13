import React, { Component } from 'react'
import Starships from './components/Starships'


export default class App extends Component {

  state= {
    starships: []
  }

  async componentDidMount() {
      try {
          let starshipsUrl = `https://swapi.dev/api/starships` 
          let res = await fetch(starshipsUrl)
          let jsonData = await res.json()
          // console.log(jsonData)
          let starships = jsonData.results
          // console.log(starships)
          while (jsonData.next) {
              starshipsUrl = jsonData.next
              res = await fetch(starshipsUrl)
              jsonData = await res.json()
              starships = starships.concat(jsonData.results)
              // console.log(starships)
              this.setState({starships:starships})
          }
          
      } catch (err) {
          console.log(err)
      }
    

  }

  render() {
    return (
      <div className="app-container">
        <Starships starships={this.state.starships}/>
      </div>
    )
  }
}