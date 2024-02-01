export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'Add Todo': // Como payload drecivimos el nuevo Todo
      return [...initialState, action.payload]

    case 'Delete Todo': // Como payload recivimos el id del objeto a eliminar
      return initialState.filter(todo => todo.id !== action.payload)

    case 'Done Todo': // Como payload recivimos el id del objeto a marcar
      return initialState.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })

    default:
      return initialState
  }
}
