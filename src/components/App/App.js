import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import Movies from "../Movies/Movies"
import MovieDetail from "../MovieDetail/MovieDetail"
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Movies} />

        <Route path="/details/:id" exact component={MovieDetail} />
      </Router>
    </div>
  )
}

export default App;
