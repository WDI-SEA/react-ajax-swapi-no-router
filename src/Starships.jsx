import React, {Component} from "react";

export default class Starships extends Component {
    
    render() {
        function commify(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        return (
            <>
            <div className="card">
                <div className="card-title">
                    <h3>Name: </h3>
                    <p>{this.props.starship.name}</p>
                    <h3>Model: </h3>
                    <p>{this.props.starship.model}</p>
                </div>
                <div className="card-body">
                    <h5>Cost: </h5>
                    <p>{commify(this.props.starship.cost_in_credits)} credits</p>
                    <h5>Starship Class: </h5>
                    <p>{this.props.starship.starship_class}</p>
                    <h5>Max Speed: </h5>
                    <p>{this.props.starship.max_atmosphering_speed}</p>
                </div>
            </div>
            </>
        )
    }
}