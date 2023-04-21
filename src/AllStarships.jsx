import React, {Component} from 'react'
import axios from 'axios'
import StarshipInfo from './StarshipInfo'

class AllStarships extends Component {
  state = {
    starships: []
  }


componentDidMount() {
    axios.get('https://swapi.dev/api/starships/')
    .then(response => {
        this.setState({ starships: response.data.results})
    })
    .catch(error => {
        console.log(error)
    })
}

render() {
    const starshipComponents = this.state.starships.map(starship => { 
        return <StarshipInfo key={starship.name} starship={starship}/>
    }
)
console.log(starshipComponents)
console.log(this.state.starships)


  return  (
    <div>
      <h2>Starwars Starships:</h2>
      <p>{starshipComponents}</p>
      
    </div>
    )
  }
}

export default AllStarships