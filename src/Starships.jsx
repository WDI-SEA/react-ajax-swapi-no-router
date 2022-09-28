import React, { Component } from 'react'
import axios from 'axios'

export default class Starships extends Component {
    state = {
        starship: '',
        class: ""
    }
    componentDidMount(){
        const options = {
            headers: {
                Accept: 'application/json'
            }
        }
        // note to self = I need more work with .mpa
        let ships = axios.get(`https://swapi.dev/api/starships/`).map((ships, i) => {
            return(
                <div
                    key = {`ships-${i}`}
                    ships = {ships}
                ></div>
            )
        })
    //         axios.get(`https://swapi.dev/api/starships/`)
    //         .then(response => {
    //             this.setState({
    //                 starship: response.data.name,
    //                 class: response.data.starship_class
    //             })
                
    //         })
    //         .catch(console.warn)
     }
    
    render() {
        return(
        <div>
            <h1>Star wars StarShips</h1>
                <p>{this.state.starship}</p>
                <p>{this.state.class}</p>
        </div>
        )
    }
}