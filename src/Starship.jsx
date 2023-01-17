import axios from "axios";
import React, { Component } from "react";

export default class Starship extends Component {

    state = {
        pilots: []
    }

    async componentDidMount() {
        // fetch all of the pilots that are passed in from props
        console.log(this.props.starship.pilots)
        // map the array of urls to an array of pending promises
        const pendingPromises = this.props.starship.pilots.map(url => axios.get(url))
        console.log(pendingPromises)
        // wait for all acios calls to respond using Promise.all
        const responses = await Promise.all(pendingPromises)
        console.log(responses)
        // turn the arr of axiod responses into something that we can store in state and render
        const responseDatas = responses.map((response) => response.data)
        console.log(responseDatas)
        // toss the data on pilot in state for later mapping 
        this.setState({
            pilots: responseDatas
        })
    }

    render() {
        // map out the pilots
        const pilots = this.state.pilots.map((pilot, i) => {
            return (
                <div key={(`pilot-${i}`)}>
                    <p>Name: {pilot.name}, their mass: {pilot.mass}</p>
                </div>
            )

        })
        return (
            <section>
                {/* accessing data from starship from state arr, by using this.props.[obj within arr].[name of data that we will be extracting data] */}
                <h2>{this.props.starship.name}</h2>
                <h3>{this.props.starship.class}</h3>
                <p>by: {this.props.starship.manufacturer}</p>
                <p>{this.props.starship.starship_class}</p>

                <h3>Pilots</h3>

                {pilots.length > 0 ? pilots : 'No Pilots Found'}

            </section>
        )
    }
}