import { Component } from "react"
import Starship from "./Starship"
import axios from 'axios'

export default class Starships extends Component {
	state = {
		starships: []
	}

	async componentDidMount() {
		try {
			const response = await axios.get('https://swapi.dev/api/starships/')
			console.log(response.data.results)
			this.setState({ starships: response.data.results })
		} catch (err) {
			console.warn(err)
		}
	}

	// async componentDidMount() {
	// 	try {
	// 		// keep an array of all of the urls that we want to pull data from
	// 		const starshipUrls = [
	// 			'https://swapi.dev/api/starships/',
	// 			'https://swapi.dev/api/starships/?page=2',
	// 			'https://swapi.dev/api/starships/?page=3',
	// 			'https://swapi.dev/api/starships/?page=4',
	// 		]

	// 		// map the urls to an array of axios promises
	// 		let responses = starshipUrls.map(url => axios.get(url))
	// 		// wait for every promise in the array to resolve
	// 		responses = await Promise.all(responses)
	// 		console.log(responses)
	// 		// flatten the array of arrays into a single array
	// 		let responseData = []
	// 		responses.forEach(response => responseData = [...responseData, ...response.data.results])
	// 		console.log(responseData)
	// 		// put the flattened array into state
	// 		this.setState({ starships: responseData })
	// 	} catch (err) {
	// 		console.warn(err)
	// 	}
	// }

	render() { 
		const starships = this.state.starships.map((starship, i) => {
			return (
				<Starship 
					key={`starship${i}`}
					name={starship.name}
					class={starship.starship_class}
					model={starship.model}
					manufacturer={starship.manufacturer}
					pilots={starship.pilots}
				/>
			)
		})
		return (
			<div>
				<h1>Starships</h1>

				{starships}
			</div>
		)
	}
}