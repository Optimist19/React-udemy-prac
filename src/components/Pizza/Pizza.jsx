// import { pizzaData } from "../data"
// import spinaci from "../assets/pizzas/spinaci.jpg"

function Pizza(props) {

  return (
	<>
		<div className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
			<img src={props.photoName} alt={props.name}/>
			<div>
				<h3>{props.name}</h3>
				<p>{props.ingredients}</p>
				<span>{props.price * 3}</span>
			</div>
		</div>
	</>
  )
}

export default Pizza