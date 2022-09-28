import axios from 'axios'
import React, {Component} from 'react'


export default class Starships extends Component{
    
    state ={
        starwarsData : []
    }

    componentDidMount(){
        console.log("Inside mount")
        const url = "https://swapi.dev/api/starships/"
        axios.get(url)
        .then((response)=>{
            this.setState({starwarsData : response.data.results.map((starship,ind)=>{
                return (
                    <div key={`starship${ind}`}>
                        <p> Name: {starship.name}</p>
                        <p> Length: {starship.length}</p>
                        <p> Crew: {starship.crew}</p>
                        <p> Consumable: {starship.consumables}</p>
                        --------------------------------------------
                    </div>
                )
            })
        })
        })
    }
    render(){
        console.log(this.state)
        return(
        <div>
             {this.state.starwarsData}
        </div>
        )
    }
}
