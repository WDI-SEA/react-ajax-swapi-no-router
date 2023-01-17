import React, { Component } from 'react'

export default class Starship extends Component {
    render(){
        return(
            <div>
                <h2>{this.props.starship.name}</h2>
                <p>Model: {this.props.starship.starship_class}</p>
                <p>Manufactured by: {this.props.starship.manufacturer}</p>
            </div>
        )
    }
}