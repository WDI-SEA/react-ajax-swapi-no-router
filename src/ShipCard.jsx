const ShipCard = (props) => {
    let shipInfo = props.ships.map(e => {
        return (
            <div>
                <h1>{e.name}</h1>
                <p>Class: {e.starship_class}</p>
                <p>Cargo Capacity: {e.cargo_capacity}kg</p>
                <p>Price: {e.cost_in_credits}
                    <img src="AurebeshCredit.png" alt="credits"/>
                </p>
                <p>Crew Capacity: {e.crew}</p>
                <p>Passenger Capacity: {e.passengers}</p>
                <p>Hyperdrive Rating: {e.hyperdrive_rating}</p>
                <p>Length: {e["length"]}m</p>
                <p>Manufacturer: {e.manufacturer}</p>
                <p>Max Atmosphering Speed: {e.max_atmosphering_speed}km/h</p>
            </div>
        )
    })
    return (
        <div>
            {shipInfo}
        </div>
    )
}
export default ShipCard