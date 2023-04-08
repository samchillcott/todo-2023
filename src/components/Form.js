import { v4 as uuid } from 'uuid';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()
    if (inputText === "") {
      alert("Please enter a Todo")
    } else {
      setTodos([
        ...todos,
        {
          text: inputText,
          complete: false,
          id: uuid()
        }
      ])
      setInputText("")
    }
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input
        type="text"
        value={ inputText }
        onChange={ inputTextHandler }
        className="todo-input"
        placeholder="Enter a Todo"
      />
      <button type="submit" onClick={ submitTodoHandler } className="todo-button" data-testid="add-todo">
        <i class="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={ statusHandler }>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  )
}

export default Form