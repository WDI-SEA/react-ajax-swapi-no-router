import React, { Component } from 'react'
import axios from  'axios'

export default class Starships extends Component {

    state = {
        starships: []
    }
// MVP GOAL //
//    async componentDidMount() {
//        try {
//            const response = await axios.get('https://swapi.dev/api/starships/')
//            console.log(response.data.results)

//        } catch (err) {
//            console.warn(err)
//        }
//    }

// STRETCH GOAL //

async componentDidMount() {
    try {
        const starshipUrl = [
            'https://swapi.dev/api/starships/',
            'https://swapi.dev/api/starships/?page=2',
            'https://swapi.dev/api/starships/?page=3',
            'https://swapi.dev/api/starships/?page=4',
        ]
        let responses = starshipUrl.map(url => axios.get.apply(url))
        responses = await Promise.all(responses)
        console.log(responses)

        let responseData = []
        responses.forEach(response => responseData = [...responseData, ...response.data.results])
        console.log(responseData)

        this.setState({starships: responseData})
        
    } catch (err) {
        console.warn(err)
    }

}

render() {
   const starships = this.state.starships.map((starship, i) => {

    })
    return (
      <div>
        <Starship 
            key={`starship${i}`}
            name={starship.name}
            class={starship.starship_class}
            model={starship.model}
            manufacturer={starship.manufacturer}
            pilots={starship.pilots}
        />
      </div>
    )
  }
}
