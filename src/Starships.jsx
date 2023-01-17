import React, {Component} from "react";
import Starship from './Starship'
import axios from "axios";

export default class Starships extends Component {
    state = {
        ships: []
    }

async componentDidMount() {
    const url = 'https://swapi.dev/api/starships/'
    try {
        const response = await axios.get(url)

        this.setState({
            ships: response.data.results
        })
        console.log(response.data.results);
    } catch (error) {
        console.log(error);
    }
}

    render() {
        const allShips = this.state.ships.map((ship, idx) =>{
            console.log(ship);
            return (
                <Starship
                    ship = {ship}
                    key = {`Starship${idx}`}
                    // name = {ship.name}
                    // class = {ship.starship_class}
                />
            )

        })
        return(
            <>
                <ul>
                    {allShips}
                </ul>
            </>
        )
    }
}