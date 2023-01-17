import React, { Component } from "react";

export default class Starship extends Component {
    render() {
        return (
            <section>
                {/* accessing data from starship from state arr, by using this.props.[obj within arr].[name of data that we will be extracting data] */}
                <h2>{this.props.starship.name}</h2>
                <h3>{this.props.starship.class}</h3>
                <p>by: {this.props.starship.manufacturer}</p>
                <p>{this.props.starship.starship_class}</p>
            </section>
        )
    }
}