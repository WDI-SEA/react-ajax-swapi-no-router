import React, {Component} from 'react'

export default class Starship extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.starship.name}</h2>
                <h3>{this.props.starship.model}</h3>
                <p>{this.props.starship.starship_class}</p>
                <p>{this.props.starship.cost_in_credits}</p>
            </div>
        )
    }
}
