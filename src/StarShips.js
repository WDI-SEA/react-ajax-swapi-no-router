import React, { Component} from "react"
import axios from "axios"
import StarShip from "./StarShip"

export default class StarShips extends Component{
    state={
        starships: [ ]
    }

    componentDidMount () {
        axios.get("https://swapi.dev/api/starships")
            .then(response => 
                this.setState({starships:response.data.results}))
            .catch(console.warn)
    }

    componentDidUpdate (){ }
    render(){
        const starship = this.state.starships.map((starship, i)=>{
            return(
                <StarShip
                    key= {`starship ${i}`}
                    starship= {starship}
                 />
            )
        })
        return(
            <div>
                <h1> StarShips are meant to fly </h1>
                <p> {starship}</p>
            </div>
        )
    }
}