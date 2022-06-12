import React, {Component} from "react";


export default class Starship extends Component{

    render(){
        const {name, starship_class, model, crew, passengers} = this.props.starship
        return(
            <>
             <h3>{name}</h3>
             <ul>
              <li>{starship_class}</li>
              <li>{model}</li>
              <li>{crew}</li>
              <li>{passengers}</li>
             </ul>
            </>
        )
    }
}