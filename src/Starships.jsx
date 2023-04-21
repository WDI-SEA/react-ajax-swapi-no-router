import React, { Component } from "react";
import axios from "axios"
import Pilot from "./Pilot"

export default class Starships extends Component {

    state = {
        starships: []
    }

    componentDidMount() {
        console.log("the startship component mounted");
        const promiseOne = axios.get(`https://swapi.dev/api/starships/`)
        const promiseTwo = axios.get(`https://swapi.dev/api/starships/?page=2`)
        const promiseThree = axios.get(`https://swapi.dev/api/starships/?page=3`)
        const promiseFour = axios.get(`https://swapi.dev/api/starships/?page=4`)
        const starshipList = [];
        Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour])
        .then(responseArray => {
            // console.log("Response Array ", responseArray)
            responseArray.map((response, i)=> {
                // console.log("response data: ", response.data.results)
                response.data.results.map((result, i) => {
                    console.log("result data: ", result.name)
                    starshipList.push(result)
                    this.setState({
                        starships: starshipList
                })
            })
        })
         })
        .catch(console.log)
    }

    render() {
        const starshipList = this.state.starships.map((starship, i) => {
            return(
                <>
                    <h3>{starship.name}</h3>
                    <h4>Class: {starship.starship_class}</h4>
                    <p>Hyperdrive rating: {starship.hyperdrive_rating}</p>
                    <Pilot starship={starship} />
                </>
                )
            })
        return (
            <>
            <h2>Starships</h2>
            { starshipList }
            </>
        )
    }
}