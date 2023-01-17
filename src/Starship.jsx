import React, {Component} from 'react'
import axios from 'axios'

export default class Starship extends Component {
    state = {
        pilots: []
    }
    async componentDidMount () {
        //fetch all pilots that are passed in from props
        console.log(this.props.starship.pilots)
        //map array of urls to an array of pending promises
        const pendingPromises = this.props.starship.pilots.map(url => axios.get(url))
        console.log(pendingPromises)
        //wait for all axios calls to respond using Promise.all
        const responses = await Promise.all(pendingPromises)
        console.log(responses)
        // turn the array of axios resp into something that we can store in state and render
        const responseDatas = responses.map(response => response.data)
        console.log(responseDatas)
        // toss the data on pilots in state for later mapping
        this.setState({
            pilots: responseDatas
        })
    }
    render () {

        //map out pilots
        const pilots = this.state.pilots.map((pilot, idx) => {
            return (
                <div key={`pilot-${idx}`}>
                    <p>Name: {pilot.name}, their mass: {pilot.mass}</p>
                </div>
            )
        })

        return (
            <div>
                <h2>{this.props.starship.name}</h2>
                <h3>{this.props.starship.class}</h3>
                <p> By: {this.props.starship.manufacturer}</p>
                <p>{this.props.starship.starship_class}</p>

                <h3>Pilots</h3>
                    {pilots.length > 0 ? pilots : 'No pilots found'}
            </div>
        )
    }
}