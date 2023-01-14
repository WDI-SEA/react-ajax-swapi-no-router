import React, { Component } from "react";
import './App.css'


export default class Starship extends Component {
    render() {
        const starships = this.state.starships.map((starship, i) => {
            
        })
        return(
            <div>
                <h2>{starships.name}</h2>
            </div>
        )
    }
}