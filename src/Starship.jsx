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
			console.log("DATA WHICH WAS PROMISED", promisedData)
			const shallowState = []
			promisedData.forEach((pilot) => {
				console.log("PILOT NAME:", pilot.data.name, pilot.data.url)
				if (pilot.data.name) {
					shallowState.push({
						name: pilot.data.name,
						url: pilot.data.url,
					})
				}
			})
			this.setState({
				pilots: shallowState,
			})
        } catch(err) {
            console.log(err)
        }
    }
    render () {
        const pilotsInState = this.state.pilots.map((pilot, i) => {
            return(
                <div>
                     <h3>Pilots</h3>
                <Pilot 
                    name={pilot.name}
                    url={pilot.url}
                />
                </div>
               
            )
        })
        return (
            <>
                <h2>{this.props.name}</h2>
                <p>Class: {this.props.class}</p>
                <p>Cost: {this.props.cost}</p>

                {pilotsInState}
            
            </>
        )
    }
}