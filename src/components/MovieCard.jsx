import React from 'react'
import './MovieCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock,faStar } from "@fortawesome/free-solid-svg-icons";
const MovieCard = ({movie:{title,poster_path, release_date, original_language, vote_average,runtime}}) => {
  return (
    <div className="movie_main">
    <div className='movie'>
      
      <img src={(poster_path)?`https://image.tmdb.org/t/p/w500/${poster_path}`:'./posterNotAvailable.png'} alt="" />
      <h1>{title}</h1>
        <div className="details_movie">
        <div className="movie_rating">
         <div>  <FontAwesomeIcon icon={faStar} size="1.3x" color="gold" /></div>
            <h4>{vote_average? vote_average.toFixed(1):'N/A'}</h4>
        </div>
        <div className="movie_rating">
           <div> <FontAwesomeIcon icon={faClock} size="1.3x" color="gold" /></div>
            <h4>{release_date? release_date.split("-")[0]:'N/N'}</h4>
        </div>
        </div>
    </div>
    </div>
  )
}

export default MovieCard
