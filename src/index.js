import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { pizzaData } from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>fast react pizza co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = 0;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>our menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {/* rendering lists */}
          {pizzas.map((pizza) => (
            <Pizza
              key={pizza.name}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              photo={pizza.photoName}
              soldOut={pizza.soldOut}
            />
          ))}
          {/* <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photo={spinaci}
          price={10}
        /> */}
        </ul>
      ) : (
        <p>no pizzas to show.</p>
      )}
    </main>
  );
}

function Pizza(props) {
  if (props.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.photo} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 12 && hour <= 22;
  console.log(isOpen);

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? <p>we're currently open</p> : <p>we're currently closed</p>}
        <p>current time: {new Date().toLocaleTimeString()} </p>

        <button className="btn">order</button>
      </div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
