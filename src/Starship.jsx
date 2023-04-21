import React, { Component } from "react";
import Pilots from './Pilots'
import axios from "axios";

export default class Starship extends Component {
    render() {
        const pilots = this.props.starship.pilots
        const pilotsArray = pilots.map(async (pilot, i) => {
            if (!pilots.length){
                return (
                    <><h4>No Pilots</h4></>
                )
            } else {
                const pilotGet = await axios.get(this.props.pilot)
                await this.setState({
                    pilotGet: pilotGet.data.name
                    })
                console.log(pilotGet)
                return (
                <>
                    <h4>Pilot:</h4>
                    <Pilots 
                        key={"pilot-"[i]}
                        // pilot={this.state.pilotGet.data.name}
                    />
                </>
                )
            }
        })
        return(
            <>
            <h2>{this.props.starship.name}</h2>
            {pilotsArray}
            </>
        )
    }
}