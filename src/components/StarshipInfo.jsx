import React, { Component } from 'react';

class StarshipInfo extends Component {

    render() {
        return (
            <>
                <h2>Ship Details:</h2>
                <h4>Name: {this.props.starships.name}</h4>
                <h4>Model: {this.props.starships.model}</h4>
                <h4>Class: {this.props.starships.starship_class}</h4>
                <h4>Manufacturer: {this.props.starships.manufacturer}</h4>
                <h4>Hyperdrive Rating: {this.props.starships.hyperdrive_rating}</h4>
            </>
        );
    }
}

export default StarshipInfo;