import React, { Component } from 'react'

export default class Starship extends Component {
    render() {
        console.log(this.props.starship)
        return (
            <div>
                {this.props.starship.name}
            </div>
        )
    }
}