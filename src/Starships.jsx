import axios from "axios";
import React, { Component } from "react";
import Starship from "./Starship";

export default class Starships extends Component{
    state = {
        starships: []
    }
    async componentDidMount(){
        try {
            const url = 'http://swapi.dev/api/starships'
            const response = await axios.get(url)
            this.setState({
                starships: response.data.results
            })
            console.log(response.data)
        } catch(err){
            console.log(err)
        }
    }
    render(){
        const starshipComponents = this.state.starships.map((starship, i) => {
            return(
            <Starship 
                starship={starship}
                key={`Starship${i}`}
                />
            )
        })
            return(
            <div>
                <h1>Starships: </h1>
                {starshipComponents}
            </div>
        )  
    }
}