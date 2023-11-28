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
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const isOpen = hours >= 14 && hours < 23;

  return (
    <header className="header">
      <h1>Slice</h1>
      <div>
        <h3>Local time: {`${hours}:${minutes}`}</h3>
        <br />
        {isOpen ? (
          <h3>
            We're <span className="accent">open</span>, visit us at:
            <br /> 123 Imaginary Lane,
            <br /> Never Never Land, NL 00000
          </h3>
        ) : (
          <h3>
            We're <span className="accent">closed</span>, visit us from 14:00 🍕
          </h3>
        )}
        {/* <p>local time: {new Date().toLocaleTimeString()}</p> */}
      </div>
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
        <span className="accent">{soldOut ? "SOLD OUT" : `€ ${price}`}</span>
      </div>
    </li>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
