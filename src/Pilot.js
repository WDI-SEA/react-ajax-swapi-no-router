import axios from 'axios'
import React, { Component } from 'react'

export default class Pilot extends Component {
    state = {
        pilot: ''
    }
    
    async componentDidMount() {
        try {
            const pilot = await axios.get(this.props.url)
            this.setState({pilot: pilot.data})
            
        } catch(err) {
            console.warn(err)
        }
    }

    render() {
        console.log(this.state.pilot)
        return (
            <div className='pilotInfo'>
                <p>{this.state.pilot.name}</p>
                {/* <h4>{this.state.pilot.gender}</h4> */}
            </div>
        )
    }
}