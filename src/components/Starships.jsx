import { Component } from 'react'
import axios from 'axios'
import Starship from './Starship'

export default class Starships extends Component {
    state = {
        starships: []
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get("https://swapi.dev/api/starships")
            console.log("ships:", response.data.results)
            this.setState({
                starships: response.data.results
            })
        } catch(err){
            console.log(err)
        }
    }
    render() {
        const shipsInState = this.state.starships.map((ship, i) => {
            return <Starship 
                key={"ship-" + i}
                name={ship.name}
                cost={ship.cost_in_credits}
                class={ship.starship_class}
                url={ship.url}
                pilots={ship.pilots}
            />
        })
        return (
            <>
                <h1>Starships</h1>
                {shipsInState}
            </>
        )
    }
}