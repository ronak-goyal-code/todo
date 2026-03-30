import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice'


function TodoInput() {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()


    return (
        <div className="todo-input">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"
                className="todo-input-field"
            />
            <button onClick={() => {
                if (inputValue.trim() !== '') {
                    dispatch(addTodo(inputValue))
                    setInputValue('')
                }
            }} className="add-todo-btn">Add Todo</button>
        </div>
  )
}

export default TodoInput