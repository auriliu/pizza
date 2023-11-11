import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// import { pizzaData } from "./index.js";

import spinaci from "./pizzas/spinaci.jpg";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <h1>Pizza Spinaci</h1>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
      <img src={spinaci} alt="spinaci pizza" />
    </div>
  );
}

function Header() {
  return <h1>fast react pizza co.</h1>;
}
function Menu() {
  return (
    <div>
      <h2>our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Footer() {
  return (
    <div>
      <p>we're currently open</p>
      <p>current time: {new Date().toLocaleTimeString()} </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
