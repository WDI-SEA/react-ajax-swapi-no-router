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
            return Promise.all(resPlural.map(resSing => {
                return resSing.json()
            }))
        }).then(data => {
            let shipData = data.map(res => {
                return res.results
            })
            setShips([].concat.apply([], shipData))
        }).catch(error => {
            console.log(error)
        })
    }, [ships])

    let shipInfo = ships.map(e => {
        return (
            <div className="ship-sing-box">
                <table>
                    <tbody>
                        <tr className="capitalize">
                            <td colspan="2">
                                <h2>{e.name}</h2>
                            </td>
                        </tr>
                        <tr className="capitalize">
                            <th>Class</th>
                            <td>{e.starship_class}</td>
                        </tr>
                        <tr>
                            <th>Cargo Capacity (kg)</th>
                            <td>{e.cargo_capacity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        </tr>
                        <tr>
                            <th>Price (₹)</th>
                            <td>{e.cost_in_credits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        </tr>
                        <tr>
                            <th>Crew Cap. </th>
                            <td>{e.crew}</td>
                        </tr>
                        <tr>
                            <th>Passenger Cap. </th>
                            <td>{e.passengers}</td>
                        </tr>
                        <tr>
                            <th>Hyperdrive Rating</th>
                            <td>{e.hyperdrive_rating}</td>
                        </tr>
                        <tr>
                            <th>Length (m)</th>
                            <td>{e["length"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        </tr>
                        <tr>
                            <th>Manufacturer</th>
                            <td>{e.manufacturer}</td>
                        </tr>
                        <tr>
                            <th>Max Atmo Speed (kph)</th>
                            <td>{e.max_atmosphering_speed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    })

    return (
        <div className="ship-plural-box">
            <ShipCard ships={shipInfo}/>
        </div>
    )
}
export default Starships;