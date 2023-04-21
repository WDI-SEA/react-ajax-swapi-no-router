import React, { Component } from 'react'
import axios from 'axios'
import Starship from './Starship'


export default class Starships extends Component {
    //State
  state = {
    starships: [],
  }

  //React Life cycle methods

 componentDidMount = async () => {
    
     try {

        const response = await axios.get('https://swapi.dev/api/starships')
        console.log("Ships:", response.data.results)
        this.setState({
            starships: response.data.results
        })

    //     const url =[
    //         'https://swapi.dev/api/starships/', 
    //         'https://swapi.dev/api/starships/?page=2', 
    //         'https://swapi.dev/api/starships/?page=3', 
    //         'https://swapi.dev/api/starships/?page=4'
    //     ]

    //     const request = url.map((url) => axios.get(url))
         
    //     const responses = await axios.all(request);

    // const starshipNames = responses.map((response) =>
    //   response.data.results.map((ship) =>  <p>{ship.name}</p>),
    //   );
    //   console.log(responses)

    // this.setState({ name: starshipNames });
       
    } catch(err) {
        console.log(err)
     }

  }

  //handle functions
    render() {
        const shipsInState = this.state.starships.map((ship, i) =>{
            return <Starship 
            key={"ship-" + i}
            name={ship.name}
            cost={ship.cost_in_credits}
            class={ship.starship_class}
            url={ship.url}
            pilots={ship.pilots}
            
            />
        })
        return(
            <div>     
            {shipsInState}
            </div>
        )
    }
}