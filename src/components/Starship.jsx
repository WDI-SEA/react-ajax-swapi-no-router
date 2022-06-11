import React, { Component } from "react"

export default class Starship extends Component {
	render() {
		return (
			<>
				<h1>Name: {this.props.starships.name}</h1>
				<h2>Class: {this.props.starships.starship_class}</h2>
				<h3>Hyperdrive Rating: {this.props.starships.hyperdrive_rating}</h3>
			</>
		)
	}
}
