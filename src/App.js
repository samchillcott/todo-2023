import React, { useState, useEffect } from 'react';
import TodoApp from './screens/TodoApp';
import Login from './screens/Login';
import "./App.css"

const App = () => {
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    setAuthenticated(!!token);
  }, []);

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      { !authenticated && <Login setAuthenticated={setAuthenticated}/> }
      { authenticated && <TodoApp /> }
    </>
  );
};

export default App;