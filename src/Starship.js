import React, { Component } from "react";
import axios from "axios";

class Starship extends Component {
    state = {
        pilots: "n/a"
    }
    async componentDidMount() {
        try {
            const response = this.props.starship.pilots.map(url => {
                return axios.get(url);
            })
            const pilotData = await Promise.all(response);
            pilotData.forEach((pilot, index) => {
                if (index === 0) {
                    this.setState({pilots: pilot.data.name});
                }
                else {
                    this.setState(prevState => {
                        return {
                            pilots: `${prevState.pilots}, ${pilot.data.name}`
                        }
                    })
                }
            })
        }
        catch (err) {
            console.warn(err);
        }
    }
    render() {
        return (
            <div className="border-2 rounded-lg w-96">
                <a href={this.props. starship.url} target="_blank">
                    <div className="p-3">
                        <h3 className="text-2xl font-bold">{this.props.starship.name}</h3>
                        <p className="text-xs">{this.props.starship.manufacturer}</p>
                        <p>Class: {this.props.starship.starship_class}</p>
                        <p>Cost: {this.props.starship.cost_in_credits} credits</p>
                        <p>Realspace speed: {this.props.starship.MGLT} megalight/hr</p>
                        <p>Passengers & Crew: {this.props.starship.passengers} & {this.props.starship.crew}</p>
                        <p>Pilots: {this.state.pilots}</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default Starship;
