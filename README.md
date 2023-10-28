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

| Stateful components | The WatchedBox.jsx and Search.jsx and some other components are example of stateful component. |

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