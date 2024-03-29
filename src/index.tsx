import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import 'animate.css';

import { COMMON } from "./core/constants";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById(COMMON.ROOT) as HTMLElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
