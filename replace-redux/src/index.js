import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configuresStore from './hooks-store/products-store'

import "./index.css";
import App from "./App";

configuresStore()

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
,
  document.getElementById("root")
);
