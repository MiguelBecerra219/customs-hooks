import { useState } from 'react'

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue)

  // Resivimos el evento como prop ya que se envia en la forma en la que llamamos la funcion en onClick
  const increment = (value = 1) => {
    setCounter((current) => current + value)
  }

  const decrement = (value = 1) => {
    if (counter <= 0) return
    setCounter((current) => current - value)
  }

  const reset = () => {
    setCounter(initialValue)
  }
  return { counter, increment, decrement, reset }
}
