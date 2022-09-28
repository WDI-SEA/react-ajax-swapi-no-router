import React, { Component } from "react";
import axios from 'axios'

export default class Starships extends Component {
    
    state = {
        ships: []
    }

    async componentDidMount() {
        try{ 
            const response = await axios.get('https://swapi.dev/api/starships/?format=json')
            this.setState({
                ships: response.data.results
            })
            console.log(this.state.ships)
        }catch(err){
            console.warn(err)
        }
    }
    
    
    
    render(){
        const shipData = this.state.ships.map((ship, i) => {
            return(
                <div key={`ship${i}`}>
                    <h3>{ship.name}</h3>
                    <p>Model: {ship.model}</p>
                    <p>Manufactured by: {ship.manufacturer}</p>
                    <p>Crew size: {ship.crew}</p>
                    <p>Max Passengers: {ship.passengers}</p>
                </div>
            )
        })

        
        return(
            <div>
                {shipData}
            </div>
        )
    }
}
