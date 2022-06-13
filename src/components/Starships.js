import { Component } from "react"
import axios from 'axios'
import Starship from './Starship'

export default class Starships extends Component {

    state = {
        starships: []
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://swapi.dev/api/starships/')
            console.log(response.data.results)
            this.setState({ starships: response.data.results})
        } catch (err) {    
            console.warn(err)
        }
    }

    render() {
        const starships = this.state.starships.map((starship, i) => {
            return ( 
                <Starship
                    key={`starship${i}`}
                    name={starship.name}
                    class={starship.starship_class}
                    model={starship.model}
                    manufacturer={starship.manufacturer}
                />
            )
        })
        return (
            <div>
                <h1> Starships </h1>
                {starships}
            </div>
        )
    }
}