import React, { Component } from 'react'
import StarshipDisplayInfo from './StarshipDisplayInfo'
import axios from 'axios'




export default class Starships extends Component {
    
    state = {
        // state empty array
        starships: []
    }

    //  async componentDidMount() and a try catch wihin it
    async componentDidMount () {
        try {
            const response = await axios.get('https://swapi.dev/api/starships/')
            // console.log(response)
            this.setState({starships: response.data.results})
        } catch(err) {
            console.warn('oh no careful', err)
        }
    }
  render() {
    //   do a map here with the key for the starships

    const shipInfo = this.state.starships.map((ship, index) => {
        return <StarshipDisplayInfo key={`starshipDisplayInfo${index}`} starships={ship}/>
    })
    return (
      <div>
          <h1>The Starships:</h1>
          
          {shipInfo}
          </div>
    )
  }
}
