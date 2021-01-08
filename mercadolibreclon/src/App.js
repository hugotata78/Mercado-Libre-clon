import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from './Search';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/search">
          {/* Search */}
          <Header />
          <Search />
      </Route>
      <Route path="/">
        <Header />
        <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
