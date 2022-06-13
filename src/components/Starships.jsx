import React, { Component } from "react"
import Starship from "./Starship"
import axios from "axios"

export default class Starships extends Component {
	state = {
		starships: [],
	}
	// async componentDidMount() {
	// 	try {
	// 		const res = await axios.get("https://swapi.dev/api/starships")
	// 		// console.log(jsonData)
	// 		this.setState({ starships: res.data.results })
	// 	} catch (err) {
	// 		console.warn("API ERROR:", err)
	// 	}
	// }

	async componentDidMount() {
		try {
			// keep an array of all the urls that we want to pull data from
			const starshipUrls = [
				"https://swapi.dev/api/starships",
				"https://swapi.dev/api/starships/?page=2",
				"https://swapi.dev/api/starships/?page=3",
				"https://swapi.dev/api/starships/?page=4",
			]
			// map the urls to an array of axios promises
			let responses = starshipUrls.map((url) => axios.get(url))
			// console.log(responses)
			// wait for every promise in the array to resolve
			responses = await Promise.all(responses)
			// console.log(responses)
			// flatten the arrays of arrays into a single array
			let responseData = []
			responses.forEach(
				(response) =>
					(responseData = [...responseData, ...response.data.results])
			)
			// console.log(responseData)
			//put the flattened array into dtate
			this.setState({ starships: responseData })
		} catch (err) {
			console.warn("API ERROR:", err)
		}
	}

	// async componentDidUpdate() {
	// 	try {
	// 		const res = await axios.get("https://swapi.dev/api/starships")
	// 		const nextPage = res.next
	// 		this.setState()
	// 	} catch (err) {
	// 		console.warn("API ERROR:", err)
	// 	}
	// }

	render() {
		const showStarships = this.state.starships.map((ship, i) => {
			return <Starship key={`starship${i}`} starships={ship} />
		})
		return (
			<div className="col">
				<div>Starships</div>
				{showStarships}
			</div>
		)
	}
}
