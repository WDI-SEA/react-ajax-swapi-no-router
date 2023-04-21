import React, { Component } from 'react'
import axios from 'axios'

export default class Starshipclass extends Component {
    //State
 

  //React Life cycle methods

 async componentDidMount(){
    
     try {

        const url =[
            'https://swapi.dev/api/starships/', 
            'https://swapi.dev/api/starships/?page=2', 
            'https://swapi.dev/api/starships/?page=3', 
            'https://swapi.dev/api/starships/?page=4'
        ]

        const request = url.map((url) => axios.get(url))
         
        const responses = await axios.all(request);

    const starshipClass = responses.map((response) =>
      response.data.results.map((ship) =>  <p>{ship.class}</p>),
      );
      

    this.setState({ class: starshipClass });
       
    } catch(err) {
        console.log(err)
     }

  }

  //handle functions
    render() {
        return(
            <div>     
            {this.state.class} 
            </div>
        )
    }
}