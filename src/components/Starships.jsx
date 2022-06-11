import axios from "axios"
import React, { Component } from 'react'
import Starship from "./Starship.jsx"

export default class Starships extends Component {
    state = {
        starships: [],
        page: 1,
        maxPage: 0,
    }

    componentDidMount() {
        this.handleAPI()
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.page !== prevState.page) {
            this.handleAPI()
        }   
    }

    handlePrevPage = () => {
        const thisPage = this.state.page        
        this.setState({
            page: thisPage - (thisPage === 0 ? 0 : 1)
        })
    }

    handleNextPage = () => {
        const thisPage = this.state.page
        this.setState({
            page: thisPage + 1
        })
    }

    handleAPI = async (e) => {
        // e.preventDefault()
        try {
            const URL = `https://swapi.dev/api/starships/?page=${this.state.page}`
            const AllShips = await axios.get(URL)
            console.log(AllShips.data)
            this.setState({
                starships: AllShips.data.results

            })
            console.log(this.state.starships)

        } catch (error) {
            console.warn(error)
        }
    }

    render() {
        const renderStarShips = this.state.starships.map((ship, i) => {
            return (
                <Starship 
                    key={`ship${10*(this.state.page-1)+i+1}`} 
                    shipInfo={ship} 
                />
            )
        })

        return (
            <>
                <div>Starships:</div>
                <div>

                <button
                onClick={this.handlePrevPage}
                >next page</button>

                <p>{this.state.page}</p>

                <button
                onClick={this.handleNextPage}
                >next page</button>

                </div>
                {renderStarShips}
            </>
        )
    }
}
