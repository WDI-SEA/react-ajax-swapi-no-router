import React, { Component } from "react"
import Starships from "./components/Starships"

export default class App extends Component {
	render() {
		return (
			<div className="d-flex flex-column text-center">
				<Starships />
			</div>
		)
	}
}
