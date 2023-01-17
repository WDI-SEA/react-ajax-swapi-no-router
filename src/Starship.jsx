import axios from "axios"
import React, { Component } from "react"


export default class Starship extends Component {
    state = {
        pilots: []
    }

    async componentDidMount() {
        // fetch all of the pilots that are passed in from props
        // console.log(this.props.starship.pilots)
        // map the array of urls to an array of pending promises
        const pendingPromises = this.props.starship.pilots.map(url => axios.get(url))
        // console.log(pendingPromises)
        // wait for all axios calls to respond using Promise.all
        const responses = await Promise.all(pendingPromises)
        // console.log(responses)
        // turn the array of axios responses into something that we can store in state and render
        const responseDatas = responses.map(response => response.data)
        // console.log(responseDatas)
        // toss the data on pilots in state for later mapping
        this.setState({
            pilots: responseDatas
        })
    }

    render() {

         // map out the pilots 
         const pilots = this.state.pilots.map((pilot, idx) => {
            return (
                <div key={`pilot-${idx}`}>
                    <p>Name: {pilot.name}, their mass: {pilot.mass}</p>
                </div>
            )
        })
        return (
            <section>
                <h2>{this.props.starship.name}</h2>

                <h2>{this.props.starship.class}</h2>

                <p>by: {this.props.starship.manufacturer}</p>

                <p>{this.props.starship.Starship_class} class vessel</p>

                <h3>Pilots</h3>

                {pilots.length > 0 ? pilots : 'No pilots Found'}
            </section>
        )
    }
}