import React, { Component } from "react";
import './App.css'


export default class Starship extends Component {
    render() {
        
        return(
            <div>
                <h3>Ship name: {this.props.name}</h3>
                <p>Ship class: {this.props.class}</p>
                <p>Crew: {this.props.crew}</p>
                <p>MGLT: {this.props.mglt}</p>
            </div>
        )
    }
}