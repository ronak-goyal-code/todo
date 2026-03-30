import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo } from '../features/todos/todoSlice'
import EditTodo from './EditTodo'

function TodoItem({ todo }) {
    const dispatch = useDispatch()
    return (
        <div className="todo-item">
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} className="todo-checkbox" />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="delete-btn">Delete</button>
            <EditTodo todo={todo} />
        </div>
  )
}

export default TodoItem