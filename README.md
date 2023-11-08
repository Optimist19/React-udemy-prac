# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

##### Lifting Up State is in TravelList folder

##### Deleting an Item: Child-to-Parent Communication! is in TravelList folder

##### Making reusable component and passing different data is in Steps folder

##### Making reusable component with the "children" Prop is in Steps/Reuseable component with props folder

##### Most of your components will naturally fall into one of three categories, which are:

#### Using the Movie project as an example.

| Points | Explanation |
| ------ | ----------- |
| Stateless or presentational components | The Movies.jsx and Logo.jsx and some other components are example of stateless component. |
| ------ | ----------- |
| Stateful components | The WatchedBox.jsx and Search.jsx and some other components are example of stateful component. |
| ------ | ----------- |
| Structural components |The WatchedBox, Navbar.jsx and some other components, including App.jsx are example of structural components because they show a layout, how components will be displayed. |

##### Alternative way of passing props using the opening and closing component tag. Example was done in the Movie folder, movie.jsx, the NavBar opening and closing tag component in movie.jsx.

##### The alternative to the above passing of props is called explicit props i.e passing element as props.

``` js
	<!-- child -->

    <Main>
      <Box element={
				<MovieList movies={movies} 
			}
		/>
      </Box>

      	<Box element={
				<>
					<WatchedSummary watched={watched}/>
					<WatchedMovieList watched={watched}/>
				</>
			}
		/>
    </Main>

```

``` js
			<!-- grand-child -->

	function Box({element}) {

	const [isOpen, setisOpen] = useState(true);

	return (
			<div className="box">
			<button
				className="btn-toggle"
				onClick={() => setisOpen((open) => !open)}>
				{isOpen ? "–" : "+"}
			</button>
			{isOpen && element}
			</div>
		);
	}

```

The difference is just putting the element word as a props and its syntax, it can be any word though. This is the other way it can be done incase you do not want to use the "children" props method.

#### PropsType: We specify the typeof value of our props that are passed to the component.

``` js
import PropTypes from "props-types"


Rating.propTypes = {
	maxRating: PropTypes.number,
	color: PropTypes.string,
	size: PropTypes.number,
	message: PropTypes.array,
	defaultRating: PropTypes.number,
	onSetRating: PropTypes.func
}



export default function Rating({maxRating, color, size, message, defaultRating, onSetRating}){

	**********
	**********
	**********
	return jsx
}

```


## The useEffect and it cleanup. You will find this in Movie component

``` js

  useEffect(() => {
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

    handleCloseMovie()

    fetchMovies();

    return () => {
      controller.abort();

    };
  }, [query]);

```

## The useEffect and it cleanup. You will find this in MovieDetails component

``` js
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


```

## The useEffect and it cleanup. You will find this in MovieDetails component

``` js
  useEffect(()=>{
    if(!title) return
    document.title = `Movie | ${title}`
    
    return function (){
      document.title = "usePopcorn"
    }
  }, [title])

```

#### You can find this in the hook folder in the  movies component.
``` js
import { useEffect, useState } from "react"

export function useLocalStorage(initialState, key) {
	const [value, setValue] = useState(()=>{
		const storedValue = localStorage.getItem(key)
		return storedValue ? JSON.parse(storedValue) : initialState
	})

	useEffect(()=>{
		localStorage.setItem(key, JSON.stringify(value))
	},[value, key])

	return [value, setValue]
}
// This was in a component before putting it in a custom hook. But I want you to know that exist is the getting a state from the locaStorage. Why there is a conditional rendering is because when there is nothing in the localStorage, it gets to break the application since the array is empty. So, a ternary was done there.
```