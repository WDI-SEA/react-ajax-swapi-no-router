import React, { Component } from "react";
import Starship from "./Starship";
import axios from "axios";

export default class Starships extends Component {
    // state tp hold our api's response
    state = {
        starShips: []
    }
    // make the api call in the componentDidMount (after component has loaded)
    async componentDidMount() {
        try {
            const url = `https://swapi.dev/api/starships/`
            const response = await axios.get(url)
            this.setState({
                starShips: response.data.results
            })
            console.log(response.data)
        } catch (error) {
            console.warn(error)
        }
    }

    render() {
        // map the api data that is held in state to an array of starship components
        // referring from array that was created
        const starShipComponents = this.state.starShips.map((starship, i) => {
            return (
                <Starship 
                    starship={starship}
                    key={`Starship${i}`}
                />
            )
        })
        return (
            <div>
                <h1>Starships:</h1>
                {/* loading message with ternary */}
                {/* when reloaded page, shows loading then shows starhip arr */}
                {starShipComponents.length > 0 ? starShipComponents : 'still loading...'}
            </div>
        )
    }
}