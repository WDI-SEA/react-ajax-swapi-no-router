import React, {Component} from "react";

export default class Starships extends Component {


    // Your <Starships> component should map the data retrived from the SWAPI into to <Starship> components that get rendered. Include at least the name and class of the starship and any other data you think is interesting to show th user in the <Starship> component
    
    render () {
        console.log('render')

        return (
            <>
            <h1>Ship#: {this.props.index + 1}</h1>
            <h2>Name: {this.props.name}</h2>
            <h4>Model: {this.props.model}</h4>
            <h4>Manufacturer: {this.props.manufacturer}</h4>
            <h4>Cost in Credits: {this.props.cost}</h4>
            <h4>Starship Class: {this.props.class}</h4>
            </>
        )
    }
}