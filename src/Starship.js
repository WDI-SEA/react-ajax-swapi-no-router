import axios from 'axios'
import React, { Component } from 'react'
import Pilot from './Pilot'


export default class Starship extends Component {

    componentDidMount = async () => {
        try {
            const data = this.props.pilots.map((url) => axios.get(url))
            const promisedData = await Promise.all(data)
            const shallowState = []
            promisedData.forEach(pilot => {
                shallowState.push({
                    name: pilot.data.name,
                    url: pilot.data.url
                })
            })
            
            this.setState({
                pilots: shallowState
            })
        } catch(err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div>
                <p>Name: {this.props.aShipName} - Class: {this.props.aShipClass}</p>
                <Pilot 
                    aShipPilot={this.props.aShipPilot}
                />
            </div>
        )
    }
}