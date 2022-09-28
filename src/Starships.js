import React, { Component } from "react"
import axios from "axios"
import StarshipName from "./StarshipName"

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
                <StarshipName  
                key={`starship${i}`}
                starships = {starship}
                />
            )
        })
        return (
            <div id="Starships">
               {allStarships}
                
              
            </div>
        )
    }
}

export default Starships