import React, { Component } from "react";
import Starship from "./Starship";

export default class Starships extends Component {

    render() {
        const ships = this.props.starships.map((ship, i) => {
            return (
                <Starship
                    key={`ship${i}`}
                    ship={ship}
                />
            )
        })
    }
}    