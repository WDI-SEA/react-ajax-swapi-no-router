import { Component } from "react";

export default class Ship extends Component{
    render(){
        return(
            <article>
            <div>
                <h3>{this.props.name}</h3>
                <p>Model: {this.props.model}</p>
                <p>Class: {this.props.class}</p>
                <p>Manufacturer: {this.props.manufacturer}</p>
                <p>Length: {this.props.length} meters</p>
                <p>Maximum Speed: {this.props.maxSpeed}</p>
            </div>
            </article>
        )
    }
}