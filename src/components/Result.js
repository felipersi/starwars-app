import React, {useContext, useEffect} from 'react'
import { SwapiContext } from "../context/Swapi";
import { CardFilm } from "./Cards/CardFilm";

const Result = () => {

  const { 
    state: { films }} = useContext(SwapiContext)

  useEffect(() => {
 //console.log("results ", films)
  }, [films])  

  return (
      <div className="container-fluid">
          <CardFilm films={films}/>
      </div>
  )
}

export default Result