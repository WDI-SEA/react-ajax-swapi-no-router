import {Component} from "react"

export default class Starship extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h3>{this.props.class}</h3>
                <h4>{this.props.model} by {this.props.manufacturer}</h4>
            </div>
        )
    }
}