const Starship = (props) => {
    return (
        <div>
            <h3>{props.starship.name}</h3>
            <p>{props.starship.starship_class}</p>
        </div>
    )
}

export default Starship