import axios from "axios"
import React from "react"

export default class Starship extends React.Component {

    state = {
        pilots: []
    }

    async componentDidMount() {
        // fetch all of the pilots that are passed in from props
        // map the array of urls to an array of pending promises
        const pendingPromises = this.props.starship.pilots.map(url => axios.get(url))
        console.log(pendingPromises)
        // wait for all axios calls to respond using Promise.all
        const responses = await Promise.all(pendingPromises)
        console.log(responses)
        // turn the array axios responses into something that we can store in the state and render
        const responseDatas = responses.map(response => response.data)
        console.log(responseDatas)
        // set this into the state to get the data for pilots to later map

        this.setState({
            pilots: responseDatas
        })

    }
    render() {

        const pilots = this.state.pilots.map((pilot, idx) => {
            return (
                <div key={`pilot-${idx}`}>
                    <p>Name: {pilot.name}, their mass: {pilot.mass} </p>

                </div>
            )
        })
        return (
            <div>
                <h2>{this.props.starship.name}</h2>

                <h3>{this.props.starship.class}</h3>

                <p>Manufactured by:{this.props.starship.manufacturer}</p>

                <p>Class: {this.props.starship.starship_class}</p>

                <p>Pilots:</p>
                {pilots.length > 0 ? pilots : 'No known pilots'}
            </div>
        )
    }
}