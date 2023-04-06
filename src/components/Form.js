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
          id: Math.random() * 1000
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
      />
      <button type="submit" onClick={ submitTodoHandler } className="todo-button">
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