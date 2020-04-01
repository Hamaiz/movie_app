import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"

import Movies from "../Movies/Movies"
import MovieDetail from "../MovieDetail/MovieDetail"
import Search from "../Search/Search"
import './App.css';

export const customHistory = createBrowserHistory()

const App = () => {
  return (
    <div>
      <Router >
        {/* <Switch> */}
        <Route path="/details/:id" exact component={MovieDetail} />
        <Route path="/search-query/:id" exact component={Search} />
        <Route path="/" exact component={Movies} />
        {/* </Switch> */}
      </Router>
    </div>
  )
}

export default App;
