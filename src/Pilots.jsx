import React, { Component } from "react";
import axios from "axios";

export default class Pilots extends Component {

    state = {
        pilotGet: {name: "Pilot1"}
    }

    // async componentDidMount() {
    //     const pilotGet = await axios.get(this.props.pilot)
    //     await this.setState({
    //         pilotGet: pilotGet
    //     })
    // }
    
    
    render() {
        return <p>{this.state.pilotGet.name}</p>
    }
}