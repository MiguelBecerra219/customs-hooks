import { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'

const initialState = []
export const useTodo = () => {
  const funcionDeInicio = () => {
    return JSON.parse(localStorage.getItem('todos') || [])
  }

  const [todos, dispatch] = useReducer(todoReducer, initialState, funcionDeInicio)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = (newTodo) => {
    const action = {
      type: 'Add Todo',
      payload: newTodo
    }

    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: 'Delete Todo',
      payload: id
    }

    dispatch(action)
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: 'Done Todo',
      payload: id
    }

    dispatch(action)
  }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todoCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length
  }
}
