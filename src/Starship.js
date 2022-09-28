import React, {Component} from 'react'

export default class Starship extends Component {
    render() {
        return (
            <div className='starshipContainer'>
                <h3>{this.props.starship.name} - {this.props.starship.starship_class}</h3>
            </div>
        )
    }
}