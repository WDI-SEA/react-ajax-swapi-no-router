import { useState, useEffect } from "react";
import ShipCard from './ShipCard.jsx'
import axios from 'axios'

const Starships = () => {
    const [ships, setShips] = useState([])

    useEffect(() => {
        Promise.all([
            axios.get('https://swapi.dev/api/starships/?page=1'),
            axios.get('https://swapi.dev/api/starships/?page=2'),
            axios.get('https://swapi.dev/api/starships/?page=3'),
            axios.get('https://swapi.dev/api/starships/?page=4')
        ]).then(resPlural => {
            let shipData = resPlural.map(resSing => {
                return resSing.data.results
            })
            setShips([].concat.apply([], shipData))
        }).catch(err => console.log(err))
    }, [])

    let shipInfo = ships.map(ship => {
        return <ShipCard ship={ship}/>
    })

    return <div className="ship-plural-box">{shipInfo}</div>
}
export default Starships;