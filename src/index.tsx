import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { OptionsContextProvider } from "@Options"; 

render(
    <BrowserRouter basename="showcase">
        <OptionsContextProvider>
            <App />
        </OptionsContextProvider>
    </BrowserRouter>,
    document.getElementById("showcase")
);