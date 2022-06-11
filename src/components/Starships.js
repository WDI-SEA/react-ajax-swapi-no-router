import React, { Component } from 'react'
import axios from 'axios'
import Starship from './Starship'
export default class Starships extends Component {

    state = {
        starship: '',
        url: '',
        manufacturer: '',
        crew: '',
        passengers: '',
        starshipClass: '',
        maxSpeed: '',
        class: '',
        name: '',
        responded: false,
        starshipData: []
    }
    // handle the fact the fetchingAPI data using async/await
    async componentDidMount() {
        try {
            const response = await axios.get("https://swapi.dev/api/starships")
            // const jsonData = await response.json()
            this.setState({ starshipData: response.data.results })
            // console.log(response.data)
        } catch (err) {
            console.warn('api error', err)
        }
    }
    // handle change when opion selected
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
                        index: event.target.key,
                        url: event.target.value
        })
    }
    // handle submit
    handleSubmit = async (event) => {
        try{
            event.preventDefault()
            const url= this.state.url
            const res= await axios.get(url)
            console.log(res)
            this.setState({
                name: res.data.name,
                manufacturer: res.data.manufacturer ,
                crew: res.data.crew,
                passengers: res.data.passengers,
                class: res.data.starship_class,
                maxSpeed: res.data.max_atmosphering_speed,
                responded: true
            })
        }catch(err){
            console.warn('submit error',err)
        }
    }

    render() {
        const optionContainer = (
            <>
                {this.state.starshipData.map((starship, index) => {
                   return <option key={`starship${index}`} value={starship.url}>{starship.name}</option>
                }) }
            </>
        )
        return (
            <div>
                <h2>Starships</h2>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                        <option>Choose Starship</option>
                        {optionContainer}
                    </select>
                    <button
                        type="submit"
                        
                    >Go</button>
                </form>
                {this.state.responded && <Starship state={this.state}/>}
            </div>
        )
    }
}