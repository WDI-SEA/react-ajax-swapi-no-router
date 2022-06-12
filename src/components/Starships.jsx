import React, { Component } from "react";
import Starship from '../components/Starship'
import axios from 'axios'

export default class Startships extends Component {
    state={
        starships: []
    }

    //LIFECYCLE 
    //API RENDER
    async componentDidMount() {
        try {
            const response = await axios.get('https://swapi.dev/api/starships')
            this.setState({starships: response.data.results})
        } catch (error) {
            console.log('error:', error)
        }
    }


    render() {
        const starship = this.state.starships.map((starship, i) => {
            return <Starship  starship={starship} key={`starship${i}`}/>
        })
        return (
            <div>
               {starship}
            </div>
        )
    }
}