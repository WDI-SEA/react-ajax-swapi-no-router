import React, {Component} from "react";

export default class StarShip extends Component{
    render(){
        return(
            <div className="shipList">
              <p className="name"> Name: {this.props.starship.name}</p>  
              <p className="class"> Class: {this.props.starship.class}</p>  
              <p className="model"> Model: {this.props.starship.model}</p>  
              <p className="crew"> Crew: {this.props.starship.crew}</p>  
            </div>
        )
    }
}