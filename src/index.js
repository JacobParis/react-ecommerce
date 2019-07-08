import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import store, { history } from "./store";
import App from "./components/App";

import "./index.css";

const target = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  target
);
