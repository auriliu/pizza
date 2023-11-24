import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { pizzaData } from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
    </div>
  );
}

function Header() {
  const hour = new Date().getHours();
  const isOpen = hour >= 12 && hour <= 22;
  return (
    <header className="header">
      <h1>Urban Slice</h1>
      <div className="order">
        {isOpen ? <p>we're currently open</p> : <p>we're currently closed</p>}
        <p>current time: {new Date().toLocaleTimeString()}</p>
      </div>
      <p>
        123 Imaginary Lane <br /> Never Never Land, NL 00000 United Dreams of
        Enchantment
      </p>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = 0;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
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

function Pizza({ soldOut, photo, name, ingredients, price }) {
  // if (soldOut) return null;

  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photo} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        {soldOut ? "SOLD OUT" : `£ ${price}`}
      </div>
    </li>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
