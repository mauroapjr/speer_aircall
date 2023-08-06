import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

import "./css/body.css";
import "./css/app.css";
import "./css/header.css";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
