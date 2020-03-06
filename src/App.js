import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavTab from "./components/NavTab";
import Main from './components/pages/Main';
import Instructions from './components/pages/Instructions'


function App() {
  return (
<Router>
  <div>

      <Route path="/" component={NavTab}/>
      <Route path="/" component={Main}/>
      <Route path="/" component={Instructions}/>
      
  </div>
</Router>
  );
}

export default App;
