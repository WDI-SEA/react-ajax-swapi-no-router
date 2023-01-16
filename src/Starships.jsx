import React, { Component } from "react";
import axios from 'axios'

export default class Starship extends Component{
    state = {
        name: '',
        starshipClass: '' //starship_class
        }
        async componentDidMount(){
            const url = 'https://swapi.dev/api/starships'
        

        try {
            const response = await axios.get(url)
            this.setState({
                name: response.data.results.name,
                class: response.data.results.starship_class
            })
        }catch(err){
            console.log(err)
        }
        
    }
    handleGetStarships = async () => {
        try {
            const url = 'https://swapi.dev/api/starships'
            const response = await axios.get(url)
            this.setState({
                name: response.data.results.name,
                class: response.data.results.starship_class
            })
        } catch (err){
            console.warn(err)
        }
    }
    render(){
        return(
            <>
            <p>Name: {this.handleGetStarships.state.name}  </p>
            <p>Class: {this.handleGetStarships.state.starshipClass}</p>
          
            </>
        )
    }
}