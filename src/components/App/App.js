import React from 'react';
import Movies from "../Movies/Movies"
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Movies} />
      </Router>
    </div>
  )
}

export default App;
