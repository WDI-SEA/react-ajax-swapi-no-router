import React, {Component} from 'react'

export default class Starship extends Component {
    render() {
        return (
            <div className='starshipContainer'>
                <h1>{this.props.name} - {this.props.model}</h1>
                <p>{this.props.sClass} - {this.props.pilots}</p>
            </div>
        )
    }
}