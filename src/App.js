import React, {Component} from 'react';
import axios from 'axios';
import Starship from './Starship'

export default class App extends Component {

  state = {
    starwarsApi: []
  }

  // use a componentDidMount if you need to display API data on page load
  async componentDidMount() {
    this.handleGetApi()

    const options = {
        headers: {
            Accept: 'application/json'
        }
    }
    const url = 'https://swapi.dev/api/starships'
    try {
        const response = await axios.get(url, options)
        this.setState({
            starwarsApi: response.data.results
        })
    } catch (err) {
        console.log(err)
    }
  }

  handleGetApi = async () => {
      try {
          const options = {
              headers: {
                  Accept: 'application/json'
              }
          }

          const url = 'https://swapi.dev/api/starships'

          const response = await axios.get(url, options)

          this.setState({
            starwarsApi: response.data
          })
          //console.log(this.state.starwarsApi)
          //console.log(this.state.starwarsApi.next)
          //console.log(this.state.starwarsApi[0].starship_class)
      } catch (err) {
          console.warn(err)
      }
  }

  

  

  render() {
  
    const newarray = this.state.starwarsApi.map((ship, idx)=>{
      return (
        <Starship
           shipName={ship.name}
           shipClass={ship.starship_class}
           key={`id-${idx}`}
        />
      )
    })
    return (
    
      <div>
        <h1>StarShips</h1> 
        {newarray}
      </div>
      
    )
}}
