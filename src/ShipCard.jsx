import { useState, useEffect } from "react"
import Pilot from './Pilot'
import Film from './Film'

const ShipCard = (props) => {
    const [pilots, setPilots] = useState([])
    const [films, setFilms] = useState([])

    useEffect(() => {
        setPilots(props.ship.pilots)
        setFilms(props.ship.films)
    }, [props.ship.pilots, props.ship.films])

    let pilotInfo = pilots.map(pilot => {
        return (
            <Pilot 
                pilot={pilot}
            />
        )
    })

    let filmInfo = films.map(film => {
        return (
            <Film
                film={film}
            />
        )
    })

    return (
        <div className="ship-sing-box">
            <table>
                <tbody>
                    <tr className="capitalize">
                        <td colspan="2">
                            <h2>{props.ship.name}</h2>
                        </td>
                    </tr>
                    <tr className="capitalize">
                        <th>Class</th>
                        <td>{props.ship.starship_class}</td>
                    </tr>
                    <tr>
                        <th>Pilots</th>
                        <td className="altInfo">{pilotInfo}</td>
                    </tr>
                    <tr>
                        <th>Films</th>
                        <td className="altInfo italic">{filmInfo}</td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                        <th>Cargo Capacity (kg)</th>
                        <td>{props.ship.cargo_capacity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    </tr>
                    <tr>
                        <th>Price (₹)</th>
                        <td>{props.ship.cost_in_credits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    </tr>
                    <tr>
                        <th>Crew Cap. </th>
                        <td>{props.ship.crew}</td>
                    </tr>
                    <tr>
                        <th>Passenger Cap. </th>
                        <td>{props.ship.passengers}</td>
                    </tr>
                    <tr>
                        <th>Hyperdrive Rating</th>
                        <td>{props.ship.hyperdrive_rating}</td>
                    </tr>
                    <tr>
                        <th>Length (m)</th>
                        <td>{props.ship["length"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    </tr>
                    <tr>
                        <th>Manufacturer</th>
                        <td>{props.ship.manufacturer}</td>
                    </tr>
                    <tr>
                        <th>Max Atmo Speed (kph)</th>
                        <td>{props.ship.max_atmosphering_speed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ShipCard