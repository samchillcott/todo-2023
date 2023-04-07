import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TodoApp from './screens/TodoApp';
import Login from './screens/Login';
import "./App.css"
import PrivateRoutes from './routing/PrivateRoutes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={ <TodoApp /> } />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;