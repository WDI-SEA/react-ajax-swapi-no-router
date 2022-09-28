import React, { Component } from "react"
import Starship from "./Starship"
import axios from "axios"

export default class Starships extends Component {
    state = {
        starships: []
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/starships/')
			console.log("SHIPS:", response.data.results)
            this.setState({
                starships: response.data.results
            })
        } catch(err) {
            console.log(err)
        }
    }
    render() {
        const shipsInState = this.state.starships.map((ship, i) =>{ return(
            <Starship 
                key={`ship${i}`}
                name={ship.name}
                hyperdriveRating={ship.hyperdrive_rating}
                url={ship.url}
                cost={ship.cost_in_credits}
                class={ship.starship_class}
                pilots={ship.pilots}
            />
        )})
        return(
            <>
                <h1>Starships</h1>
                {shipsInState}
            </>
        )
    }
}