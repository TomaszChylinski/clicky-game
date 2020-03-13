import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import Main from "./components/Main";


const App = () => (
  <div className="container-fluid mainContainer">
    <Intro/>
    <Main /> 
  </div>
);

export default App;
