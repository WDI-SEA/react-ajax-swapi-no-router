import React, { Component } from 'react'
import axios from 'axios'

export default class Pilot extends Component {
    state = {
        pilot: ''
    }

    async componentDidMount() {
        const response = await axios.get(this.props.pilot)
        this.setState({ pilot: response.data.name })
    }

    render() {
        return(
            <li>
                {this.state.pilot}
            </li>
        )
    }
}