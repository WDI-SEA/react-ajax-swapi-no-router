import { useState, useEffect } from "react"
import axios from 'axios'
import Starship from "./Starship"

export default function Starships(props) {
    const [ships, setShips] = useState([])
    useEffect(() => {
        async function shipGet() {
            try{ 
                const urls = [
                    'https://swapi.dev/api/starships/',
                    'https://swapi.dev/api/starships/?page=2',
                    'https://swapi.dev/api/starships/?page=3',
                    'https://swapi.dev/api/starships/?page=4',
                ]
                let resps = urls.map(url => axios.get(url))

                resps = await Promise.all(resps)
                let resData = []
                resps.forEach(response => resData = [...resData, ...resps.data.results])
                setShips(resData)
            } catch (err) {console.log(err)}
        }

        shipGet()
    }, [])

    const shipsList = ships.map((ships, numma) => <Starship key={numma} ship={ships}/>)
    return (
        <div>
            <h2>Star Wars Ships List</h2>
            {shipsList}
        </div>
    )
}