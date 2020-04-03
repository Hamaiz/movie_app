import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history"

import Movies from "../Movies/Movies"
import MovieDetail from "../MovieDetail/MovieDetail"
import Search from "../Search/Search"
import Discover from "../Discover/Discover"
import './App.css';

export const customHistory = createBrowserHistory()

const App = () => {
  return (
    <div>
      <Router >
        <Route path="/details/:id" exact component={MovieDetail} />
        <Route path="/search-query/:id" exact component={Search} />
        <Route path="/discover" exact component={Discover} />
        <Route path="/" exact component={Movies} />
      </Router>
    </div>
  )
}

export default App;
