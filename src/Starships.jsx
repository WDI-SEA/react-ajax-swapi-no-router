import React, { Component } from "react";
import Starship from './Starship'
import axios from "axios";

export default class Starships extends Component {
    state = {
        starships: [],
        page: 1
    }
    
    handlePageButton = (page) => {
        this.setState({
            page: page
        })        
    }

    async componentDidMount() {
        const page1 = await axios.get(`https://swapi.dev/api/starships/?page=1`)
        const page2 = await axios.get(`https://swapi.dev/api/starships/?page=2`)
        const page3 = await axios.get(`https://swapi.dev/api/starships/?page=3`)
        const page4 = await axios.get(`https://swapi.dev/api/starships/?page=4`)
        await this.setState({
            starships: [...page1.data.results,...page2.data.results,...page3.data.results,...page4.data.results,]
        })

        
    }
    render() {
        const starshipsArray = this.state.starships.map((starship, i) => {
            return <Starship 
                key={`Starship-${i}`}
                starship={this.state.starships[i]}
            
            />
        })
        return(
            <>
                <h1>Starships</h1>
                <div>
                </div>
                {starshipsArray}
            </>
        )
    }

}