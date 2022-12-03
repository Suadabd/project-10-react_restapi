import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "./Context";
import { BrowserRouter } from "react-router-dom"; //maybe

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

//replaced  strict mode with browser router- imported from react router dom . 

  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




