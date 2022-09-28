import React, { Component } from "react";

class Starship extends Component {
    render() {
        return (
            <div className="border-2 rounded-lg w-96">
                <a href={this.props. starship.url} target="_blank">
                    <div className="p-3">
                        <h3 className="text-2xl font-bold">{this.props.starship.name}</h3>
                        <p className="text-xs">{this.props.starship.manufacturer}</p>
                        <p>Class: {this.props.starship.starship_class}</p>
                        <p>Cost: {this.props.starship.cost_in_credits} credits</p>
                        <p>Passengers & Crew: {this.props.starship.passengers} & {this.props.starship.crew}</p>
                        <p>Realspace speed: {this.props.starship.MGLT} megalight/hr</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default Starship;
