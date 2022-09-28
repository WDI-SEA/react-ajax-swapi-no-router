import React, { Component } from "react";
import Starship from "./Starship";
import axios from "axios";

export default class Starships extends Component {



    state = {
        starships: []
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/starships')
            console.log('RESPONSE', response.data)
            this.setState({
                starships: response.data.results
            })
        } catch (err) {
            console.log(err);
        }
    }


    componentDidUpdate() {
        // setting state here can cause infinite loop
        console.log('Starships.js did update')
        //always will haveaccess to accurate state information
        console.log('Starships.js current state', this.state)
    }
    //runs when the componet is unmounted - before next render but after state changed
    componentWillUnmount() {
        console.info('Starships.js is unmounting')
    }


    render() {
        const shipsFromState = this.state.starships.map((ship, i) => {
            return (
                <Starship
                    key={`ship-${i}`}
                    name={ship.name}
                    class={ship.starship_class}
                    cost={ship.cost_in_credits}
                    pilots={ship.pilots}
                />
            )
        })

        return (
          <>
          <h1>Starships</h1>
            {shipsFromState}
          </>
        )
    }

}    
