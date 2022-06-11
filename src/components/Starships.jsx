import React, { Component } from "react"
import Starship from "./Starship"
import axios from "axios"

export default class Starships extends Component {
	state = {
		starships: [],
	}
	async componentDidMount() {
		try {
			const res = await axios.get("https://swapi.dev/api/starships")
			// console.log(jsonData)
			this.setState({ starships: res.data.results })
		} catch (err) {
			console.warn("API ERROR:", err)
		}
	}
	render() {
		const showStarships = this.state.starships.map((ship, i) => {
			return <Starship key={`starship${i}`} starships={ship} />
		})
		return (
			<>
				<div>Starships</div>
				{showStarships}
			</>
		)
	}
}
