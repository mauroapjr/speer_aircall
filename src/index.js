import React from "react";
import App from "./components/App.jsx";
import { createRoot } from 'react-dom/client';
import "./css/app.css";
import "./css/body.css";
import "./css/header.css";

const rootElement = document.getElementById("root"); 
const root = createRoot(rootElement);
root.render(<App />);
