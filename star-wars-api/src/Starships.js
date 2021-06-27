import React, {useState, useEffect} from 'react'

const Starships = () => {
    const [searchStarships, setSearchStarships] = useState([])
    // const [repos, setRepos] = useState([])

    useEffect(() => {
        const apiUrl = 'https://swapi.dev/api/starships/'
        fetch(apiUrl)
            .then(res => 
                res.json()
            ) .then(data => {
                
        setSearchStarships(data.results)
    })
    .catch(err => console.log(err))
    
}, [])

console.log(searchStarships)
    const showStarships = searchStarships.map((ship) => 
        <div>
            <h2>Starship Name: {ship.name}</h2>
            <h2>Starship Class: {ship.starship_class} </h2>
        </div>

    )
        return(
            <div>
            <h1>Starships</h1>
            {showStarships}
            </div>
        )} 

        export default Starships;