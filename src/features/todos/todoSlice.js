import { createSlice } from '@reduxjs/toolkit'

const initialTodos = localStorage.getItem('todos') && JSON.parse(localStorage.getItem('todos')).length > 0
  ? JSON.parse(localStorage.getItem('todos'))
  : []


const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false })
      localStorage.setItem('todos', JSON.stringify(state))
    },

    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
      localStorage.setItem('todos', JSON.stringify(state))
    },

    deleteTodo: (state, action) => {
      const newState = state.filter(t => t.id !== action.payload)
      localStorage.setItem('todos', JSON.stringify(newState))
      return newState
    }, 
    
    editTodo: (state, action) => {
      const { id, text } = action.payload
      const todo = state.find(t => t.id === id)
      if (todo) {
        todo.text = text
      }
      localStorage.setItem('todos', JSON.stringify(state))
    }
  }
})

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer