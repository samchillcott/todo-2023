import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoList from './TodoList'

describe('TodoList', () => {
  const todos = [
    { id: 1, text: 'First todo' },
    { id: 2, text: 'Second todo' },
    { id: 3, text: 'Third todo' }
  ]
  const setTodos = jest.fn()
  const filteredTodos = todos

  it('renders a list of todos', () => {
    render(<TodoList todos={ todos } setTodos={ setTodos } filteredTodos={ filteredTodos } />)
    expect(screen.getByText('First todo')).toBeInTheDocument()
    expect(screen.getByText('Second todo')).toBeInTheDocument()
    expect(screen.getByText('Third todo')).toBeInTheDocument()
  })
})
