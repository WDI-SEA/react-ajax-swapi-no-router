import { Component } from "react"
import Starship from "./Starship"
import axios from "axios"

export default class Starships extends Component {
    state = {
        starships: []
    }

    async componentDidMount() {
        
        try{
            //starships fethed from the SWAPI APi
            const res = await axios.get("https://swapi.dev/api/starships")
            console.log(res.data)
            this.setState({ starships: res.data.results })
        } catch  (err) {
            console.warn("API ERROR:", err)
        }
    }

    render() {
        const displayStarships = this.state.starships.map((ship, i)=> {
            return <Starship key={`starship${i}`} starships={ship}/>
        })

        return (
            <>
            <div>Starships</div>
				{displayStarships}
               

            </>
        )

    }
}

//SWAPI call

   //async gunction

   //all the urls will be used



   //map axios get reqs to each url

   //await for every response to resolve

