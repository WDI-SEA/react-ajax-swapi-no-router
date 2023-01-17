import React, {Component} from "react";

export default class Starships extends Component {

    state = {
        starships: [],
    }

    // Your <Starships> component should map the data retrived from the SWAPI into to <Starship> components that get rendered. Include at least the name and class of the starship and any other data you think is interesting to show th user in the <Starship> component

    componentDidMount() {
        console.log('componentDidMount')
        fetch("https://swapi.dev/api/starships/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    starships: data.results[0]
                })
            })

    //     console.log(componentDidMount)
    // const swapiURL = `https://swapi.dev/api/starships/`
    // fetch(swapiURL)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         this.setState({
    //             starships: data.results
    //         })
    //     })
    }
    
    render () {
        console.log('render')


        return (


            <div>
                <p>{this.state.starships}</p>
            </div>


        )
}}