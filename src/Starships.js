import React, {Component} from 'react'
import axios from 'axios'
import Starship from './Starship'

export default class Starships extends Component {
    state = {
          starships: []
        }
      
    async componentDidMount() {
        try {
            const response = await axios.get('https://swapi.dev/api/starships')
            this.setState({ starships: response.data.results})
        }catch (err) {
            this.setState({starships: 'there was an error'})
              console.warn(err)
          }
        }
    render() {
        const allStarships = this.state.starships.map((starship, idx) => {
            return (
                    <Starship 
                    key={`starship${idx}`}
                    starship={starship}                    
                    />   
            )
          })
        return (
            <div>
                {allStarships}
            </div>
        )
    }
}