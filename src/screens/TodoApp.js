import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import TodoList from '../components/TodoList'

const TodoApp = ({ setAuthenticated }) => {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.complete === true))
        break
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.complete === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos)
    }
  }

  return (
    <div className="App">
      <Form
        inputText={ inputText }
        setInputText={ setInputText }
        todos={ todos }
        setTodos={ setTodos }
        setStatus={ setStatus }
      />
      <TodoList
        todos={ todos }
        setTodos={ setTodos }
        filteredTodos={ filteredTodos }
      />
      <button
        className='logout-button'
        onClick={() => setAuthenticated(false)}>
        Logout
      </button>
    </div>
  );
}

export default TodoApp