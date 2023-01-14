import React, { Component } from "react";
import './App.css'
import axios from 'axios'

export default class Starships extends Component {
    state = {
        search: '',
        ship: {}
    }

    onChange = (e) => {
        this.setState({
            search: e.target.value 
        })
    }

    onSubmit = async(e) => {
        try{
            e.preventDefault()
            const url = `https://swapi.dev/api/${this.state.search}`
            const response = await axios.get(url)
            console.log(response.data)
            this.setState({
                ship: response.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    render() {
        return(
            <div>

                <h1>Starship Data </h1>

                <form onSubmit={this.onSubmit}>
                    <label htmlFor="search">Search Starship</label>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        onChange={this.onChange}
                        value={this.state.search}
                        required
                    />
                    <button>Search</button>
                </form>

                <div>
                    <h2>Starships</h2>
                    <p>Name: {this.state.ship.results?.name}</p>
                    <p>Class: </p>
                    <p>Model: </p>
                </div>

            </div>
        )
    }
}