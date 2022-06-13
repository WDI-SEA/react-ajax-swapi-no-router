import { Component } from "react"
import Ship from "./Ship"

export default class Starship extends Component{
    state={
        page: 1,
        results: []
    }
    async componentDidMount(){
        try {
            fetch(`https://swapi.dev/api/starships/?page=${this.state.page}`)
                .then(res => res.json())
                .then(jsonData =>{
                    console.log(jsonData.results)
                    this.setState({ results: jsonData.results })
                })
            
        } catch (error) {
            console.warn(error)
        }
    }

    render(){
        const ships = this.state.results.map(ship => {
            return(
                <Ship 
                key = {ship.created}
                name = {ship.name}
                model = {ship.model}
                class = {ship.starship_class}
                manufacturer = {ship.manufacturer}
                length = {ship.length}
                maxSpeed = {ship.max_atmosphering_speed}
                
                />
            )
        });


        return(
            <>
            <article>
            <h1>SWAPI Starships</h1>
                {ships} 
            </article>

            </>

            
        )
    }
}