import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { pizzaData } from "./index.js";

import spinaci from "./pizzas/spinaci.jpg";

function App() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
