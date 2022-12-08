import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import MyProvider from './components/cart/Context';
import "./index.css";
import App from "./App";
import "../src/scss/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <MyProvider>
        <App />
      </MyProvider>
    </React.StrictMode>
  </Router>
);
