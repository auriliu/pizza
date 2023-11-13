import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// import { pizzaData } from "./index.js";

import spinaci from "./pizzas/spinaci.jpg";
import fungi from "./pizzas/funghi.jpg";

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
      <div className="pizzas">
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photo={spinaci}
          price={10}
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          photo={fungi}
          price={12}
        />
      </div>
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photo} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
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
