import React from 'react'


const DisplayStarships = (props) => {
    const starshipList = props.data

    const bunchOfStarships = starshipList.map((starships, index) => {
        return(
            <li key={index}>
           Name:{starships.name} <br/>
           Class:{starships.starship_class}
            </li>
        )
        
    })


    return(
        <ul>
           {bunchOfStarships}
        </ul>
    )
}

export default DisplayStarships