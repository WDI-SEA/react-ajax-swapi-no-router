import React, {Component} from 'react'
import './App.css'
import Starships from './Starships'
import axios from 'axios'

export default class Swapi extends Component {
    state = {
        starships: ''
    }

    async componentDidMount() {
        try {
            this.handleStarships()
        } catch(err) {
            this.setState({ starships: 'There was an error accessing this information.'})
            console.warn(err)
        }
    }

    handleStarships() {
        const options = {
            headers: {
                Accept: 'application/json'
            }
        }
        axios.get('https://swapi.dev/api/starships/', options)
            .then(response => {
                console.log(response.data)
                this.setState({starships: response.data.results})
            })
            .catch(console.warn)
    }
    render() {
        return (
            <div>
                {/* {this.state.starships} */}
                <Starships starshipsCall={this.state.starships}/>
                <button onClick={this.handleStarships}>Summon Spaceships</button>
            </div>
        )
    }
}