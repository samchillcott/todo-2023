import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TodoApp from './screens/TodoApp';
import Login from './screens/Login';
import PrivateRoute from './PrivateRoute';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={ Login } />
        <PrivateRoute exact path="/" component={ TodoApp } />
      </Switch>
    </Router>
  );
};

export default App;