// import React from 'react'

import { useEffect, useState, useRef } from "react"
import RatingStar from "./RatingStar"
import Loading from "./Loading"

function MovieDetails({selectedId, onCloseMovie, keyforAPi, onAddWatched, watched}) {

  const [isLoading, setIsLoading] = useState(false)
  const [movie, setMovie] = useState({})
  const [userRating, setUserRating] = useState("")


  const counterRef = useRef(0)

  useEffect(()=>{
    if(userRating) counterRef.current = counterRef.current + 1
  },[userRating])


  const iswatched = watched.map(movie =>movie.imdbID).includes(selectedId)

  // console.log(iswatched)

  const watchedUserRating = watched.find(movie =>movie.imdbID ===selectedId) ?.userRating

  // /* eslint-disable */

  // if(imdbRating > 8) [isTop, setTop] = useState(true)


  const {Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre} = movie


  console.log(movie, "movie")
  console.log(keyforAPi)
  console.log(selectedId)


  useEffect(()=>{
    async function getMovieDetails(){

      setIsLoading(true)
      const res = await fetch(`http://www.omdbapi.com/?apikey=${keyforAPi}&i=${selectedId}`)
      const data = await res.json()
      
      console.log(data, "datata")
      setMovie(data)
      setIsLoading(false)
    }

    getMovieDetails()
  }, [selectedId])

  function handleAdd(){
    console.log(runtime)
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecision: counterRef.current
    }

    onAddWatched(newWatchedMovie)
    onCloseMovie()
  }

  useEffect(()=>{

    function callBack(e){
      if(e.code === "Escape"){
        onCloseMovie()
        console.log("Closing")
      }
    }

    document.addEventListener("keydown", callBack)

    return function(){
      document.removeEventListener('keydown', callBack)
    }
  }, [onCloseMovie])

  useEffect(()=>{
    if(!title) return
    document.title = `Movie | ${title}`
    
    return function (){
      document.title = "usePopcorn"
      // console.log(`Clean up effect movie ${title}`)
    }
    //Clean up function triggers whenever the component unmounts to clean up the effect oe before the effect gets re-rendered again.

    // The "title" is the console log will still show the value despite cleanup executing after a comp the component has been unmounted. This is called closure, in javascript every function remembers data when the function is being created at first.
  }, [title])



  return (
	<div className="details">
    {isLoading ? <Loading /> : (
    <>
      <header>
        <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
        <img src={poster} alt={`Poster of ${movie} movie`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>{released} &bull; {runtime}</p>
          <p>{genre}</p>
          <p>
            <span>⭐️</span>
            {imdbRating} IMDb rating
          </p>
        </div>
      </header>
      <section>
        <div>
          {!iswatched ? (
              <>
                <RatingStar maxRating={10} size={24} onSetRating={setUserRating}/>

                {/* {userRating > 0 &&( <button className="btn-add" onClick={handleAdd}>+ Add to list</button> )} */}

                <button className="btn-add" onClick={handleAdd}>+ Add to list</button>
              </>
            ) : <p>You rated with movie{watchedUserRating}<span>⭐️</span>
            </p>
          }
          
        </div>
        <p><em>{plot}</em></p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </>
  )}
    
  </div>
  )
}

export default MovieDetails