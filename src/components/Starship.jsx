export default function Starship(props) {
    return (
        <div>
            <h4>{props.ship.name}</h4>
            <p>Class: {props.ship.starship_class}</p>
            <p>Hyperdrive Rating: {props.ship.hyperdrive_rating}</p>
            <p>Manufacturer: {props.ship.manufacturer}</p>
        </div>
    )
}