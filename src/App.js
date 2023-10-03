/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
        </a>{" "}
         This Project Done By {" "}
        <a target="_blank" href=" ">
        | Akshaya | Niharika | Srejaa | Jyothi 
        </a>{" "}{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
