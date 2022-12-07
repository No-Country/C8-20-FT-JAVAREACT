import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import '../src/scss/styles.scss';
import MyProvider from "./components/cart/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
