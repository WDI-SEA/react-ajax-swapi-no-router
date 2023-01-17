import React from "react"

export default class Starship extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.starship.name}</h2>
                <h3>{this.props.starship.class}</h3>
                <p>Manufactured by:{this.props.starship.manufacturer}</p>
                <p>Class: {this.props.starship.starship_class}</p>
            </div>
        )
    }
}