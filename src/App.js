import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './container/home';
import Dashboard from './container/dashboard';
import Login from './container/login';
import Table from './container/table';
import axios from 'axios';

export default function App() {
  axios.defaults.withCredentials = true;
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/Table">
            <Table />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}