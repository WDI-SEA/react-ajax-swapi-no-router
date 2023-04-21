import React, { Component } from 'react';
import axios from 'axios';
import Pilot from './Pilot';

export default class Starships extends Component {

    state = {
        starships: []
    }
    
    componentDidMount() {
        const apiUrl = 'https://swapi.dev/api/starships';
        console.log('is this reaching');
        // create api req to get data for first page / general endpoint
        const firstEndpoint = axios.get(`${apiUrl}/`);
        // create api req to get data for 2nd page / endpoint
        const secEndpoint = axios.get(`${apiUrl}/?page=2`);
         // create api req to get data for 3rd page / endpoint
        const thirdEndpoint = axios.get(`${apiUrl}/?page=3`);
         // create api req to get data for 4th page / endpoint
        const fourthEndpoint = axios.get(`${apiUrl}/?page=4`);
        console.log('all endpoints created');
        // create storage array used to store data;
        const storage = [];
        // retreive a req to retrieve all data then send a response displaying the data
        Promise.all([firstEndpoint, secEndpoint, thirdEndpoint, fourthEndpoint])
        .then(resData => {
            // map over the data in the response
            resData.map((res)=> {
                // map over the response and get the results of the data
                res.data.results.map((data) => {
                    // target one value from the data 
                    console.log('model data:', data.model)
                    // push all the data into the storage array
                    storage.push(data)
                    this.setState({
                        // set state to equal the array that is storing the data
                        starships: storage
                })
            })
        })
         })
        .catch(console.log('you have an error in your componenet did point'))
    }

    render() {
        // map over the state and grab each individ starship
        const storage = this.state.starships.map((starship) => {
            console.log('starship', starship)
            const starshipName = starship.name;
            const starshipModel = starship.model;
            const starshipHyperDriveRating = starship.hyperdrive_rating;
            const starshipClass = starship.starship_class;
            const starshipManufacturer = starship.manufacturer;
            return(
                <div class='starships'>
                    <h2>Name: {starshipName}</h2>
                    <h3>Model: {starshipModel}</h3>
                    <h3>Class: {starshipClass}</h3>
                    <Pilot starship={starship} />
                    <h3>HyperDrive Rating: {starshipHyperDriveRating}</h3>
                    <h3>Manufactured By: {starshipManufacturer}</h3>
                </div>
                )
            })
        return (
            <>
            {storage}
            </>
        )
    }
}