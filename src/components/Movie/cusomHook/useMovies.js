import { useEffect,  useState } from "react";

// import React from 'react'


export function useMovies(query, callBack) {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const KEY = "f84fc31d";

	useEffect(() => {

		callBack?.()

		const controller = new AbortController();

		async function fetchMovies() {
		try {
			setIsLoading(true);

			setError("");

			const res = await fetch(
			`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
			{ signal: controller.signal }
			);

			if (!res.ok)
			throw new Error("Something went wrong with fetching movies");

			const data = await res.json();

			if (data.Response === "False") throw new Error("Movie not Found");

			setMovies(data.Search);
			// console.log(data.Search)
			// console.log(data)
			// setIsLoading(false)
		} catch (err) {
			console.log(err.message);

			if (err.name !== "AbortError") {
			setError(err.message);
			}

			setError("Movie not found");
		} finally {
			setIsLoading(false);
		}
		}

		if (query.length < 3) {
		setMovies([]);
		setError("");
		return;
		}

		// handleCloseMovie();

		fetchMovies();

		return () => {
		controller.abort();
		//On every key strokes, the abort function aborts the fetch request which will result to a message that will look like an error(The user aborted a request), but its actually not an error, it is just only indicating an abort on request.
		};
	}, [query]);

	return {movies, isLoading, error, KEY}
}
