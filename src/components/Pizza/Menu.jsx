import Pizza from "./Pizza";
import { pizzaData } from "../../data";

export default function Menu() {
  return (
    <>
      <main className="menu">
        <h1>Our Menu</h1>
        {pizzaData.map((pizza) => {
          return (
            <ul className="pizzas" key={pizza}>
              <Pizza
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                photoName={pizza.photoName}
                soldOut={pizza.soldOut}
                key={pizza.id}
              />
            </ul>
          );
        })}
      </main>
    </>
  );
}
