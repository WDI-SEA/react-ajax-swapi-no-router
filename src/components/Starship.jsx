import React, { Component } from "react"

export default class Starship extends Component {
	render() {
		return (
			<>
				<h1>Name: {this.props.starships.name}</h1>
				<h1>Class: {this.props.starships.starship_class}</h1>
			</>
		)
	}
}