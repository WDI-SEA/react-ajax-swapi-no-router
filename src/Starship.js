import React, { Component } from "react";

class Starship extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.starship.name}</h3>
                <p>Class: {this.props.starship.starship_class}</p>
            </div>
        );
    }
}

export default Starship;
