import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// import { pizzaData } from "./index.js";

import spinaci from "./pizzas/spinaci.jpg";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
      <img src={spinaci} alt="spinaci pizza" />
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
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </main>
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
