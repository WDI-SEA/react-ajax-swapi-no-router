import { Component } from "react"
import axios from 'axios'

export default class Starship extends Component {
	state = {
		pilots: []
	}

	async componentDidMount() {
		try {
			// have an array of urls to pull data from
			console.log(this.props.pilots)
			// map urls to array of pending axios calls
			const responses = this.props.pilots.map(url => axios.get(url))
			// wait for array of calls to complete
			const pendingPromises = await Promise.all(responses)
			// flatten data into something we can render
			let flatData = []
			// console.log(pendingPromises)
			pendingPromises.forEach(response => flatData = [...flatData, response.data])
			// set flattened data in state
			console.log(flatData)
			this.setState({ pilots: flatData })
		} catch (err) {
			console.warn(err)
		}
	}

	render() {
		const pilots = this.state.pilots.map((pilot, i) => {
			return (
				<li key={`pilot${i}`}>{pilot.name}</li>
			)
		})

		const noPilot = (
			<li>No Pilots Found</li>
		)
		return (
			<div>
				<h2>{this.props.name}</h2>

				<h3>{this.props.class}</h3>

				<h4>{this.props.model} by {this.props.manufacturer}</h4>
				
				<ul>
					{ this.props.pilots.length === 0 ? noPilot : pilots }
				</ul>
			</div>
		)
	}
}