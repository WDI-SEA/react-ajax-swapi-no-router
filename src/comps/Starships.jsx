import React from "react"
import Starship from "./Starship"
import axios from "axios"

export default class Starships extends React.Component {
    // here is the state for our API

    state = {
        starships: []
    }

    async componentDidMount() {
        try {
            const url = 'https://swapi.dev/api/starships'
            const response = await axios.get(url)
            this.setState({
                starships: response.data.results
            })
        } catch (err) {
            console.warn(err)
        }
    }

    render() {
        // map the api data that is held in state

        const starshipComps = this.state.starships.map((starship, idx) => {
            return (
                <Starship
                    starship={starship}
                    key={`Starships${idx}`}
                />
            )
        })
        return (
            <div>
                <h1>Starships:</h1>
                {/* LOGICAL and SHORT CIRCUITING : IF FIRST VALUE FALSEY, SECOND VALUE WILL BE SHOWN*/}
                {/* {starshipComps && 'Loading Starships...'} */}

                {/* Loading message with a ternary */}
                {starshipComps.length > 0 ? starshipComps : 'Still loading...'}
            </div>
        )
    }
}