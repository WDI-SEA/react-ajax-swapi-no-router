import React, { Component } from "react";
import Starship from "./Starship";

class StarshipContainer extends Component {
    render() {
        const starshipComponents = this.props.starshipArray.map((starship, index) => {
            return (
                <Starship 
                    starship={starship}
                    key={`starship-${index}`}
                />
            );
        })
        return (
            <div>
                {starshipComponents}
            </div>
        );
    }
}

export default StarshipContainer;
