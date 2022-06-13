import axios from "axios"
import React, { Component } from "react"

export default class Starship extends Component {
	state = {
		pilots: []
	}

	async componentDidMount() {
		try {
			// have an array of url to pull data from
			console.log(this.props.starships.pilots)
			// map urls to array of pending axios calls
			const responses = this.props.starships.pilots.map((url) => axios.get(url))
			// wait for an array of calls to complete
			const pendingPromises = await Promise.all(responses)
			// flatten data into something we can render
			let flatData = []
				// console.log(pendingPromises)
			pendingPromises.forEach(response => flatData = [...flatData, response.data])
			console.log(flatData)
			//  set flattened data in state
			this.setState({pilots: flatData})
		} catch (error) {
			console.log("API ERROR:", error)
		}
	}
	render() {
		const pilots = this.state.pilots.map((pilot, i) => {
			return (
				<li 
				style={{listStyleType:"none"}}
				key={`pilot${i}`}
				>
					{pilot.name}
				</li>
			)
		})
		const noPilot = (
			<li
			style={{listStyleType:"none"}}
			>
				No Pilots Found
			</li>
		)
		return (
			<>
				<h1>Name: {this.props.starships.name}</h1>
				<h2>Class: {this.props.starships.starship_class}</h2>
				<h3>Hyperdrive Rating: {this.props.starships.hyperdrive_rating}</h3>
				<p>
					Model: {this.props.starships.model} by:{" "}
					{this.props.starships.manufacturer}
				</p>
				<ul>
					{this.props.starships.pilots.length === 0 ? noPilot : pilots}
				</ul>
			</>
		)
	}
}
