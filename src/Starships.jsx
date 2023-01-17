import React, {Component} from "react";

export default class Starships extends Component {


    // Your <Starships> component should map the data retrived from the SWAPI into to <Starship> components that get rendered. Include at least the name and class of the starship and any other data you think is interesting to show th user in the <Starship> component
    
    render () {
        console.log('render')

        const starshipsMap = this.props.starships.map((ship, i) => {
            return (
                <>
                <h3>Name: {this.state.ship.name}</h3>
                <h3>Model: {this.state.ship.model}</h3>
                <h3>Manufacturer: {this.state.ship.manufacturer}</h3>
                <h3>Cost in Credits: {this.state.ship.cost_in_credits}</h3>
                <h3>Starship Class: {this.state.ship.starship_class}</h3>
                </>
            )
        })
    }
}