import React, {Component} from "react";

export default class Starship extends Component {
    render() {
        return(
            <>
                <p>Class:{this.props.ship.starship_class}</p>
            </>
        )
    }
}