import React, { Component } from "react";

export default class Starship extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.starship.name}</p>
                <p>Model: {this.props.starship.model}</p>
            </div>
        )
    }
}