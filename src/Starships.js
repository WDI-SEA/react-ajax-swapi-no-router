import React, { Component } from "react"
import axios from "axios"
import StarshipInfo from "./StarshipInfo"

class Starships extends Component {
    state = {
        starships: []
    }

    componentDidMount() {
        axios.get("https://swapi.dev/api/starships")
            .then(response => {
                this.setState({
                    starships: response.data.results
                })
            }) 
            .catch(console.warn)
    }

    render() {
        const allStarships = this.state.starships.map((starship, i) => {
            return (
                <StarshipInfo 
                key={`starship${i}`}
                starships = {starship}
                />
            )
        })
        return (
            <div id="Starships"
                style = {{
                    textAlign: "center"
                }}
            >
                <h1>STARSHIPS ARE MEANT TO FLY! 🛸</h1>
               {allStarships}
            </div>
        )
    }
}

export default Starships