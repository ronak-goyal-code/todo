import React from 'react'
import { useDispatch } from 'react-redux'
import { editTodo } from '../features/todos/todoSlice'

function EditTodo({ todo }) {
    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            const newText = prompt('Edit todo:')
            if (newText && newText.trim() !== '') {
                dispatch(editTodo({ id: todo.id, text: newText }))
            }
        }} className="edit-btn">Edit</button>
    )
}

export default EditTodo