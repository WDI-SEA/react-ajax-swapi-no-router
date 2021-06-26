import { useState, useEffect } from "react";
import ShipCard from './ShipCard.jsx'

const Starships = () => {
    const [ships, setShips] = useState([])

    useEffect(() => {
        Promise.all([
            fetch('https://swapi.dev/api/starships/?page=1'),
            fetch('https://swapi.dev/api/starships/?page=2'),
            fetch('https://swapi.dev/api/starships/?page=3'),
            fetch('https://swapi.dev/api/starships/?page=4')
        ]).then(resPlural => {
            return Promise.all(resPlural.map(resSing =>
            {
                return resSing.json()
            }))
        }).then(data => {
            let shipData = data.map(res => {
                return res.results
            })
            setShips([].concat.apply([], shipData))
            console.log(ships)
        }).catch(error => {
            console.log(error)
        })
    }, [ships])

    return (
        <div>
            <ShipCard />
        </div>
    )
}
export default Starships;