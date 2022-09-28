import axios from 'axios'
import React, { Component } from 'react'
import Pilot from './Pilot'


export default class Starship extends Component {
    state = {
		pilots: []
	}

    componentDidMount = async () => {
        try {
            const urls = this.props.pilots.map((url) => axios.get(url))
            const promisedData = await Promise.all(urls)
            const shallowState = []
            promisedData.forEach(pilot => {
                if (pilot.data.name) {
                    shallowState.push({
                        name: pilot.data.name,
                        url: pilot.data.url
                    })
                }

            })
            
            this.setState({
                pilots: shallowState
            })
        } catch(err) {
            console.log(err)
        }
    }
    render() {
        const pilotsInState = this.state.pilots.map((pilot, i) => {
            return (
                <Pilot
                    name={pilot.name}
                    url={pilot.url}
                />
            )
        })

        return (
            <div>
                <p>Name: {this.props.aShipName} - Class: {this.props.aShipClass}{ this.props.pilots.length ? <p>Piloted by:</p> : null }{pilotsInState}</p>
            </div>
        )
    }
}