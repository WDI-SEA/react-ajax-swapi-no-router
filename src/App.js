import React from 'react'
import {  useState,
          useEffect
} from 'react';
import './App.css';
import DisplayStarships from './DisplayStarships'

function App() {
  const[starshipData, setStarshipData] = useState({results:[]});
  const[apiUrl, setApiUrl] = useState('https://swapi.dev/api/starships')



  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        console.log(data)

        setStarshipData(data)
        
      })
  }, [apiUrl])
  
  
  return (
    <div className="container">
      <h1>Star Wars Starships!</h1>
      <DisplayStarships data={starshipData.results} />
      <button className="prevButton" title={starshipData.previous ? undefined : 'There is no previous page'} disabled={starshipData.previous === null} onClick={() => {
        setApiUrl(starshipData.previous)
      }}>
        Previous Page
      </button>
      {
        starshipData.next ? (
          <button className="nextButton" disabled={starshipData.next === null} onClick={()=>{
            setApiUrl(starshipData.next)
          }}>Next Page</button>
        ) : false
      }
    </div>
  );
}

export default App;
