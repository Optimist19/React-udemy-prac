import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import Search from "./Search";
import NumResults from "./NumResults";
import Box from "./Box";
// import WatchedBox from "./WatchedBox";
import MovieList from "./MovieList";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";
import RatingStar from "./RatingStar";
import Loading from "./Loading";
// import ErrorMessage from "./ErrorMessage";
import MovieDetails from "./MovieDetails";
import { useMovies } from "./cusomHook/useMovies";
import { useLocalStorage } from "./cusomHook/useLocalStorage";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function Movie() {


  // const tempWatchedData = [
  //   {
  //     imdbID: "tt1375666",
  //     Title: "Inception",
  //     Year: "2010",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  //     runtime: 148,
  //     imdbRating: 8.8,
  //     userRating: 10
  //   },
  //   {
  //     imdbID: "tt0088763",
  //     Title: "Back to the Future",
  //     Year: "1985",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  //     runtime: 116,
  //     imdbRating: 8.5,
  //     userRating: 9
  //   }
  // ];

  // const tempMovieData = [
  //   {
  //     imdbID: "tt1375666",
  //     Title: "Inception",
  //     Year: "2010",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  //   },
  //   {
  //     imdbID: "tt0133093",
  //     Title: "The Matrix",
  //     Year: "1999",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  //   },
  //   {
  //     imdbID: "tt6751668",
  //     Title: "Parasite",
  //     Year: "2019",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
  //   }
  // ];

  // const [watched, setWatched] = useState([]);
  
  
  // const [watched, setWatched] = useState(()=>{
  //   const storedValue = localStorage.getItem("watched")
  //   return JSON.parse(storedValue)
  // }); // This work side by side with the useEffect where we set our localStorage, so the watched data won't be set manually by an event handler but by the useEffect, which triggers whenever there is a change in the watched array state. This method is called lay evaluation we are getting our state from localStorage

  // const [movies, setMovies] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  const [query, setQuery] = useState("");

  const [selectedId, setSelectedId] = useState("tt1375666");

  const [watched, setWatched] = useLocalStorage([], "watched")
  // useEffect(() => {
  //   const controller = new AbortController();

  //   async function fetchMovies() {
  //     try {
  //       setIsLoading(true);

  //       setError("");

  //       const res = await fetch(
  //         `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
  //         { signal: controller.signal }
  //       );

  //       if (!res.ok)
  //         throw new Error("Something went wrong with fetching movies");

  //       const data = await res.json();

  //       if (data.Response === "False") throw new Error("Movie not Found");

  //       setMovies(data.Search);
  //       // console.log(data.Search)
  //       // console.log(data)
  //       // setIsLoading(false)
  //     } catch (err) {
  //       console.log(err.message);

  //       if (err.name !== "AbortError") {
  //         setError(err.message);
  //       }

  //       setError("Movie not found");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   if (query.length < 3) {
  //     setMovies([]);
  //     setError("");
  //     return;
  //   }

  //   handleCloseMovie()

  //   fetchMovies();

  //   return () => {
  //     controller.abort();
  //     //On every key strokes, the abort function aborts the fetch request which will result to a message that will look like an error(The user aborted a request), but its actually not an error, it is just only indicating an abort on request.
  //   };
  // }, [query]);

  const {movies, isLoading, error, KEY} = useMovies(query, handleCloseMovie)

  // useEffect(()=>{
  //   localStorage.setItem("watched", JSON.stringify(watched))
  // }, [watched])

  console.log(movies);

  function handleSelectMovie(id) {
    // setSelectedId(id)
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {/* {isLoading ? <Loading /> : <MovieList movies={movies} />} */}

          {isLoading && <Loading />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {/* {error && <ErrorMessage message={error}/>} */}
          {error}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              keyforAPi={KEY}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <div>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </div>
          )}
        </Box>
      </Main>

      <RatingStar maxRating={5} />
      {/* <RatingStar maxRating={10}/>
      <RatingStar /> */}
    </>
  );
}

// The NavBar component is a parent component to Search ad NumResults component. The two are expected to be imported in NavBar componet but perhaps done this way, doing it the normal way you know and this method results to same thing. NavBar component was done to be an elemnt which you know, then we pass in it children component inside of it, so for the children component to show, in the NavBar component, a children props is called. This is just similar to  the example of the children props we did. Check the README file.

// Normally, the props we are passing should have been passed down through the NavBar comp, you know the usual way right, but as it is now, the children props in the NavBar component will convey everything as if it was the normal and usual way we pass data through props.
