import React from 'react'
import Todo from '../Todo/Todo'
import "./TodoList.css"

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        { filteredTodos.map((todo) => (
          <Todo
            key={ todo.id }
            text={ todo.text }
            id={ todo.id }
            todos={ todos }
            setTodos={ setTodos }
            todo={ todo }
          />
        )) }
      </ul>
    </div>
  )
}

export default TodoList