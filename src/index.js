import React from "react";
// const React = require('react');
import ReactDOM from "react-dom/client";
// const ReactDOM = require('react-dom/client');
import App from "./App";
import AppRoutes from "./AppRoutes";
// const App = require('./App');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <App />
  //<AppRoutes />
  //</React.StrictMode>
);
