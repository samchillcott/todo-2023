import React, { useState } from 'react'

import styles from "./Todo.module.css"

const Todo = ({ text, todos, setTodos, todo }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedText, setUpdatedText] = useState(text);

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  const completeHandler = () => {
    setTodos(todos.map((item => {
      if (item.id === todo.id) {
        return {
          ...item, complete: !item.complete
        }
      }
      return item
    })))
  }

  const editHandler = () => { setEditMode(true) }

  const updateHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          text: updatedText
        }
      }
      return item
    }))
    setEditMode(false)
  }

  return (
    <div className={ styles.todo }>
      {
        editMode ? (
          <>
            <input
              className={ styles.todo }
              type='text'
              value={ updatedText }
              onChange={ (e) => setUpdatedText(e.target.value) }
            />
            <button
              className={ styles.saveButton }
              onClick={ updateHandler }
            >
              <i className='fas fa-save'></i>
            </button>
          </>
        ) : (
          <>
            <li className={ `${styles.todoItem} ${todo.complete ? styles.complete : ""}` }>
              { text }
            </li>
            <button
              className={ styles.editButton }
              title='Edit todo'
              onClick={ editHandler }
            >
              <i className='fas fa-edit'></i>
            </button>
            <button
              className={ styles.completeButton }
              onClick={ completeHandler }
            >
              <i className='fas fa-check'></i>
            </button>
            <button
              className={ styles.trashButton }
              onClick={ deleteHandler }
            >
              <i className='fas fa-trash'></i>
            </button>
          </>
        )
      }

    </div>
  )
}

export default Todo