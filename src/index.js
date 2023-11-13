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
  return (
    <main className="menu">
      <h2>our menu</h2>
      <ul className="pizzas">
        {/* rendering lists */}
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photo={pizza.photoName}
          />
        ))}
        {/* <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photo={spinaci}
          price={10}
        /> */}
      </ul>
    </main>
  );
}

function Pizza(props) {
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
      <p>we're currently open</p>
      <p>current time: {new Date().toLocaleTimeString()} </p>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
